function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos!`
    if (hora >= 0 && hora<12) {       
        img.src = 'manhã.png'
        document.body.style.background = '#03F4ED'   
        document.getElementById('saudação').innerHTML ='Bom Dia!!'
    } else if (hora >= 12&&hora<18){
        img.src = 'tarde.png'
        document.body.style.background = 'orange'
        document.getElementById('saudação').innerHTML = 'Boa Tarde!!'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#00032C'
        document.getElementById('saudação').innerHTML ='Boa Noite!!'
    }
}
