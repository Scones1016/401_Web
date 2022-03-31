import '../styles/Main.css';
import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Map from './Map.js';
import getJob from '../components/GetJob.js';
import JobSearch from '../components/JobSearch';

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
            input : {
                keywordsearch: "",
                locationsearch: "",

                salarysearch: "",
                companysearch: "",
                sizesearch: "",
                datesearch: "",
            },
            data : {}
        }
        // this.handleKeywordChange = this.handleKeywordChange.bind(this);
        // this.handleLocationChange = this.handleLocationChange.bind(this);
        this.onChange = this.onChange.bind(this);

        this.handleSearchSubmit = this.handleSearchSubmit.bind();

        this.handleTypeSubmit = this.handleTypeSubmit.bind(this);
        this.handleRemoteSubmit = this.handleRemoteSubmit.bind(this);

        this.handleSalarySubmit = this.handleSalarySubmit.bind(this);
        this.handleNameSubmit = this.handleNameSubmit.bind(this);
        this.handleSizeSubmit = this.handleSizeSubmit.bind(this);
        this.handleDateSubmit = this.handleDateSubmit.bind(this);

        this.showTypes = this.showTypes.bind(this);
        this.closeTypes = this.closeTypes.bind(this);

        this.showRemotes = this.showRemotes.bind(this);
        this.closeRemotes = this.closeRemotes.bind(this);

        this.showMap = this.showMap.bind(this);
        this.jquerycode = this.jquerycode.bind(this);
    }

    jquerycode = () =>{
    }


    onChange(e){
        this.state.input[e.target.name] = e.target.value;
        console.log("changing input");
        console.log(this.state.input);
    }

    handleSearchSubmit = () => {
        let keywordsearch = (this.state.input["keywordsearch"]);
        let locationsearch = (this.state.input["locationsearch"]);

        console.log("search for:");
        console.log("keyword: " + keywordsearch);
        console.log("location: " + locationsearch);

        if(keywordsearch !== '') {

            // getJob()
            // .then(response => {
            //     this.setState({
            //         data: response.data[0],
            //     });
            // });

            JobSearch(keywordsearch, '')
                .then(response => {
                console.log("back in handle submit for keyword")
                console.log(response);
            });
        }
        else if(locationsearch !== '') {
            JobSearch(locationsearch, 'location')
                .then(response => {
                console.log("back in handle submit for location")
                console.log(response);
            });
        }
        

        alert("doing search");
    }

    handleTypeSubmit = () => {
        let typesearch = (this.state.input["typesearch"]);

        console.log("search for:");
        console.log("type: " + typesearch);

            JobSearch(typesearch, 'type')
                .then(response => {
                console.log(response);
            });
        
    }

    handleRemoteSubmit = () => {
        let salarysearch = (this.state.input["salarysearch"]);

        console.log("search for:");
        console.log("salarysearch: " + salarysearch);

            JobSearch(salarysearch, 'salary')
                .then(response => {
                console.log(response);
            });
        
    }

    handleSalarySubmit = () => {
        let salarysearch = (this.state.input["salarysearch"]);

        console.log("search for:");
        console.log("salarysearch: " + salarysearch);

            JobSearch(salarysearch, 'salary')
                .then(response => {
                console.log(response);
            });
        
    }

    handleNameSubmit = () => {
        let namesearch = (this.state.input["namesearch"]);

        console.log("search for:");
        console.log("namesearch: " + namesearch);

            JobSearch(namesearch, 'name')
                .then(response => {
                console.log(response);
            });
        
    }

    handleSizeSubmit = () => {
        let sizesearch = (this.state.input["sizesearch"]);

        console.log("search for:");
        console.log("sizesearch: " + sizesearch);

            JobSearch(sizesearch, 'size')
                .then(response => {
                console.log(response);
            });
        
    }

    handleDateSubmit = () => {
        let datesearch = (this.state.input["datesearch"]);

        console.log("search for:");
        console.log("datesearch: " + datesearch);

            JobSearch(datesearch, 'date')
                .then(response => {
                console.log(response);
            });
        
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

    TypesResults = () => (
        <div
            className="Types"
            ref={(element) => {
            this.typesdropdown = element;
            }}
        >
            <button onClick={this.handleTypeSubmit}> Full Time </button>
            <button> Part Time </button>
            <button> Internship </button>
        </div>
    )

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
            <span>
                <input name="salarysearch" placeholder="Salary" type="text" value={this.state.input.search} 
                    onChange={this.onChange} 
                    // onBlur={this.handleSalarySubmit} 
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                        this.handleSalarySubmit()
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
                        this.handleNameSubmit()
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
                        this.handleSizeSubmit()
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
                        this.handleDateSubmit()
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
                    <p>Description : {this.state.data.description}</p>
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