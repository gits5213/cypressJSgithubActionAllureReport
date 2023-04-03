/* global Cypress cy  */

Cypress.Commands.add('getBySel', locator => {
  return cy.get(locator);
});