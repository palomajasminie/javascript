function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if(fsex[0].checked) {
            gêreno = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
            } else if (idade < 21) {
                //jovem
            }

        } else if (fsex[1].checked){
            gêreno = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gêreno} com ${idade} anos`
    }
}
