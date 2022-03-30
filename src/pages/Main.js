import '../styles/Main.css';
import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Map from './Map.js';
import getJob from '../components/GetJob.js';
// import JobSearch from '../components/JobSearch';

const JobLists = [
    {
        JobName: "First job",
        Job_Description : "the description of the first job",
        Posted_Date: "2021, 5, 3",
        Salary: "100M",
        id: 1
    },
    {
        JobName: "Second Job",
        Job_Description : "the description of the second job",
        Posted_Date: "2021, 4, 3",
        Salary : "200M",
        id: 2
    },
    {
        JobName: "Second Job",
        Job_Description : "the description of the second job",
        Posted_Date: "2021, 4, 3",
        Salary : "200M",
        id: 3
    },
    {
        JobName: "Second Job",
        Job_Description : "the description of the second job",
        Posted_Date: "2021, 4, 3",
        Salary : "200M",
        id : 4
    }
]

class Main extends Component{

    componentDidMount(){
        document.title = 'Job Searching'; 
        getJob()
        .then(response => {
            this.setState({
                data: response.data[0],
            });
        });
    }
    constructor(){
        super();
        this.state = {
            showTypesBool: false,
            showRemotesBool: false,

            showMapBool: false,
            input : {},
            data : {}
        }
        // this.handleKeywordChange = this.handleKeywordChange.bind(this);
        // this.handleLocationChange = this.handleLocationChange.bind(this);

        this.handleSearchSubmit = this.handleSearchSubmit.bind();

        // this.handleSalarySubmit = this.handleSalarySubmit.bind(this);
        // this.handleNameSubmit = this.handleNameSubmit.bind(this);
        // this.handleSizeSubmit = this.handleSizeSubmit.bind(this);
        // this.handleDateSubmit = this.handleDateSubmit.bind(this);

        this.showTypes = this.showTypes.bind(this);
        this.closeTypes = this.closeTypes.bind(this);

        this.showRemotes = this.showRemotes.bind(this);
        this.closeRemotes = this.closeRemotes.bind(this);

        this.showMap = this.showMap.bind(this);
        this.jquerycode = this.jquerycode.bind(this);
    }

    jquerycode = () =>{
    }

    Search = () => {
        return <div>Hello world!</div>
    }

    handleSearchSubmit = () => {
        // let keywordsearch = (this.state.input["keywordsearch"]);
        // console.log(this.state.input["keywordsearch"]);
        // console.log(keywordsearch);
        console.log("searchhh");

        fetch(`http://localhost:3000/job/search?keyword=test&filter=companyName`, {
            method: 'GET'
            }).then(data => data.json())
            // console.log( response);

        // if (keywordsearch !== '') {

        //     // getJob()
        //     // .then(response => {
        //     //     this.setState({
        //     //         data: response.data[0],
        //     //     });
        //     // });

        //     // JobSearch(keywordsearch)
        //     //     .then(response => {
        //     //     console.log(response);
        //     // });
        // }
        
        // this.props.history.push("./main");

        alert("submitting");
    }


    showTypes(event) {
        event.preventDefault();
        
        this.setState({ showTypesBool: true }, () => {
            document.addEventListener('click', this.closeTypes);
        });
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

    TypesResults = () => (
        <div
            className="Types"
            ref={(element) => {
            this.typesdropdown = element;
            }}
        >
            <button> Full Time </button>
            <button> Part Time </button>
            <button> Internship </button>
        </div>
    )

    showRemotes(event) {
        event.preventDefault();
        
        this.setState({ showRemotesBool: true }, () => {
            document.addEventListener('click', this.closeRemotes);
        });
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

    RemotesResults = () => (
        <div
            className="Remotes"
            ref={(element) => {
            this.remotesdropdown = element;
            }}
        >
            <button> In Person </button>
            <button> Remote </button>
        </div>
    )

    SalariesResults = () => (
        <div>
            <form action="/" method="get">
                <input name="Search" placeholder="Salary" type="text" name="salarysearch" value={this.state.input.search} onChange={this.handleChange}/>  
            </form>
        </div>
    )

    NamesResults = () => (
        <div>
            <form action="/" method="get">
                <input name="Search" placeholder="Company Name" type="text" name="companysearch" value={this.state.input.search} onChange={this.handleChange}/>  
            </form>
        </div>
    )

    SizesResults = () => (
        <div>
            <form action="/" method="get">
                <input name="Search" placeholder="Company Size" type="text" name="sizesearch" value={this.state.input.search} onChange={this.handleChange}/>  
            </form>
        </div>
    )

    DatesResults = () => (
        <div>
            <form action="/" method="get">
                <input name="Search" placeholder="Posted after MM/DD/YYYY" type="text" name="datesearch" value={this.state.input.search} onChange={this.handleChange}/>  
            </form>
        </div>
    )

    showMap(event) {
        event.preventDefault();

        this.setState({ showMapBool: !this.showMapBool });
    }



    render(){
        return(
            
            <div className="Main">
                <div className="Header">
                    
                    <form>
                        <input name="keywordsearch" className="search-input" placeholder="Search" type="text" value={this.state.input.keywordsearch} onChange={this.handleKeywordChange}/>
                        <input name="locationsearch" className="search-input" placeholder="Location" type="text" value={this.state.input.locationsearch} onChange={this.handleLocationChange}/>
                        <input type="submit" value="Find" className="search-submitB" onClick={this.handleSearchSubmit}/>  
                        &nbsp;Employer?&nbsp;
                        <Link to ="../" class="loginsignupgroup">Log In</Link>
                        &nbsp;or&nbsp; 
                        <Link to="../signup" class="loginsignupgroup">Sign Up</Link>
                    </form>
                </div>
                
                <div className="Filters">

                    <div className="filter">
                        <button className="filter-button" onClick={this.showTypes}>
                        Types
                        </button>
                        {
                            this.state.showTypesBool
                                ? ( <this.TypesResults /> )
                                : ( null )
                        }
                    </div>

                    <div className="filter">
                        <button className="filter-button" onClick={this.showRemotes}>
                        Remote
                        </button>
                        {
                            this.state.showRemotesBool
                                ? ( <this.RemotesResults /> )
                                : ( null )
                        }
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
                        : ( null )
                    }

                    <div className="ProfileName0">
                    <p>Job: </p>
                    <p>Company : {this.state.data.title}</p>
                    <p>Descrption : {this.state.data.description}</p>
                    <p>Location : {this.state.data.location}</p>
                    <p>Remote or Not : {this.state.data.remote}</p>
                    </div>
                
                    {/* <JobSearch 
                    ></JobSearch> */}
 
            </div>

        );
    }
}

export default Main;