// Declaração de Variaveis
let nome = "Vinicius";
let idade = 19;
let altura = 173;
let peso = 63;


// Solicitando informação ao usuario e atribuindo os valores as variaveis
nome = prompt('Digite seu nome: ');
idade = parseInt(prompt('Digite sua idade: '));
altura = parseFloat(prompt('Digite sua altura: '));
peso = parseInt(prompt('Digite seu peso: '));


// Calculando o ano que a pessoa nasceu e o IMC
let anoNasc = 2005;
anoNasc = 2024 - idade;

let imc = 0;
imc = peso / (altura * altura);


//Exibindo as informações no console
console.log("Olá"   + nome + ", você tem"  + idade  +  "anos, nasceu em"  + anoNasc +  ", tem"  + altura  + "de altura, pesa"  + peso  + "kg e seu IMC é "  + imc + "kg/m²")













