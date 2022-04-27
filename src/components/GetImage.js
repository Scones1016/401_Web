export default async function GetImage(email) {




    // const resp = fetch('http://localhost:3000/profile/image/download?email=' + props.email, {
    //         method: 'GET',
    //         }).then(response =>response.blob())
    //             .then(imageBlob=>{
    //                 // console.log("props.email:")
    //                 // console.log(props.email)

    //                 // console.log("imageBlob:")
    //                 // console.log(imageBlob)
    //                 const imageObjectURL = URL.createObjectURL(imageBlob);
    //                 // console.log("imageObjectURL:")
    //                 // console.log(imageObjectURL)
    //                 image = imageObjectURL
    //             });

    const imageurl = await fetch('http://localhost:3000/profile/image/download?email=' + email, {
        method: 'GET',
        }).then(response =>response.blob())
            .then(imageBlob=>URL.createObjectURL(imageBlob))
              // .then(imageObjectURL => {console.log(imageObjectURL); return imageObjectURL;})
                .catch(err=>console.log(err));


    console.log(imageurl);
    return imageurl;


}