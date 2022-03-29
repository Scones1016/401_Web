import React, {Component} from 'react';
import "../styles/AddProfile.css";

class AddProfile extends Component{
    componentDidMount(){
    }

    constructor(){
        super();
        this.goto = this.goto.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state= {
            input : {}
        }
    }

    goto=()=>{
        this.props.history.push('./ProfilePage');
    }

    handleChange(event){
        let input = this.state.input;
        if(input[event.target.name] != "person" && input[event.target.name] != "temporarily" && input[event.target.name] != "remote" && input[event.target.name] != "internship" && input[event.target.name] != "fulltime")
        {
            input[event.target.name] = event.target.value;
        }
        else
        {   
            /*if(event.target.checked != 'undefined')
            {
                input[event.target.name] = 'off';
            }
            else
            {
                input[event.target.name] = 'on';
            }*/
        }
        this.setState({
        input : input
        });
    }

    handleSubmit =()=>{
        let input = this.state.input;
        input["remote"] = "remote";
        input["type"] = "internship";
        input["companySize"] = "30000";
        input["companyName"] = "google";
        input["date"] = "20220101";
        input["email"] = localStorage.getItem("email");
        console.log(input);
        this.setState({
            input : input
            });
        const response = fetch(`http://localhost:3000/job/post`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(input)
          })
        console.log(response);
    }

    render(){
        return(
            <div>
                <div className="wrap">
                    <div className="post">
                    Create your job Posting
                    </div>
                    <div className="info">
                        Logged in As {localStorage.getItem("company")}
                    </div>
                </div>
                <div className="Card">
                    <div className="Left">
                        <p>Job Title</p>
                        <input className="inpu" name="title" value={this.state.input.title} onChange={this.handleChange}/>
                        <p>Job Description </p>
                        <input className="inputlarge" name="description" value={this.state.input.description} onChange={this.handleChange}>
                        </input>
                        <button className="back" onClick={this.goto}>Back</button>
                    </div>
                    <div className="Secn">  
                        <div class="wrap2">   
                            <div class="remote">         
                            <p>Remote Option</p>
                            <input type="checkbox" name="person" checked={this.state.input.person} onChange={this.handleChange}/><label for="person">In Person</label><br/>
                            <input type="checkbox" name="temporarily" checked={this.state.input.temporarily} onChange={this.handleChange}/><label for="temporarily">Temporarily Remote</label><br/>
                            <input type="checkbox" name="remote" checked={this.state.input.remote} onChange={this.handleChange}/><label for="remote">Remote</label><br/>
                            </div>
                            <div class="type">
                            <p>Type</p>
                            <input type="checkbox" name="internship" checked={this.state.input.internship} onChange={this.handleChange}/><label for="intership">Internship</label><br/>
                            <input type="checkbox" name="fulltime" checked={this.state.input.fulltime} onChange={this.handleChange}/><lanbel for="fulltime">Full Time</lanbel>
                            </div>
                        </div>
                        <br/>
                        <div class="wrap3">
                            <p>Location:</p>
                            <input class="inpu" name="location" value={this.state.input.location} onChange={this.handleChange}/>
                            <p>Salary Range</p>
                            <span>From </span>
                            <input className="inputrange" name="salaryRangeStart" value={this.state.input.salaryRangeStart} onChange={this.handleChange}/><br/>
                            <span>To &nbsp; &nbsp; </span>
                            <input className="inputrange" name="salaryRangeEnd" value={this.state.input.salaryRangeEnd} onChange={this.handleChange}/>
                            <p>Link to your own Application Website</p>
                            <input class="inpu" name="applyLink" value={this.state.input.applyLink} onChange={this.handleChange}/>
                            <button className="subm" onClick={this.handleSubmit}>Post </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProfile;