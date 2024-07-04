/// <reference types="cypress" />

describe('Exemplo de describe', () => {
  it.only('teste agrupado', () => {
    cy.visit('https://example.cypress.io')
  })
})

