import './Main.css';
import './App.css';
import React, {Component} from 'react';

// import "@progress/kendo-theme-default/dist/all.css";  
// import { DropDown } from "./components/JobTypeDropDown";  






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
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.close = this.close.bind(this);

        this.showTypes = this.showTypes.bind(this);
        this.closeTypes = this.closeTypes.bind(this);

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
                    </form>

                </div>


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