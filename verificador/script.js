function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'crianca-homem.jpg')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if ( idade < 50 ) {
                // Adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'velho-homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-mulher.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if ( idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'velha-mulher.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign = 'Center'
        res.appendChild(img)
        img.style.margin = 'auto'
        img.style.padding = '1em'
        }
    }