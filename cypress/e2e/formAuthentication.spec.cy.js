describe('Form Authentication', () => {

    before(() => {
        cy.visit('/')
        cy.get('li:nth-of-type(21) > a').click();
    });

    it('validate, login successful text', () => {
        cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
        cy.get('input#username').type('tomsmith');
        cy.get('input#password').type('SuperSecretPassword!');
        cy.get('form#login > .radius').click();
        cy.get('div#flash').contains('You logged into a secure area!')
    })
});
