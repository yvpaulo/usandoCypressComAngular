//const { createYield } = require("typescript")
/// <reference types="cypress" />

/*context('Exemplo', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/')
  })

  it('Exemplos Cypress', ()=>{
    cy.visit('https://example.cypress.io')
    expect(true).to.equal(true)
  })
})*/

describe('Primeiro test', ()=>{
  it('Exemplos Cypress', ()=>{
    cy.visit('https://example.cypress.io')
    expect(true).to.equal(true)
  })
})
