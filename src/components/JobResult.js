import React, {useState} from 'react';
import "../styles/Main.css";

export default function JobResult({title, companyName, location, salaryRangeStart, salaryRangeEnd, companySize, description, remote, date, applyLink}){

    // const [Delete, setDelete] = React.useState(false);

    // function handleDelete(){
    //     setDelete(true);
    // }

    return(

        <div className="">
        {
            <div className={"joblisting"}>
                <p>Job: {title}</p>
                <p>Company: {companyName}</p>
                <p>Location: {location}</p>
                <p>Salary: {salaryRangeStart} to {salaryRangeEnd}</p>
                <p>Company Size: {companySize}</p>
                <p>Description: {description}</p>
                <p>Remote or Not: {remote}</p>
                <p>Date Posted: {date}</p>
                <a href={'https://'+ applyLink} target="_blank" rel="noreferrer noopener">Apply Link</a>
            </div>
        }
        </div>
    );
}
