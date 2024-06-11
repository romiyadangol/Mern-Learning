const body = document.getElementById('body');


function FetchGreen(){
    body.style.backgroundColor = "green";
}
function FetchYellow(){
    body.style.backgroundColor = "yellow";
}
function FetchRed(){
    body.style.backgroundColor = "red";
}
function Random(){
    let input = document.getElementById('HexColor');
    let color ='#' ;
    const random = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let hex;
    for(let i=0;i<6;i++){
        hex =  Math.floor(Math.random()*16);
        color= color + random[hex]; 
    }
    body.style.backgroundColor = color;
    input.value = color;
}
