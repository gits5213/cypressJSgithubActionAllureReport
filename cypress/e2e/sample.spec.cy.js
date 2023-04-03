describe('github action suite', () => {

    before(() => {
        cy.visit('/')
    });

    it('github action sample test', () => {
        cy.contains('Welcome to the-internet')
    });
    
});