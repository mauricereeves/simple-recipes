/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      visitRecipe(id: string): Chainable<Element>
      toggleUnits(): Chainable<Element>
    }
  }
}

Cypress.Commands.add('visitRecipe', (id: string) => {
  cy.visit(`/recipe/${id}`)
})

Cypress.Commands.add('toggleUnits', () => {
  cy.get('[data-testid="unit-toggle"]').click()
})

export {}