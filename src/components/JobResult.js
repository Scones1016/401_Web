import React, {useState} from 'react';
import "../styles/Main.css";

export default function JobResult(props){


    let datestring = props.date.toString();

    let date = datestring.substring(0, 4) + "/" + datestring.substring(4, 6) + "/" + datestring.substring(6, 8);

    return(

        <div className="">
        {
            <div className={"joblisting"} onClick= { () => props.makeLarge(props) }>
                <div className={"listingleft"}>
                    <p>{props.title}</p>
                    <p>Company: {props.companyName}</p>
                    <p>Location: {props.location}</p>
                    <p>Salary: {props.salaryRangeStart} to {props.salaryRangeEnd}</p>
                    <p>Company Size: {props.companySize}</p>
                </div>
                <div className={"listingright"}>
                    <br></br>
                    <img className={"profimage"} src={props.image}></img>
                    <br></br>
                    <br></br>
                    <a className={"applylink"} href={'https://'+ props.applyLink} target="_blank" rel="noreferrer noopener">Apply Link</a>
                    <br></br>
                    <p>Date Posted: {date}</p>
                </div>
            </div>
        }
        </div>
    );
}
