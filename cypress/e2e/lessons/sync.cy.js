/// <reference types="cypress"/>

describe("Sync", () => {

    before(() => { //vai executar antes do primeiro  teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    });
    
    beforeEach(() => { //vai executar antes de cada um dos tests
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    });

    it("Espera do Cypress", () => {

        cy.get('#buttonDelay').click()

        cy.get('#novoCampo')
            .should('not.exist')

        cy.get('#novoCampo')
            .should('exist')

        cy.get('#novoCampo')
            .should('be.visible')

        cy.get('#novoCampo')
         .type('Campo ficou visível')
    })

})