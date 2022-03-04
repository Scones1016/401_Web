import '../styles/Main.css';
import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Map from './Map.js';

class Main extends Component{

    componentDidMount(){
        document.title = 'Job Searching';
    }
    constructor(){
        super();
        this.state = {
            showTypesBool: false,

            showMapBool: false,
            input : {}
        }
        this.showTypes = this.showTypes.bind(this);
        this.closeTypes = this.closeTypes.bind(this);

        this.showMap = this.showMap.bind(this);
        this.jquerycode = this.jquerycode.bind(this);
    }

    jquerycode = () =>{
    }

    Search = () => {
        return <div>Hello world!</div>
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
            <button> Type 1 </button>
            <button> Type 2 </button>
            <button> Type 3 </button>
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
                    
                    <form action="/" method="get">
                        <input name="Search" class="search-input" placeholder="Search" type="text" name="search" value={this.state.input.search} onChange={this.handleChange}/>  
                        <input name="Location" class="search-input" placeholder="Location" type="text" name="search" value={this.state.input.search} onChange={this.handleChange}/>  
                        <input type="submit" value="Find" className="search-submitB" onClick={this.handleSubmit}/>  
                        <Link to ="../" class="loginsignupgroup">Log In</Link>
                        &nbsp;or&nbsp; 
                        <Link to="../signup" class="loginsignupgroup">Sign Up</Link>
                    </form>
                </div>
                
                <div className="Filters">

                    <div className="filter">
                        <button className="filter-button" onClick={this.showTypes}>
                        Show Types
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
                        <button className="filter-button" onClick={this.showSalaries}>
                        Salary
                        </button>
                        {
                            this.state.showSalariesBool
                                ? ( <this.SalariesResults /> )
                                : ( null )
                        }
                    </div>

                    <div className="filter">
                        <button className="filter-button" onClick={this.showNames}>
                        Company Name
                        </button>
                        {
                            this.state.showNamesBool
                                ? ( <this.NamesResults /> )
                                : ( null )
                        }
                    </div>

                    <div className="filter">
                        <button className="filter-button" onClick={this.showSizes}>
                        Company size
                        </button>
                        {
                            this.state.showSizesBool
                                ? ( <this.SizesResults /> )
                                : ( null )
                        }
                    </div>


                    <div className="filter">
                        <button className="filter-button" onClick={this.showDates}>
                        Date Posted
                        </button>
                        {
                            this.state.showDatesBool
                                ? ( <this.DatesResults /> )
                                : ( null )
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
                        
 
            </div>

        );
    }
}

export default Main;