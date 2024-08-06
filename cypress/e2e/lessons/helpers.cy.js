/// <reference types="cypress" />

describe('Helpers', () => {

    beforeEach(() => { //vai executar antes de cada um dos tests
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    });

    it("Wrap", () => {

        const obj = {
            nome: 'Ana',
            idade: 21
        }

        expect(obj).to.have.property('nome')

        cy.wrap(obj).should('have.property', 'nome') // Basicamente ele está encapsulando o objeto para que possa ser usado com os comandos do cypress

        cy.get("#formNome").then($el => {
            cy.wrap($el).type('Funciona via cypress')
        })

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Campo 1'))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Campo 2'))
    })

    it.only('Its', () => {

        const obj = {
            nome: 'Ana',
            idade: 21
        }

        cy.wrap(obj).should('have.property', 'nome', 'Ana')
        cy.wrap(obj).its('nome').should('be.equal', 'Ana')

        const obj_dois = {
            nome: 'Ana',
            idade: 21,
            endereco: {
                rua: 'floripa'
            }
        }

        // Verifica se tem a propriedade 'rua' dentro do objeto endereço
        cy.wrap(obj_dois)
            .its('endereco')
            .should('have.a.property', 'rua')

        // Verifica se o valor do objeto endereço tem o valor floripa em rua
        cy.wrap(obj_dois)
            .its('endereco')
            .its('rua')
            .should('contain', 'floripa')

        // Verifica o valor da rua, porém feito buscando endereço > rua diretamente, evitando erro de retry
        cy.wrap(obj_dois)
            .its('endereco.rua')
            .should('contain', 'floripa')

        cy.title()
            .its('length')
            .should('be.equal', 20)
    })

})