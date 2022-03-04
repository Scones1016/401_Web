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
            input : {}
        }
        this.showTypes = this.showTypes.bind(this);
        this.closeTypes = this.closeTypes.bind(this);
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
        this.setState({ showTypesBool: false }, () => {
            document.removeEventListener('click', this.closeTypes);
        });
    }



    render(){
        return(
            
            <div className="Main">
                <div className="Header">
                    
                    <form action="/" method="get">
                        <input name="Search" class="search-input" placeholder="Search" type="text" name="search" value={this.state.input.search} onChange={this.handleChange}/>  
                        <input name="Location" class="search-input" placeholder="Location" type="text" name="search" value={this.state.input.search} onChange={this.handleChange}/>  
                        <input type="submit" value="Find" className="search-submitB" onClick={this.handleSubmit}/>  
                        <Link to ="../"> Log In</Link>&nbsp;&nbsp;&nbsp;
                        <Link to="../signup"> Sign Up</Link>
                    </form>
                </div>
                <Map></Map>
                <div className="Filters">

                    type

                    <div>
                        <button onClick={this.showTypes}>
                        Show Types
                        </button>
                        
                        {
                        this.state.showTypesBool
                            ? (
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
                            : (
                            null
                            )
                        }
                    </div>


                    remote



                    salary



                    company name


                    company size


                    date posted



                    location
                </div>
 
            </div>

        );
    }
}

export default Main;