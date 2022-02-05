const dias = document.querySelector('#dias');
const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

const proxAno = new Date(`01 Jan 2023`);

function contagemRegressiva(){
    const dataAtual = new Date();
    const segundosTotal = (proxAno - dataAtual) / 1000

    const quantDias = Math.floor(segundosTotal / 86400)
    const quantHoras = Math.floor(segundosTotal / 3600) % 24
    const quantMinutos = Math.floor(segundosTotal / 60) % 60
    const quantSegundos = Math.floor(segundosTotal % 60) 

    dias.innerHTML = formatarRelogio(quantDias) 
    horas.innerHTML = formatarRelogio(quantHoras) 
    minutos.innerHTML = formatarRelogio(quantMinutos)
    segundos.innerHTML = formatarRelogio(quantSegundos) 
}

function formatarRelogio(relogio){
    return relogio < 10? `0${relogio}`: relogio
}

contagemRegressiva(); 
setInterval(contagemRegressiva, 1000)