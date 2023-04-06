describe('Add Remove Elements', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('li:nth-of-type(2) > a').click();
    });

    it('validate, add element button is visible', () => {
        cy.url().should('eq', 'https://the-internet.herokuapp.com/add_remove_elements/');
        cy.get('.example button').should('be.visible');
    });
    it('validate, delete button is visible & exist', () => {
        cy.get('.example button').click();
        cy.get('.example #elements button').should('exist')
        cy.get('.example #elements button').should('be.visible');
    });

    it('validate, delete button is not visible & not exist', () => {
        cy.get('.example button').click();
        cy.get('.example #elements button').click();
        cy.get('.example #elements button').should('not.exist')
    });
    
});