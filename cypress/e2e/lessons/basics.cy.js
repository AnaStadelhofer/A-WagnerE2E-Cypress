/// <reference types="cypress" />

describe('Cypress Basico', () => {
  it('Verificar o título do formulário', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    cy.title()
      .should('be.equal', 'Campo de Treinamento') // título da página

    cy.title()
      .should('contain', 'Campo') // título da página - contém

    cy.get('h3')
      .should('have.text', 'Campo de Treinamento') // título do formulário - h3

    cy.get('h3')
      .should('have.text', 'Campo de Treinamento')
      .and('contain', 'Treinamento') // faz apenas uma busca para a assertiva *no lugar do and também pode o should
      
  })
})

describe('Encontrar elementos e interagir', () => {
  it('Pegar elementos e interagir', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple').click().should('have.value', 'Obrigado!')

  })
})

describe('Debug e pause', () => {
  it('Pegar elementos e interagir', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple').click().should('have.value', 'Obrigado!').debug()

    cy.pause()

  })
})
