//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia);

//const data = new Date('2003-03-28 08:45:00');
//const data = new Date(1683897664970)
//console.log('Dia ', data.getDate());
//console.log('Mes ', data.getMonth());
//console.log('Ano ', data.getFullYear());
//console.log('Hor ', data.getHours());
//console.log('Min ', data.getMinutes());
//console.log('Seg' , data.getSeconds());
//console.log('Mil ', data.getMilliseconds());
//console.log('Dia semana ', data.getDay());
//console.log(data.toString());
//console.log(Date.now());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDay());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);