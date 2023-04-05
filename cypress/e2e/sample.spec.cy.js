describe('github action suite', () => {

    before(() => {
        cy.visit('/')
    });

    it('validate, hearder contains "Welcome to the-internet" text', () => {
        cy.contains('Welcome to the-internet')
        console.log("header text is present")
    });

    it('validate, second test', () => {
        console.log("fake test")
    });
    
});