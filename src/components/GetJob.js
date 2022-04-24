import { Alert } from "react-bootstrap";

export default async function getUser(data) {
  let params = [];
  params.push({"keyword": localStorage.getItem("company"), "filter" : "companyName"});
  const response = await fetch(`http://localhost:3000/job/search`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"params": params}),
    }).then(data => data.json())
    console.log(response);
    return response;
  }