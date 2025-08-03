describe('Accessibility', () => {
  it('should have proper heading hierarchy on homepage', () => {
    cy.visit('/')
    cy.get('h1').should('have.length', 1)
    cy.get('h2').should('exist')
  })

  it('should have proper form labels', () => {
    cy.visit('/')
    cy.get('select').each(($select) => {
      const id = $select.attr('id')
      if (id) {
        cy.get(`label[for="${id}"]`).should('exist')
      }
    })
  })

  it('should have skip link functionality', () => {
    cy.visit('/')
    cy.get('body').tab()
    cy.focused().should('contain', 'Skip to main content')
    cy.focused().type('{enter}')
    cy.focused().should('have.attr', 'id', 'main')
  })

  it('should announce filter changes to screen readers', () => {
    cy.visit('/')
    cy.get('[aria-live="polite"]').should('exist')
  })
})