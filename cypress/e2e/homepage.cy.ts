describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the site title', () => {
    cy.title().should('contain', 'Simple Recipes')
  })

  it('should have accessible navigation', () => {
    cy.get('nav').should('exist')
    cy.get('[role="navigation"]').should('exist')
  })

  it('should display recipe cards', () => {
    cy.get('[data-testid="recipe-card"]').should('have.length.greaterThan', 0)
  })

  it('should allow filtering by tags', () => {
    cy.get('button').first().contains('breakfast', { matchCase: false }).click()
    cy.get('[data-testid="recipe-card"]').should('contain', 'breakfast')
  })
})