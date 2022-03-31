import React, {useState} from 'react';
// import "../styles/JobSearch.css";

export default async function JobSearch(keyword, filter){


    console.log("inside jobsearch, before fetch, for " + filter);

    
    const response = await fetch('http://localhost:3000/job/search?keyword=' + keyword + '&filter=' + filter, {
        method: 'GET',
        // headers: {'Content-Type': 'application/json'},
        }).then(data => data.json())
    
    // setFilteredResults(response)

    console.log(response);
    console.log("inside jobsearch, after fetch, for " + filter);
    return response;

    

    // return(
    //     <div>
    //     {
    //         <div className="job">
                
    //             {
    //             (filteredResults)
    //             /* <p>{JobName}</p>
    //             <p>{CompanyName}</p>
    //             <p>{CompanyLocation}</p>
    //             <p>{Salary}</p>
    //             <p>{CompanySize}</p>
    //             <p>{DatePosted}</p>
                
    //             <button className="button">Apply</button> */}
    //         </div>
    //     }
    //     </div>
    // );
}
