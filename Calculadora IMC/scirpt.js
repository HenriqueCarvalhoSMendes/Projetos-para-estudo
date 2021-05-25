function calc() {
    let nome = document.getElementById('nome').value
    let peso = document.getElementById('peso').value
    let alt = document.getElementById('altura').value
    let res = document.getElementById('res')

    if (nome !== '' && peso != '' && alt != '') {

        let IMC = (peso / (alt * alt)).toFixed(1)

        if (IMC <= 18.5){
            res.innerHTML = `Olá, ${nome}, seu IMC é ${IMC}, você está abaixo do peso`
        } else if (IMC <= 24.9) {
            res.innerHTML = `Olá, ${nome}, seu IMC é ${IMC}, você está com o peso ideal`
        } else if (IMC <= 30) {
            res.innerHTML = `Olá, ${nome}, seu IMC é ${IMC}, você está com sobrepeso`
        } else if (IMC <= 34.9) {
            res.innerHTML = `Olá, ${nome}, seu IMC é ${IMC}, você está com obesidade nivel 1`
        } else if (IMC <= 39.9) {
            res.innerHTML = `Olá, ${nome}, seu IMC é ${IMC}, você está com obesidade nivel 2`
        } else if (IMC >= 40 ) {
            res.innerHTML = `Olá, ${nome}, seu IMC é ${IMC}, você está com obesidade nivel 3`
        }
        

    } else {
        res.innerHTML = 'Preencha todos os dados'
    }

}