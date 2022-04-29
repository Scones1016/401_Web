export default async function GetImage(email) {


    const imageurl = await fetch('http://localhost:3000/profile/image/download?email=' + email, {
        method: 'GET',
        }).then(response =>response.blob())
            .then(imageBlob=>URL.createObjectURL(imageBlob))
                .catch(err=>console.log(err));


    console.log(imageurl);
    return imageurl;


}