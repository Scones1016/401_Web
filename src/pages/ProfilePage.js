import React, {Component, useEffect} from 'react';
import "../styles/Profile.css";
import logo from "../images/logo.jpg";
import JobPost from "../components/JobPost.js";
import { Link, useHistory} from 'react-router-dom';
import getUser from '../components/getUser';
import GetJob from '../components/GetJob';
import findimage from '../components/findimage';

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
            count : 0,
            AddJob : false,
            JobLists : [],
            info : {},
            file : "",
        }
        GetJob()
        .then(response=>{
            var JobList = this.state.JobLists;
            for(var i = 0; i <response.data.length; i++)
            {
                //console.log(response);
                var job = {};
                job.JobName = response.data[i].title;
                job.Job_Description = response.data[i].description;
                job.Posted_Date = response.data[i].date;
                job.SalaryStart = response.data[i].salaryRangeStart;
                job.SalaryEnd = response.data[i].salaryRangeEnd;
                job.companySize = response.data[i].companySize;
                job.companyName = response.data[i].companyName;
                job.location = response.data[i].location;
                job.applyLink = response.data[i].applyLink;
                job.id = this.state.JobLists.length + 1;
                JobList.push(job);
            }
            this.setState({
                JobLists: JobList,
                file : "",
            });
        });
        
        (async () => {
            await fetch(`http://localhost:3000/profile/image/download?email=${localStorage.getItem("email")}`, {
                method: 'GET',
              }).then(response =>response.blob())
              .then(imageBlob=>{const imageObjectURL = URL.createObjectURL(imageBlob);this.setState({file: imageObjectURL});}
              )
              .catch(err=>console.log(err));
          })();
        const email = localStorage.getItem("email");
        const company = localStorage.getItem("company");
        this.state.info = JSON.parse(localStorage.getItem("companyInfo"));
        this.state.user["company"] = company;
        this.state.user["email"] = email;
        this.handleDelete = this.handleDelete.bind(this);
        this.submitLogout = this.submitLogout.bind(this);
        this.AddJob = this.AddJob.bind(this);
        console.log(this.state.user["company"]);
    }

    handleDelete = () => {
        this.setState({delete: true});
    }

    submitLogout = () =>{
        localStorage.clear();
    }

    AddJob = () =>{
        this.props.history.push('/AddProfile');
    }

    render(){
        return(
            <div>
                <div className="companyInformation">
                    <img className="image" src={this.state.file}></img>
                    <p>{this.state.user["company"]}</p>
                    <div className="information">
                        <p>Company Size: {this.state.info != null? this.state.info.size:""}</p>
                        <p>Company Information : {this.state.info != null? this.state.info.description : ""}</p>
                    </div>
                    <Link to="./CompanyInformation">Edit</Link>
                    <Link to="./" onClick={this.submitLogout}>Logout</Link>
                </div>
                <span className="job"> Posted Jobs </span>
                <button className="buttons" onClick={this.AddJob}> &nbsp; Add Job &nbsp; </button>
                <br/>
                <div className="warp">
                {this.state.JobLists.map(JobList=>(
                <JobPost key={JobList.id} JobName={JobList.JobName} Description={JobList.Job_Description}
                PostDate = {JobList.Posted_Date} SalaryStart={JobList.SalaryStart} SalaryEnd={JobList.SalaryEnd} Location={JobList.location} companySize={JobList.companySize} companyName={JobList.companyName} applyLink={JobList.applyLink} count={this.state.count++}
                ></JobPost>
                ))}
                </div>
            </div>
        );
    }
}

export default ProfilePage;