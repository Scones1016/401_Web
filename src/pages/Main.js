import '../styles/Main.css';
import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Map from './Map.js';
import JobSearch from '../components/JobSearch';
import JobResult from "../components/JobResult.js";
import Select from 'react-select';

const availableTypes = [
    { label: 'Full Time', name: "typesearch", value: 'full-time' },
    // { label: 'Part Time', value: 'this.state.input.search' },
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
            // console.log(response);
            
            this.setState({
                data: response.data,
            });
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
            data : []
        }
        this.onChange = this.onChange.bind(this);
        this.onTypesChange = this.onTypesChange.bind(this);
        this.onRemotesChange = this.onRemotesChange.bind(this);

        this.handleSearchSubmit = this.handleSearchSubmit.bind();

        this.showTypes = this.showTypes.bind(this);
        this.closeTypes = this.closeTypes.bind(this);

        this.showRemotes = this.showRemotes.bind(this);
        this.closeRemotes = this.closeRemotes.bind(this);

        this.showMap = this.showMap.bind(this);
    }


    onChange(e){
        this.state.input[e.target.name] = e.target.value;
        console.log("changing input");
        console.log(this.state.input);
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
            });
        }



        console.log("search submitted");

        

    }
    


    showTypes(event) {
        event.preventDefault();

        this.setState({ showTypesBool: !this.state.showTypesBool });

        
        // this.setState({ showTypesBool: true }, () => {
        //     document.addEventListener('click', this.closeTypes);
        // });
    }
    closeTypes(event) {
        // if (!this.typesdropdown.contains(event.target)) {
        //     this.setState({ showTypesBool: false }, () => {
        //         document.removeEventListener('click', this.closeTypes);
        //     });
        // }
        // this.setState({ showTypesBool: false }, () => {
        //     document.removeEventListener('click', this.closeTypes);
        // });
    }

    Types = () => (
        <div
            className="Types"
            // ref={(element) => {
            // this.typesdropdown = element;
            // }}
        >



            <Select
                placeholder="Choose type"
                options={availableTypes}
                isMulti
                // onChange={e => console.log(e.label, e.value)}
                // onChange={e => console.log(e)}
                onChange={this.onTypesChange} 
            />
            {/* <button name="typesearch" value={this.state.input.search} onClick={this.handleTypeSubmit}> Full Time </button>
            <button> Part Time </button>
            <button> Internship </button> */}
        </div>
    )

    onTypesChange(e){

        if(e.length == 0)
        {
            this.state.input.typesearch = "";
        }
        else
        {
            console.log(e[0]);
            // console.log(e[0].name);
            // console.log(e[0].value);

            this.state.input[e[0].name] = e[0].value;
        }
        
        console.log("changing type input");
        console.log(this.state.input);

        this.handleSearchSubmit();

        // let typesearch = (this.state.input["typesearch"]);

        // console.log("search for:");
        // console.log("typesearch: " + typesearch);

        //     JobSearch(typesearch, 'type')
        //         .then(response => {
        //         console.log(response);

        //         this.setState({
        //             data: response.data,
        //         });
        //     });
    }

    showRemotes(event) {
        event.preventDefault();
        
        this.setState({ showRemotesBool: !this.state.showRemotesBool });


        // this.setState({ showRemotesBool: true }, () => {
        //     document.addEventListener('click', this.closeRemotes);
        // });
    }
    closeRemotes(event) {
        // if (!this.typesdropdown.contains(event.target)) {
        //     this.setState({ showRemotesBool: false }, () => {
        //         document.removeEventListener('click', this.closeRemotes);
        //     });
        // }
        // this.setState({ showRemotesBool: false }, () => {
        //     document.removeEventListener('click', this.closeRemotes);
        // });
    }

    Remotes = () => (
        <div
            className="Remotes"
            // ref={(element) => {
            // this.remotesdropdown = element;
            // }}
        >


            <Select
                placeholder="Remote?"
                options={availableRemotes}
                isMulti
                // onChange={e => console.log(e.label, e.value)}
                // onChange={e => console.log(e)}
                onChange={this.onRemotesChange} 
            />

            {/* <button> In Person </button>
            <button> Remote </button> */}
        </div>
    )

    onRemotesChange(e){

        if(e.length == 0)
        {
            this.state.input.remotesearch = "";
        }
        else
        {
            console.log(e[0]);
            // console.log(e[0].name);
            // console.log(e[0].value);

            this.state.input[e[0].name] = e[0].value;
        }
        
        console.log("changing remote input");
        console.log(this.state.input);

        this.handleSearchSubmit();

        // let remotesearch = (this.state.input["remotesearch"]);

        // console.log("search for:");
        // console.log("remotesearch: " + remotesearch);

        //     JobSearch(remotesearch, 'type')
        //         .then(response => {
        //         console.log(response);

        //         this.setState({
        //             data: response.data,
        //         });
        //     });
    }

    SalariesResults = () => (
        <div>
            <span>
                <input name="salarysearch" placeholder="Salary" type="text" value={this.state.input.search} 
                    onChange={this.onChange} 
                    // onBlur={this.handleSalarySubmit} 
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
                    // onBlur={} 
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
                <input name="sizesearch" placeholder="Company Size" type="text" value={this.state.input.search} 
                    onChange={this.onChange} 
                    // onBlur={} 
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
                <input name="datesearch" placeholder="Posted after MM/DD/YYYY" type="text" value={this.state.input.search} 
                    onChange={this.onChange} 
                    // onBlur={} 
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

        // console.log(this.state);
        // console.log("a, showMapBool: " + this.state.showMapBool);

        this.setState({ showMapBool: !this.state.showMapBool });
        
        // console.log("b, showMapBool: " + this.state.showMapBool);
    }

    
    JobsResults = () => (

            this.state.data != null
                ? (
                    this.state.data.map(jobdata=>(
                        <JobResult 
                            title={jobdata.title} companyName={jobdata.companyName} location={jobdata.location}
                            salaryRangeStart = {jobdata.salaryRangeStart} salaryRangeEnd = {jobdata.salaryRangeEnd}
                            companySize = {jobdata.companySize} description={jobdata.description} remote={jobdata.remote}
                            date={jobdata.date} applyLink={jobdata.applyLink}
                        ></JobResult>
                        ))
                )
                : ( null )

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
                        {/* <button className="filter-button" onClick={this.showTypes}>
                        Types
                        </button>
                        {
                            this.state.showTypesBool
                                ? ( <this.Types /> )
                                : ( null )
                        } */}

                        <this.Types />
                    </div>

                    <div className="filter">
                        {/* <button className="filter-button" onClick={this.showRemotes}>
                        Remote
                        </button>
                        {
                            this.state.showRemotesBool
                                ? ( <this.Remotes /> )
                                : ( null )
                        } */}

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



                <br/>
                <br/>
                <br/>
                <button onClick={this.showMap}>
                Show Map
                </button>
                    {
                    this.state.showMapBool
                        ? ( <Map></Map> )
                        : ( <Map></Map> )
                    }


                

                <div className="JobResults">

                    {
                        <this.JobsResults />
                    }


                </div>

 
            </div>

        );
    }
}

export default Main;