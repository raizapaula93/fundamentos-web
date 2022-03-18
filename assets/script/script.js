// var nome //escopo global
// let nome // escopo fechado - variável que pode mudar ao longo do tempo
// const nome // escopo fechado - variável q não vai sofrer alterações de valor (um botão or exemplo)

// ACESSO À DOM 
//  const enviar = document.querySelector('#enviar');

//  function enviarForm(){

//     alert('enviado')
// }   

// enviar.addEventListener('click', () => {

//     alert('enviado')

// })
 

/*
Case sensitive = reconhece letras maíusculas e minúsculas


por Tag: getElementByTagName()
por Id: getElementById()
por nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()

*/

let nome = window.document.getElementById('nome') //pegue o ELEMENTO que tem o ID nome
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')



nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
        if(nome.value.length < 3) {
            txtNome.innerHTML = 'Nome Inválido'
            txtNome.style.color = 'red'
            
    }
        else{
            txtNome.innerHTML = 'Nome Válido'
            txtNome.style.color = 'green'
            nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
        if(email.value.indexOf('@') == -1 || email.value.indexOf('.')==-1) { //se tem valor=1, s enão tem é -1
            txtEmail.innerHTML = 'Email Inválido'
            txtEmail.style.color = 'red'
    }
        else{
            txtEmail.innerHTML = 'Email Válido'
            txtEmail.style.color = 'green'
            emailOk = true
    }

}

function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')
        if(assunto.value.length >= 100) { //se tem valor=1, s enão tem é -1
          txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'   
          txtAssunto.style.color = 'red'
          txtAssunto.style.display ='block'
          assuntoOk = false
        }else{
            txtAssunto.style.display='none'
            assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert('Formulário enviado com sucesso!')
    }else{
    alert('Preencha o formulário corretamente antes de enviar...')    
    }

}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '500px'    
}