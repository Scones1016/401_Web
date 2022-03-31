import React, {useState} from 'react';
// import "../styles/JobSearch.css";

export default async function JobSearch(keyword, filter){


    console.log("inside jobsearch, before fetch, for " + filter);

    
    const response = await fetch('http://localhost:3000/job/search?keyword=' + keyword + '&filter=' + filter, {
        method: 'GET',
        // headers: {'Content-Type': 'application/json'},
        }).then(data => data.json())
    

    
    console.log(response);
    console.log("inside jobsearch, after fetch, for " + filter);
    return response;
    
}
