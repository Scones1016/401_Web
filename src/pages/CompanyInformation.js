import {React, Component} from "react";
import "../styles/CompanyInformation.css";
import logo from "../images/logo.jpg";
import {Link} from "react-router-dom";

class CompanyInformation extends Component {
    componentDidMount(){

    }

    constructor(){
        super();
        this.state= {
            input: {},
            file: "",
        }
        this.state.input["company"] = localStorage.getItem("company");
        if(localStorage.getItem("companyInfo")!=null)
        {
            this.state.input = JSON.parse(localStorage.getItem("companyInfo"));
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitLogout = this.submitLogout.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleChange(event){
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        console.log(input);
        this.setState({
            input: input,
        });
    }

    handleFileUpload(event){
        const file = URL.createObjectURL(event.target.files[0]);
        this.setState({
            file : file,
        });
        var senddata = new FormData ();
        senddata.append("email", localStorage.getItem("email"));
        senddata.append("file", event.target.files[0]);
        const response = fetch(`http://localhost:3000/profile/image/upload?`, {
            method: 'POST', 
            body: senddata,
            })
        console.log(response);
    }

    handleSubmit(){
        localStorage.setItem("companyInfo", JSON.stringify(this.state.input));
        
    }
    
    submitLogout = () =>{
        localStorage.clear();
    }

    render(){
        return(
            <div>
                 <div className="companyInformation">
                     <p>Add Image</p>
                    <input type="file"className="file" name="file" onChange={this.handleFileUpload}/>
                    <img className="image" src={this.state.file}></img>
                    <p>{this.state.input["company"]}</p>
                    <div className="information">
                        <p>Company Size:</p>
                        <input className="size" name="size" value={this.state.input.size} onChange={this.handleChange}/>
                        <p>Company Description: </p>
                        <input className="description" name="description" value={this.state.input.description} onChange={this.handleChange}/>
                        <br/>
                        <button onClick={this.handleSubmit}>Save</button>
                    </div>
                    <Link to="./ProfilePage">Back</Link>
                    <Link to="./" onClick={this.submitLogout}>Logout</Link>
                </div>
            </div>
        );
    }
}

export default CompanyInformation;