describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    console.log("Hello world");
    cy.log("Hello world");
  })
})