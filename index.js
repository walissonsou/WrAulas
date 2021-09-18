function carregar(){
    let msg = window.document.getElementById("msg");
    let img = window.document.getElementById("imagem");
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    msg.innerHTML = `Em Hogwarts são ${hora}h${min}min`;
    if (min < 10){
        min = "0" + min
    } if (hora >= 0 && hora < 12){
        //bmanhã
        document.body.style.background='#e2cd9f'
        img.src = 'manhã.png'
    } else if (hora >= 12 && hora < 18) {
        //btarde
        img.src = 'tarde.png'
        document.body.style.background='#b9846f'
    } else {
        //noite
        img.scr ='noite.png'
        document.body.style.background='#515154'
    }
}
    