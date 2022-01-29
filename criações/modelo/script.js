var nome = document.querySelector('input#nome')
var res = document.querySelector('div#res')

function poder() {
    if(nome){
        res.innerHTML = `ola ${nome}`
    }
}
