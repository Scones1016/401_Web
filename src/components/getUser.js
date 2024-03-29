import { Alert } from "react-bootstrap";

export default async function getUser(data) {
  const response = await fetch(`http://localhost:3000/auth/login?email=${data.email}&password=${data.password}`, {
    method: 'GET'
    }).then(data => data.json())
    return response;
  }