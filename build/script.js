"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var peso = 0;
var altura = 0;
var imc = function (peso, altura) {
    return (peso / Math.pow(altura, 2));
};
peso = Number(prompt('Digite seu peso: '));
altura = Number(prompt('Digite sua altura: '));
console.log("Seu \u00EDndice de massa corporal \u00E9 de : ".concat(imc(peso, altura)));
