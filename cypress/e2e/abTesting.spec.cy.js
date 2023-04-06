describe('A/B Testing', () => {

    before(() => {
        cy.visit('/')
    });

    it('validate, hearder text and ab testing header text', () => {
        cy.get('.heading').contains('Welcome to the-internet')
        cy.get('li:nth-of-type(1) > a').click();
        cy.url().should('eq', 'https://the-internet.herokuapp.com/abtest')
        cy.get('h3').contains('A/B Test Control')
    })
});
