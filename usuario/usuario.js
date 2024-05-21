/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()


function  trocarParaPrincipal (){
 let aparecendo =  document.querySelector(".aparecendo")
 aparecendo.classList.remove("aparecendo")
  aparecendo.classList.add("esconde")
  let telaprincipal =  document.querySelector(".telaprincipal")
  telaprincipal.classList.remove("esconde")
 telaprincipal.classList.add("aparecendo")
}

function  trocarParaConta (){
  let aparecendo =  document.querySelector(".aparecendo")
  aparecendo.classList.remove("aparecendo")
   aparecendo.classList.add("esconde")
   let conta =  document.querySelector(".conta")
   conta.classList.remove("esconde")
  conta.classList.add("aparecendo")
 }

 function  trocarParaTrans (){
  let aparecendo =  document.querySelector(".aparecendo")
  aparecendo.classList.remove("aparecendo")
   aparecendo.classList.add("esconde")
   let trans =  document.querySelector(".trans")
   trans.classList.remove("esconde")
  trans.classList.add("aparecendo")
 }

 
 function  trocarParaOp (){
  let aparecendo =  document.querySelector(".aparecendo")
  aparecendo.classList.remove("aparecendo")
   aparecendo.classList.add("esconde")
   let op =  document.querySelector(".op")
   op.classList.remove("esconde")
  op.classList.add("aparecendo")
 }
