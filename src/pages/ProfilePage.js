import React, {Component} from 'react';
import "../styles/Profile.css";
import logo from "../images/logo.jpg";
import JobPost from "../components/JobPost.js";
import { Link } from 'react-router-dom';

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

class ProfilePage extends Component{
    componentDidMount(){
        
    }

    constructor(){
        super();
        this.state = {
            user : {},
            delete : false,
            count : 0
        }
        const email = localStorage.getItem("email");
        const company = localStorage.getItem("company");
        this.state.user["company"] = company;
        this.state.user["email"] = email;
        this.handleDelete = this.handleDelete.bind(this);
        this.submitLogout = this.submitLogout.bind(this);
        console.log(this.state.user["company"]);
    }

    handleDelete = () => {
        this.setState({delete: true});
    }

    submitLogout = () =>{
        localStorage.clear();
    }

    render(){
        return(
            <div>
                <div className="companyInformation">
                    <img className="image" src={logo}></img>
                    <p>{this.state.user["company"]}</p>
                    <p className="information">Company Information</p>
                    <Link to="./" onClick={this.submitLogout}>Logout</Link>
                </div>
                <span className="job"> Posted Jobs </span>
                <button className="buttons"> &nbsp; Add Job &nbsp; </button>
                <br/>
                <div className="warp">
                {JobLists.map(JobList=>(
                <JobPost key={JobList.id} JobName={JobList.JobName} Description={JobList.Job_Description}
                PostDate = {JobList.Posted_Date} Salary={JobList.Salary} count={++this.state.count}
                ></JobPost>
                ))}
                </div>
            </div>
        );
    }
}

export default ProfilePage;