// o Javascript possui 8 tipos de dados, sendo 7 deles , os chamados os tipos primitivos.

// 1 - tipo NUMBER - usada para número inteiros ou decimais
let idade = 25
let preço = 379.90

console.log(preço);
console.log(typeof preço)
console.log("--------------------");

// 2 tipo STRING - usado para textos 
let nome = "Dani"
console.log(nome);

let sobrenome = "${nome} Stephany"
console.log(sobrenome);

let frase = 'Apenas um teste de aspas simples'
console.log(frase);

let frase2 = 'exemplo de string com crase ${nome}'
console.log(frase2);
console.log(typeof frase2)

let nomeCompleto = '${nome} ${sobrenome}'
console.log(nomeCompleto);

// 3 - tipo BOOLEAN - usada para valores lógicos e que só pode ter duas respostas possíveis
// verdadeiro - true 
// falso - false

let maiorDeidade = true
let aprovado = false 

console.log(typeof maiorDeidade)

// 4 - tipo UNDEFINED - usado para variáveis que não foram inicializados, ou seja, não receberam nenhum valor   
let x
console.log(x)

x = 5
console.log(x)

// 5 - tipo  NULL
let resposta = null
let user = null

// 6 - tipo SYMBOL (símbolo) - usada para criar indentificadores únicos para objetos 
const senha = Symbol("senha");
console.log(senha);
console.log(typeof senha);

const id2 = Symbol("id");
console.log("id2");


// 7 - tipo BIGINT - é usado para representar números inteiros enormes, maiores que o limite do tipo NUMBER
const numeroGrande = 1234567891234567891234567890n;
console.log