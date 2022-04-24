import React, {useState, useEffect, useIsMounted, useRef, Component} from 'react';
import "../styles/AddProfile.css";
import {useLocation, useHistory, } from "react-router-dom";


export default function AddProfile(){

    const state = useLocation().state;
    const [input, setInput] = useState(state!=undefined? state: {});
    const [info, setInfo] = useState(JSON.parse(localStorage.getItem("companyInfo")));
    const history = useHistory();
    const location = useLocation();
    const isMounted = useRef(false);
    useEffect(()=>{
    }, []);

    function edit(){
        if(location.state!=undefined)
        {
            input.title = location.state.name;
            input.description = location.state.description;
            input.salaryRangeStart = location.state.salaryStart;
            input.salaryRangeEnd = location.state.salaryEnd;
            input.location = location.state.location;
            input.applyLink = location.state.applyLink;
            setInput(input);
        }
    }

    function goto(){
        history.push('./ProfilePage');
    }

    function handleChange(event){
        if(event.target.name != "in-person" && event.target.name != "remote" && event.target.name != "internship" && event.target.name != "fulltime")
        {
            input[event.target.name] = event.target.value;
        }
        else
        {   
            console.log(event.target.checked);
            const checked = event.target.checked;
            if(checked)
            {
                if(event.target.name != "in-person" && event.target.name != "remote")
                {
                    input["type"] = event.target.name;
                }
                else
                {
                    console.log(event.target.name);
                    input["remote"] = event.target.name;
                }
            }
        }
        setInput(input);
    }

    function handleSubmit(){
        input["companySize"] = info.size;
        input["companyName"] = localStorage.getItem("company");
        var date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 1).toString();
        if((date.getMonth() + 1) < 10)
        {
            month = '0' + month;
        }
        var day = date.getDate().toString();
        if(date.getDate() < 10)
        {
            day = '0' + day;
        }
        var date0 = year + month + day;
        input["date"] = date0;
        input["email"] = localStorage.getItem("email");
        console.log(input);
        setInput(input);
        const response = fetch(`http://localhost:3000/job/p`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(input)
          })
        console.log(response);
        history.push('./ProfilePage');
    }

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
                    <input className="inpu" name="title" value={input.title} onChange={handleChange}/>
                    <p>Job Description </p>
                    <textarea rows="6" cols="60" className="inputlarge" name="description" value={input.description} onChange={handleChange}>
                    </textarea>
                    <button className="back" onLoad={edit} onClick={goto}>Back</button>
                </div>
                <div className="Secn">  
                    <div class="wrap2">   
                        <div class="remote">         
                        <p>Remote Option</p>
                        <input type="checkbox" name="in-person" onChange={handleChange}/><label for="in-person">In Person</label><br/>
                        <input type="checkbox" name="remote" onChange={handleChange}/><label for="remote">Remote</label><br/>
                        </div>
                        <div class="type">
                        <p>Type</p>
                        <input type="checkbox" name="internship" onChange={handleChange}/><label for="intership">Internship</label><br/>
                        <input type="checkbox" name="fulltime" onChange={handleChange}/><label for="fulltime">Full Time</label>
                        </div>
                    </div>
                    <br/>
                    <div class="wrap3">
                        <p>Location:</p>
                        <input class="inpu" name="location" value={input.location} onChange={handleChange}/>
                        <p>Salary Range</p>
                        <span>From </span>
                        <input className="inputrange" name="salaryRangeStart" value={input.salaryRangeStart} onChange={handleChange}/><br/>
                        <span>To &nbsp; &nbsp; </span>
                        <input className="inputrange" name="salaryRangeEnd" value={input.salaryRangeEnd} onChange={handleChange}/>
                        <p>Link to your own Application Website</p>
                        <input class="inpu" name="applyLink" value={input.applyLink} onChange={handleChange}/>
                        <button className="subm" onClick={handleSubmit}>Post </button>
                    </div>
                </div>
            </div>
        </div>
    );
}