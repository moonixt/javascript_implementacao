console.log("Teste de console")

let vel = 30.9
console.log(`A velocidade de seu carro é de ${vel}Km/h`)
if (vel > 60) {
    console.log(`Você ultrapassou a velocidade permitida. Multado`)
}
console.log(`Dirija sempre usando cinto de segurança!`)
let sep = '-'.repeat(70)
console.log(sep)

let país = 'França'
console.log(`Vivendo em ${país}`)
if (país == 'Brasil') {
    console.log('Você é Brasileiro!')
}else {
    console.log('Você é Estrangeiro!')
}

function calcular() {
    var calculo = window.document.querySelector('input#velocidade1')
    var verificacao = window.document.querySelector('div#resultadoMulta')
    var vel = Number(calculo.value)
    verificacao.innerHTML = `Sua velocidade atual é de <strong>${vel}Km/h`
    if (vel > 60) {
        window.document.querySelector('div#resultadoMulta').style.fontSize = 44 + 'px';
        verificacao.style.background = 'red'
        verificacao.innerHTML += `<p> Você está <strong> Multado </strong> por excesso de velocidade.</p>`
    }else {
        verificacao.style.background = 'orange'
        window.document.querySelector('div#resultadoMulta').style.fontSize = 44 + 'px';
        verificacao.innerHTML += `<p> Você está dirigindo dentro da velocidade permitida.</p>`
    }
};

var idade = 66
if (idade < 16) {
    console.log('Não vota')
} else {
        if (idade >=16 && idade < 18){
            console.log('Voto opcional')
        } if (idade >= 18 && idade <67){
            console.log('Voto obrigatório')
        }if (idade >=67){
            console.log('Pessoas com 67 anos ou mais o voto é opcional.')
        }}
console.log(sep)

let agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 && hora >= 6) {
    console.log('Bom dia!')
} else if (hora <= 18 && hora >=12) {
    console.log('Boa tarde!')
} else if (hora > 18) {
    console.log('Boa noite!')
} else if (hora < 6) {
    console.log('Está de madrugada')
}

let tempo = new Date()
var diaSem = tempo.getDay()
console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Erro dia invalido')
        break
}