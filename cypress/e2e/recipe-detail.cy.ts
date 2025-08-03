describe('Recipe Detail Page', () => {
  beforeEach(() => {
    cy.visit('/recipe/pancakes')
  })

  it('should display recipe title and metadata', () => {
    cy.get('h1').should('contain', 'Pancakes')
    cy.get('[data-testid="recipe-author"]').should('exist')
    cy.get('[data-testid="recipe-date"]').should('exist')
  })

  it('should display ingredients list', () => {
    cy.get('[data-testid="ingredients-list"]').should('exist')
    cy.get('[data-testid="ingredient-item"]').should('have.length.greaterThan', 0)
  })

  it('should display numbered instructions', () => {
    cy.get('[data-testid="instructions-list"]').should('exist')
    cy.get('[data-testid="instruction-step"]').should('have.length.greaterThan', 0)
  })

  it('should allow unit conversion', () => {
    cy.get('[data-testid="unit-toggle"]').should('exist')
    cy.get('[data-testid="unit-toggle"]').click()
    cy.get('[data-testid="ingredient-item"]').first().should('contain', 'ml')
  })

  it('should persist unit preference', () => {
    cy.get('[data-testid="unit-toggle"]').click()
    cy.reload()
    cy.get('[data-testid="ingredient-item"]').first().should('contain', 'ml')
  })
})