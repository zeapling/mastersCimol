const gift = document.querySelector('.mainText');




const arrayImages = ["images/gifs/1.gif",
    "images/gifs/2.gif",
    "images/gifs/3.gif",
    "images/gifs/4.gif",
    "images/gifs/5.gif", 
    "images/gifs/6.gif" ];


let i=0;

function funcaoGif() {

    let gif = arrayImages[i];
    if(i+1<arrayImages.length){
        i++;
    }else{
        i=0;    
    }
    return gif;
};

function trocaGif()
{
    if(window.innerWidth > 1030) {
        let gif = funcaoGif();
        console.log(gif);
        gift.style.backgroundImage = "url("+gif+")";
    }
    else{
        gift.style.backgroundImage = 'none';
    }
}setInterval(trocaGif, 2500)

trocaGif();