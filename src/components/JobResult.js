import React, {useState} from 'react';
import "../styles/Main.css";

export default function JobResult(props){

    console.log("call jobResult");
    // console.log(props.makeLarge);

    let datestring = props.date.toString();

    let date = datestring.substring(0, 4) + "/" + datestring.substring(4, 6) + "/" + datestring.substring(6, 8);

    return(

        <div className="">
        {
            <div className={"joblisting"} onClick= { () => props.makeLarge(props) }>
                <p>Job: {props.title}</p>
                <p>Company: {props.companyName}</p>
                <p>Location: {props.location}</p>
                <p>Salary: {props.salaryRangeStart} to {props.salaryRangeEnd}</p>
                <p>Company Size: {props.companySize}</p>
                <p>Remote or Not: {props.remote}</p>
                <p>Date Posted: {date}</p>
                <a href={'https://'+ props.applyLink} target="_blank" rel="noreferrer noopener">Apply Link</a>
            </div>
        }
        </div>
    );
}
