const gifTitulo = document.querySelector('.mainText');
const divPatrocinadores = document.querySelector('.divPatrocinadores');
const divPatrocinadoresDiv = document.querySelector('.divPatrocinadores div');

//---------------------FUNÇÕES DOS GIS--------------------------------

const arrayGifs = ["images/gifs/1.gif",
    "images/gifs/2.gif",
    "images/gifs/3.gif",
    "images/gifs/4.gif",
    "images/gifs/5.gif", 
    "images/gifs/6.gif" ];

let i=0;
let j=0;
let aux=1;

function percorrerArray(arrayHere) {

    let gif = arrayHere[i];
    if(i+1<arrayHere.length){
        i++;
    }else{
        i=0;    
    }
    return gif;
};

function trocaGif()
{
    if(window.innerWidth > 1025) {
        let gif = percorrerArray(arrayGifs);
        gifTitulo.style.backgroundImage = "url("+gif+")";
    }
    else{
        gifTitulo.style.backgroundImage = 'none';
    }
}setInterval(trocaGif, 2500)


//---------------------FUNÇÕES DO CARROSSEL--------------------------------

const arrayPatrocinadores = 
[
"images/logo/info.png",
"images/logo/info.png",
"images/logo/info.png",
"images/logo/info.png"

];

function carrosselPatrocinadores ()
{
    
    arrayPatrocinadores.forEach((elements, index)=>{

    let imgPatrocinador =  arrayPatrocinadores;
   
    console.log(arrayPatrocinadores.length);
    let imgP = document.createElement('img');
    let divImg = document.createElement('div');
    imgP.src = imgPatrocinador[index];
    divPatrocinadores.appendChild(divImg);
    divImg.appendChild(imgP);
    var tamanho = window.innerWidth + window.innerHeight;

   divImg.style.right= -500 + "px";  
    

        if (tamanho < 2){  tamanho = 2;};
        if (tamanho > 3){  tamanho = 3;};

    divImg.style.animationDelay= ""+index+"s"
    
        
    })
}

carrosselPatrocinadores();
trocaGif();

