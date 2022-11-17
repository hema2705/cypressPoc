/// <reference types="cypress"/>

describe('Demo QA 2nd Test Case',()=>{
    it('Verify the homepage',()=>{
        cy.visit('my-account/')
        cy.get('#username').should('be.enabled')
        cy.get('#password').should('have.attr','autocomplete','current-password')
        cy.get('#rememberme').should('not.be.checked')
    })
})