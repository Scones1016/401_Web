import React, {useState} from 'react';
import "../styles/Main.css";

export default function JobResultLarge(props){

    console.log("call jobResultLarge");

    console.log(props);
    // console.log(props.data);
    console.log("printed props");
    
    let datestring = props.data.date.toString();

    let date = datestring.substring(0, 4) + "/" + datestring.substring(4, 6) + "/" + datestring.substring(6, 8);


    return(

        <div className="">
        {
            <div className={"joblistinglarge"}>
                <p>Job: {props.data.title}</p>
                <p>Company: {props.data.companyName}</p>
                <p>Location: {props.data.location}</p>
                <p>Salary: {props.data.salaryRangeStart} to {props.data.salaryRangeEnd}</p>
                <p>Company Size: {props.data.companySize}</p>
                <p>Description: {props.data.description}</p>
                <p>Type: {props.data.type}</p>
                <p>Remote or Not: {props.data.remote}</p>
                <p>Date Posted: {date}</p>
                <a href={'https://'+ props.data.applyLink} target="_blank" rel="noreferrer noopener">Apply Link</a>
            </div>
        }
        </div>
    );
}
