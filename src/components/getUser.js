export default async function getUser(data) {
    const response = await fetch(`/auth/login`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
  }