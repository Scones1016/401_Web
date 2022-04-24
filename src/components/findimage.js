export default async function findimage(data) {
    const resp = await fetch(`http://localhost:3000/profile/image/download?email=${localStorage.getItem("email")}`, {
        method: 'GET',
      }).then(function(response) { console.log(response); return response;});
    }