function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var data = new Date()
    //var hora = 20
    var hora = data.getHours()
    msg.innerHTML = 'Agora são '+ hora + ' horas.'
    res.appendChild(img)
    if (hora >= 0 && hora < 12){
            //bom dia
        img.setAttribute('src', 'manha.jpg')
        document.body.style.background = '#E0D399'
    } else if(hora >= 12 && hora < 18 ){
        //boa tarde
        img.setAttribute('src', 'tarde.jpg')
    } else {
        //boa noite
        img.setAttribute('src', 'noite.jpg')
        document.body.style.background = 'gray'
    }
}