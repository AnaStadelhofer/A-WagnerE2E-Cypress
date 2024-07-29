/// <reference types="cypress"/>

describe("Elementos comuns", () => {

    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it("Campo texto", () => {

        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')

        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it("Campo com Links", () => {

        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')

        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

    })

    it("Hooks/Gatilhos", () => {

        before(() => {
            cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        })

        beforeEach(() => {
            cy.reload()
        })
    
    })

    it("Campo Texto Preencher", () => {
        cy.get('#elementosForm\\:sugestoes').type("Duas barras").should('have.value', 'Duas barras')

        // Duas barras faz ele interpretar os dois pontos (caracteres especial) como parte do elemento/atributo

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type("Referencia grande")

        cy.get('[data-cy="dataSobrenome"]').type("Sobrenome 12345{backspace}{backspace}")

        //{Backspace deleta o ultimo caractere}

        cy.get('[data-cy="dataSobrenome"]').type("Sobrenome 12345{backspace}{backspace}").clear() //comando para limpar o campo

        cy.get('#formNome').type("Nome{selectall}Ana", { delay: 1000}).should("have.value", "Ana")

        // {Selectall} seleciona todo o valor do campo

    })

    it("Campo radio e checkbox", () => {
        
        cy.get('#formSexoFem').click().should('to.be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2) // Verifica se tem duas radion button

    })

    it.only("Campo combobox", () => {
        cy.get('#formComidaCarne').click().should('to.be.checked')
        cy.get('#formComidaFrango').click().should('to.be.checked')
    })

    it("Campo combo múltiplo", () => {
        
    })
})