import React, {useState} from 'react';
import "../styles/Post.css";

export default function JobPost({JobName, Description, PostDate, Salary, count}){

    const [Delete, setDelete] = React.useState(false);

    function handleDelete(){
        setDelete(true);
    }

    return(
        <div>
        {
            (!Delete)?
            <div className={"ProfileName" + count % 2}>
                <p>{JobName}</p>
                <p>{Description}</p>
                <p>{PostDate}</p>
                <p>{Salary}</p>
                <button className="button">Edit</button>
                <button className="button" onClick={handleDelete}>Delete</button>
            </div>:<div></div>
        }
        </div>
    );
}
