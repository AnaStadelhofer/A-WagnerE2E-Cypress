/// <reference types="cypress"/>

describe("Sync", () => {
    
    beforeEach(() => {
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

    it("Refazer tentativas", () => {

        cy.get('#novoCampo')
            .should('not.exist')

        cy.get('#buttonDelay')
            .click()
        
        cy.get('#novoCampo')
            .should('not.exist')

        cy.get('#novoCampo')
            .should('exist')
            .type('Preenchendo campo')
    })

    it("Usando o find", () => {

        cy.get('#buttonList')
            .click()

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')
    })

    it("Alterando o timeout dos testes", () => {

        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo', { timeout: 1000 })
            .should('exist')
    })

    it("Usando o wait", () => {

        cy.get('#buttonListDOM')
            .click()

            cy.wait(10000)

            cy.get('#lista li span')
                .should('have.length', 2)
    })

    it("Retry do Clcik", () => {
      cy.get("#buttonCount")
        .click()
        .click()
        .should('have.value', '111')  
    })

    it.only("Then vs Should", () => {
        cy.get("#buttonListDOM").then($el => {
            expect($el).to.have.length(1)
            console.log($el)
        })
    })
})