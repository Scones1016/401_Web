import { Alert } from "react-bootstrap";

export default async function getUser(data) {
  const response = await fetch(`http://localhost:3000/job/search?keyword=Google&filter=companyName`, {
    method: 'GET'
    }).then(data => data.json())
    return response;
  }