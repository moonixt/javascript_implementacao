var p1 = window.document.getElementsByTagName('h1')[0];
window.document.write('Está escrito assim' + ' ' + p1.innerHTML);
var d = window.document.querySelector('div#primeira_parte')
d.style.background = 'green';
let segunda = window.document.querySelector('div#segunda_parte');
segunda.addEventListener('click', clicar )
segunda.addEventListener('mouseenter',entrar)
segunda.addEventListener('mouseout',sair)
function clicar() {
    segunda.innerHTML = 'Clicou'
    segunda.style.background = 'red'
}   
function entrar() {
    segunda.innerHTML = 'Entrou'
    segunda.style.background = 'grey'
    document.querySelector('div#segunda_parte').style.fontSize = 44 + "px";

}
function sair() {
    segunda.innerHTML = 'Saiu'
    segunda.style.background = 'blue'
}
function somar() {
    var n1= window.document.getElementById('caixa1')
    var n2= window.document.getElementById('caixa2')
    let res = window.document.getElementById('resultado')
    var conversao1 = Number(n1.value)
    let conversao2 = Number(n2.value)
    let soma = conversao1 + conversao2
    res.innerHTML = `A soma de ${conversao1} mais ${conversao2} é igual a ${soma}`
    res.style.fontSize = 25 + "px"
    
};

