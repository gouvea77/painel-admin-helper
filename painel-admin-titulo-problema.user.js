// ==UserScript==
// @name         Painel Admin - Preenche Campo "Título Problema"
// @namespace    http://gouvea77.com
// @version      1.0
// @description  Script para auxiliar no Blip
// @author       Gabriel Gouvea
// @match        https://medbackoffice.medgrupo.com.br/*
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=medgrupo.com.br
// @updateURL    https://raw.githubusercontent.com/gouvea77/painel-admin-helper/main/painel-admin-titulo-problema.user.js
// @downloadURL  https://raw.githubusercontent.com/gouvea77/painel-admin-helper/main/painel-admin-titulo-problema.user.js
// ==/UserScript==

(function () {
  "use strict";

  const observer = new MutationObserver((changes, obs) => {
    let assunto = document.querySelector('[formcontrolname="assunto"]');
    let selectCategoria = document.querySelectorAll(".mat-select")[5];

    let selectStatusInterno = document.querySelectorAll(".mat-select")[7];
    let selecionadoCategoria = selectCategoria.innerText;

    let selecionadoStatusInterno = selectStatusInterno.innerText;
    assunto.value = selecionadoCategoria.toUpperCase() + " - " + selecionadoStatusInterno.toUpperCase();
    assunto.dispatchEvent(new Event("input", { bubbles: true }));
  });

  observer.observe(document.body, {childList: true, subtree: true});
})();
