import PromptSync = require("prompt-sync");

const prompt = PromptSync();

let peso = 0;
let altura = 0;

let imc = (peso, altura) => {
    return (peso / Math.pow(altura, 2));
}

peso = Number(prompt('Digite seu peso: '));
altura = Number(prompt('Digite sua altura: '));

console.log(`Seu índice de massa corporal é de : ${imc(peso, altura)}`);