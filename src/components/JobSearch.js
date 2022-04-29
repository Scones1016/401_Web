
export default async function JobSearch(params, filter){


    console.log("inside jobsearch, before fetch, for " + filter);
    console.log(params);


    
    const response = await fetch('http://localhost:3000/job/search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"params": params}),
        }).then(data => data.json())
    

    
    console.log(response);
    console.log("inside jobsearch, after fetch, for " + filter);
    return response;
    
}
