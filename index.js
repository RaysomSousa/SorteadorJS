
let num = document.querySelector('input#num')
let numSort = document.querySelector('div#numSort')
function gerarNum() {
    if(num.value == 0){
        alert('[ERRO!] digite o número de participantes e tente novamente.')
    }else{
    nunGerado = Math.floor(Math.random() * num.value)
     numSort.innerHTML = nunGerado}
     num.value =''
    }