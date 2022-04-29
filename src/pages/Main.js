import '../styles/Main.css';
import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Map from './Map.js';
import Geocoder from 'react-native-geocoding';  
import JobSearch from '../components/JobSearch';
import GetImage from '../components/GetImage';
import JobResult from "../components/JobResult.js";
import JobResultLarge from "../components/JobResultLarge.js";
import Select from 'react-select';

const availableTypes = [
    { label: 'Full Time', name: "typesearch", value: 'full-time' },
    { label: 'Internship', name: "typesearch", value: 'internship' },
];

const availableRemotes = [
    { label: 'In Person', name: "remotesearch", value: 'in-person' },
    { label: 'Remote', name: "remotesearch", value: 'remote' },
];

class Main extends Component{

    componentDidMount(){
        document.title = 'Job Searching'; 

        let params = [];
        params.push({"keyword": "", "filter": ""});
        
        JobSearch(params, '')
            .then(response => {
            console.log("starting off with an empty search")
            
            this.setState({
                data: response.data,
            });
            this.addImages();
            this.addMarkers();
        });
    }
    constructor(){
        super();
        this.state = {
            showTypesBool: false,
            showRemotesBool: false,

            showMapBool: false,
            input : {
                keywordsearch: "",
                locationsearch: "",

                typesearch: "",
                remotesearch: "",

                salarysearch: "",
                companysearch: "",
                sizesearch: "",
                datesearch: "",
            },
            data : [],
            largejob : [],
            locations : []
        }
        this.onChange = this.onChange.bind(this);
        this.onTypesChange = this.onTypesChange.bind(this);
        this.onRemotesChange = this.onRemotesChange.bind(this);

        this.handleSearchSubmit = this.handleSearchSubmit.bind();
        this.addImages = this.addImages.bind(this);
        this.addMarkers = this.addMarkers.bind(this);

        this.showTypes = this.showTypes.bind(this);

        this.showRemotes = this.showRemotes.bind(this);

        this.showMap = this.showMap.bind(this);

        this.makeLarge = this.makeLarge.bind(this);
    }


    onChange(e){
        this.state.input[e.target.name] = e.target.value;
        console.log("changing input");
        console.log(this.state.input);
    }

    async addImages() {

        console.log("start addImages");

        var jobs = this.state.data;
        for(var i = 0; i < jobs.length; i++)
        {
            var imageurl = await GetImage(jobs[i].email)
                .then(
                    jobs[i]["image"] = imageurl)
                        .then(
                            this.setState({
                                data: jobs
                            }),
                        );
        }

        console.log("end addImages");

    }

    async addMarkers() {

        console.log("start addMarkers");

        var jobs = this.state.data;
        for(var i = 0; i < jobs.length; i++)
        {
            await Geocoder.from(jobs[i].location)
                .then(latlng => Promise.resolve(latlng))
                    .then(results => {
                        var loc = results.results[0].geometry.location;
                        var statuscode = results.status;

                        loc["text"] = jobs[i].companyName + ": " + jobs[i].title;
                
                        if (statuscode == 'OK') {
                            this.setState({
                                locations: this.state.locations.concat(loc)
                            });
                            console.log("locations updated");
                            console.log(this.state.locations);
                        } else {
                            alert('Geocode was not successful for the following reason: ' + statuscode);
                            return null;
                        }
                    });
        }

        console.log("end addMarkers");

    }

    handleSearchSubmit = () => {

        let params = [];

        let keywordsearch = (this.state.input["keywordsearch"]);
        let locationsearch = (this.state.input["locationsearch"]);
        let typesearch = (this.state.input["typesearch"]);
        let remotesearch = (this.state.input["remotesearch"]);
        let salarysearch = (this.state.input["salarysearch"]);
        let namesearch = (this.state.input["companysearch"]);
        let sizesearch = (this.state.input["sizesearch"]);
        let datesearch = (this.state.input["datesearch"]);

        
        if(keywordsearch != '') {
            params.push({"keyword": keywordsearch, "filter": ""});
        }
        if(locationsearch != '') {
            locationsearch = locationsearch.toUpperCase();
            params.push({"keyword": locationsearch, "filter": "location"});
        }
        if(typesearch != '') {
            params.push({"keyword": typesearch, "filter": "type"});
        }
        if(remotesearch != '') {
            params.push({"keyword": remotesearch, "filter": "remote"});
        }
        if(salarysearch != '') {
            params.push({"keyword": salarysearch, "filter": "salary"});
        }
        if(namesearch != '') {
            params.push({"keyword": namesearch, "filter": "companyName"});
        }
        if(sizesearch != '') {
            params.push({"keyword": sizesearch, "filter": "companySize"});
        }
        if(datesearch != '') {
            if(datesearch.length > 10)
            {
                alert("Date given is too long.");
            }
            datesearch = datesearch.substring(0, 4) + datesearch.substring(5, 7) + datesearch.substring(8, 10);

            params.push({"keyword": datesearch, "filter": "date"});
        }


        if(params.length == 0)
        {
            params.push({"keyword": "", "filter": ""});

            JobSearch(params, '')
                .then(response => {
                console.log("back in handle submit for keyword")
                console.log(response);
                
                this.setState({
                    data: response.data,
                });
                this.addImages();
                this.addMarkers();
            });
        }
        else
        {
            JobSearch(params, '')
                .then(response => {
                console.log("back in handle submit for keyword")
                console.log(response);
                
                this.setState({
                    data: response.data,
                });
                this.addImages();
                this.addMarkers();
            });
        }

        console.log("search submitted");

    }
    


    showTypes(event) {
        event.preventDefault();

        this.setState({ showTypesBool: !this.state.showTypesBool });

    }

    Types = () => (
        <div
            className="Types"
        >

            <Select
                placeholder="Choose type"
                options={availableTypes}
                isMulti
                onChange={this.onTypesChange} 
            />
            
        </div>
    )

    onTypesChange(e){

        if(e.length == 0)
        {
            this.state.input.typesearch = "";
        }
        else
        {
            this.state.input[e[0].name] = e[0].value;
        }
        
        console.log("changing type input");
        console.log(this.state.input);

        this.handleSearchSubmit();
        
    }

    showRemotes(event) {
        event.preventDefault();
        
        this.setState({ showRemotesBool: !this.state.showRemotesBool });

    }

    Remotes = () => (
        <div
            className="Remotes"
        >

            <Select
                placeholder="Remote?"
                options={availableRemotes}
                isMulti
                onChange={this.onRemotesChange} 
            />

        </div>
    )

    onRemotesChange(e){

        if(e.length == 0)
        {
            this.state.input.remotesearch = "";
        }
        else
        {
            this.state.input[e[0].name] = e[0].value;
        }
        
        console.log("changing remote input");
        console.log(this.state.input);

        this.handleSearchSubmit();

    }

    SalariesResults = () => (
        <div>
            <span>
                <input name="salarysearch" placeholder="Salary" type="number" value={this.state.input.search} 
                    onChange={this.onChange} 
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                        this.handleSearchSubmit()
                        }
                    }}/>  
            </span>
        </div>
    )

    NamesResults = () => (
        <div>
            <span>
                <input name="companysearch" placeholder="Company Name" type="text" value={this.state.input.search} 
                    onChange={this.onChange} 
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                        this.handleSearchSubmit()
                        }
                    }}/>  
            </span>
        </div>
    )

    SizesResults = () => (
        <div>
            <span>
                <input name="sizesearch" placeholder="Company Size" type="number" value={this.state.input.search} 
                    onChange={this.onChange} 
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                        this.handleSearchSubmit()
                        }
                    }}/>  
            </span>
        </div>
    )

    DatesResults = () => (
        <div>
            <span>
                <input name="datesearch" placeholder="Posted after MM/DD/YYYY" type="date" maxLength="10" value={this.state.input.search} 
                    onChange={this.onChange} 
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                        this.handleSearchSubmit()
                        }
                    }}/>  
            </span>
        </div>
    )

    showMap(event) {
        event.preventDefault();

        this.setState({ showMapBool: !this.state.showMapBool });
        
    }


    makeLarge = (input) => {
        
        console.log("MAKE LARGE");
        console.log("input:");
        console.log(input);

        this.setState(
            { largejob: input },
            () => { console.log("largejob has been updated: ")
                    console.log(this.state.largejob) }
        );

    }

    
    JobsResults = () => (

        this.state.data.length != 0
            ? (

                this.state.data.map(jobdata=>(
                    <JobResult 
                        title={jobdata.title} companyName={jobdata.companyName} location={jobdata.location}
                        salaryRangeStart = {jobdata.salaryRangeStart} salaryRangeEnd = {jobdata.salaryRangeEnd}
                        companySize = {jobdata.companySize} description={jobdata.description}
                        email={jobdata.email} type={jobdata.type} remote={jobdata.remote}
                        date={jobdata.date} applyLink={jobdata.applyLink}
                        image={jobdata.image}
                            
                        makeLarge={this.makeLarge}
                    ></JobResult>
                    )
                )

            )
            : (
                null
            )

    )


    JobsResultsLarge = () => (

        this.state.largejob.length != 0
            ? (

                <JobResultLarge
                    data={this.state.largejob}
                ></JobResultLarge>

            )
            : (
                null
            )

    )



    render(){
        return(
            
            <div className="Main">
                <div className="Header">
                    
                    <span>
                        <input name="keywordsearch" className="search-input" placeholder="Search" type="text" value={this.state.input.search} 
                            onChange={this.onChange}
                            onKeyPress={e => {
                                if (e.key === 'Enter') {
                                this.handleSearchSubmit()
                                }
                            }}/>
                        <input name="locationsearch" className="search-input" placeholder="Location" type="text" value={this.state.input.search} 
                            onChange={this.onChange}
                            onKeyPress={e => {
                                if (e.key === 'Enter') {
                                this.handleSearchSubmit()
                                }
                            }}/>
                        <input type="submit" value="Find" className="search-submitB" onClick={(e) => this.handleSearchSubmit()}/>  
                        &nbsp;Employer?&nbsp;
                        <Link to ="../" class="loginsignupgroup">Log In</Link>
                        &nbsp;or&nbsp; 
                        <Link to="../signup" class="loginsignupgroup">Sign Up</Link>
                    </span>
                </div>
                
                <div className="Filters">

                    <div className="filter">

                        <this.Types />

                    </div>

                    <div className="filter">

                        <this.Remotes />

                    </div>

                    <div className="filter">
                        {
                            <this.SalariesResults />
                        }
                    </div>

                    <div className="filter">
                        {
                            <this.NamesResults />
                        }
                    </div>

                    <div className="filter">
                        {
                            <this.SizesResults />
                        }
                    </div>


                    <div className="filter">
                        {
                            <this.DatesResults />
                        }
                    </div>


                </div>



                <button class="mapbutton" onClick={this.showMap}>
                    Show Map
                    </button>
                        {
                        this.state.showMapBool
                            ? (
                                <div class="mapstyling">
                                    <Map locations={this.state.locations}></Map> 
                                </div>
                              )
                            : null
                        }
                        
                <br/>
                <br/>

                

                <div className="JobResults">

                    {
                        <this.JobsResults />
                    }


                </div>

                <div className="JobResultsLarge">

                    {
                        <this.JobsResultsLarge />
                    }


                </div>

 
            </div>

        );
    }
}

export default Main;