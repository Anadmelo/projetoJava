function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = 20
    //var hora = data.getHours()
    msg.innerHTML = 'Agora são '+ hora + ' horas.'
    if (hora >= 0 && hora < 12){
            //bom dia
        img.src="img/manha.jpg"
        document.body.style.background = '#E0D399'
    } else if(hora >= 12 && hora < 18 ){
        //boa tarde
        img1.src="img/tarde.jpg"
    } else {
        //boa noite
        img2.src="img/noite.jpg"
        document.body.style.background = 'gray'
    }
}