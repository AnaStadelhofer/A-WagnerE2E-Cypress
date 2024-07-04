# Cypress

Esse reposítorio foi feito para estudos de Cypress para testes funcionais e testes de API.

## Cypress Básico

Neste modulo, será estudado o cypress básico.

## Ambiente

Necessário para para instalação:
1. Node: https://nodejs.org/pt
2. VsCode: https://code.visualstudio.com/download
3. Cypress: ´´npm install cypress --save-dev´´

Para iniciar o projeto, basta executar o seguinte comando no terminal: npx cypress open

## Arrow Functions
Uma arrow function é uma forma mais concisa de escrever funções em JavaScript. Ela difere de uma função tradicional principalmente na sintaxe e no comportamento do contexto this. 
	Na function, o this referência quem ele invocou.

Exemplo de código:

// Função tradicional
function soma(a, b) {
  return a + b;
}


// Arrow function equivalente
const soma = (a, b) => {
  return a + b;
};


// Se houver apenas uma expressão de retorno, pode-se omitir as chaves e o return
const soma = (a, b) => a + b;




const = variável que não muda o valor
let = variável que muda o valor

## Promises
Uma Promise é um objeto usado para representar o sucesso ou a falha eventual de uma operação assíncrona. É uma maneira de lidar com operações assíncronas de forma mais limpa e legível, evitando o uso excessivo de callbacks aninhados (callback hell).

Assíncrono é esperar a respostas para exibir, mas sem pausar a aplicação.
	Exemplo: Por exemplo, imagine que você está baixando um arquivo da internet. Enquanto espera o download terminar, você pode abrir outra aba no navegador e visitar um site. Isso é possível porque o download está acontecendo de forma assíncrona, ou seja, você pode fazer várias coisas ao mesmo tempo no seu computador.

Características principais:
Métodos: As Promises têm métodos como .then() para lidar com o sucesso da operação, .catch() para lidar com falhas e .finally() para executar código independentemente do resultado da operação assíncrona.
Encadeamento: As Promises permitem encadear várias operações assíncronas de forma mais legível, o que é conhecido como chaining.

Exemplo:
const minhaPromise = new Promise((resolve, reject) => {
  // Simulação de operação assíncrona
  setTimeout(() => {
      const sucesso = true;
      if (sucesso) {
          resolve('Operação bem-sucedida');
      } else {
          reject('Operação falhou');
      }
  }, 2000);
});


minhaPromise
  .then(resultado => {
      console.log(resultado);  // Saída: Operação bem-sucedida
  })
  .catch(erro => {
      console.error(erro);  // Saída em caso de falha
  });

## Describe/It
Adicionar o comando “/// <reference types="cypress" />” no começo do arquivo, faz com que o VsCode entenda que você está usando o Cypress.

O describe agrupa diversos testes, que podem ser feitos utilizando o it.
describe('Exemplo de describe', () => {
  it('teste agrupado', () => {
    cy.visit('https://example.cypress.io')
  })
})

Conforme o usuário for editando os código, a automação já vai rodando automaticamente. Para ajudar a ver o andamento da parte que está mexendo, pode ser usada duas funções, o skip ou only.
- skip irá pular o teste informado, exemplo: it.skip('teste agrupado', ()
- only irá rodar apenas o teste informado, exemplo: it.only('teste agrupado', ()

Isso também pode ser aplicado no describe, pulando ou rodando unicamente o grupo inteiro.

