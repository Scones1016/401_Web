export default async function createUser(data) {
    const response = await fetch(`http://localhost:3000/auth/signUp`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response;
}