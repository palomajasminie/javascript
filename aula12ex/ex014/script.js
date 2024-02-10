function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <12) {
         //BOM DIA!
         img.src = 'imagem/bomdia.jpg'
         document.body.style.background = '#e2cd9f'
    } else if (hora >= 13 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagem/boatarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'imagem/boanoite.jpg'
        document.body.style.background = '#515154'
    }

}


