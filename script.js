// Script por Cel.Lep Tech

// recuperando usuario e senha do HTML
var inputUsuario = document.getElementById('usuario')
var inputSenha = document.getElementById('senha')

// manipulação modal
var myModalButton = document.getElementById('myModalButton')
var myModalText = document.getElementById('myModalText')

function autenticar(event){
  // Interromper o evento de submit
  event.preventDefault()

  // consistencia
  if(inputUsuario.value == 'admin' && inputSenha.value == '1234'){
    myModalText.innerText = 'Usuário Logado!'
  } else {
    myModalText.innerText = 'Usuário ou Senha inválido!'
  }

  myModalButton.click()
}