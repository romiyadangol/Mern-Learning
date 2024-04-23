// console.log('Working!');
const URL = "https://dog.ceo/api/breeds/image/random";//fetch from api

function getDogImage() {
    //fetching from backend
    fetch(URL)
    .then((response) =>{//then aayesi callback function linxa
        if(response.ok){
            //everything is fine
            return response.json();
        }
        else{
            //something went wrong
        }
    }).then((data)=>{
         document.getElementById('img').src = data.message;
        //  const image = document.getElementById('img');
        //  console.log(image);
        //  image.src = data.message;
    })

}
getDogImage();