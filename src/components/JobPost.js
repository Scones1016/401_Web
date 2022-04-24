import React, {useState} from 'react';
import "../styles/Post.css";
import {useHistory} from "react-router-dom";

export default function JobPost({JobName, Description, PostDate, SalaryStart,SalaryEnd,Location, companySize,companyName, applyLink, count}){
    const history = useHistory();
    const [Delete, setDelete] = React.useState(false);

    function handleDelete(){
        setDelete(true);
    }

    function handleEdit(){
        var input = {};
        input.title = JobName;
        input.description = Description;
        input.salaryRangeStart = SalaryStart;
        history.push({pathname: "./AddProfile", state: {title: JobName, description : Description, postDate: PostDate, salaryRangeStart: SalaryStart, salaryRangeEnd: SalaryEnd, location:Location, companyname:companyName, companysize: companySize, applyLink: applyLink}});
    }

    return(
        <div>
        {
            (!Delete)?
            <div className={"ProfileName" + count % 2}>
                <p>JobName: {JobName}</p>
                <p>Description: {Description}</p>
                <p>Date Posted: {PostDate}</p>
                <p>SalaryStart: {SalaryStart}</p>
                <p>SalaryEnd: {SalaryEnd}</p>
                <p>Location: {Location}</p>
                <p>CompanySize: {companySize}</p>
                <p>CompanyName: {companyName}</p>
                <p>applyLink: {applyLink}</p>
                <button className="button" onClick={handleEdit}>Edit</button>
                <button className="button" onClick={handleDelete}>Delete</button>
            </div>:<div></div>
        }
        </div>
    );
}
