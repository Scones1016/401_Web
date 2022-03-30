import React, {useState} from 'react';
// import "../styles/JobSearch.css";

export default function JobSearch(keywordsearch){

    // const [filteredResults, setFilteredResults] = useState([]);

    // const [searchInput, setSearchInput] = useState('');


    // const response = fetch(`http://localhost:3000/job/search?keyword=${keywordsearch}&filter=''`, {
    const response = fetch(`http://localhost:3000/job/search?keyword=test&filter=''`, {
        method: 'GET',
        // keyword: keywordsearch,
        // filter: ""

        }).then(data => data.json())
    
    // setFilteredResults(response)

    console.log("inside jobsearch");
    console.log(response);
    return response;
    
    // const response = fetch(`/job/search`, {
    //     method: 'GET',
    //     headers: {'Content-Type': 'application/json'},
    //     keyword: keywordsearch,
    //     filter: ""
    //     // body: JSON.stringify(data)
    //   })

    // console.log(response);
    // return response.json();

    
    
    // const handleKeywordChange = () => {
    // const handleSearchSubmit = () => {
    //     setSearchInput(this.state.input["keywordsearch"])
    //     console.log(this.state.input["keywordsearch"]);

    //     if (searchInput !== '') {

    //         const response = fetch(`/job/search`, {
    //                 method: 'GET',
    //                 headers: {'Content-Type': 'application/json'},
    //                 keyword: searchInput,
    //                 filter: ""
    //                 // body: JSON.stringify(data)
    //             })
            
    //         response.json();

    //         console.log(response);

    //         setFilteredResults(response)
    //     }

    //     alert("submitting");
    //     this.props.history.push("./main");
    // }


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
