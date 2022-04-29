import React, {useState} from 'react';
import "../styles/Main.css";

export default function JobResultLarge(props){

    
    let datestring = props.data.date.toString();

    let date = datestring.substring(0, 4) + "/" + datestring.substring(4, 6) + "/" + datestring.substring(6, 8);


    return(

        <div className="">
        {
            <div className={"joblistinglarge"}>
                <div className={"listingleft"}>
                    <p>{props.data.title}</p>
                    <p>Company: {props.data.companyName}</p>
                    <p>Location: {props.data.location}</p>
                    <p>Salary: {props.data.salaryRangeStart} to {props.data.salaryRangeEnd}</p>
                    <p>Company Size: {props.data.companySize}</p>
                    <p>Date Posted: {date}</p>
                    <p>Description: {props.data.description}</p>
                    <p>Type: {props.data.type}</p>
                    <p>Remote or Not: {props.data.remote}</p>
                </div>

                <div className={"listingright"}>
                    <br></br>
                    <img className={"profimage"} src={props.data.image}></img>
                    <br></br>
                    <br></br>
                    <a className={"applylink"} href={'https://'+ props.data.applyLink} target="_blank" rel="noreferrer noopener">Apply Link</a>
                </div>
            </div>
        }
        </div>
    );
}
