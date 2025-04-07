// https://on.cypress.io/api

describe('Distance Vue', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Oblicz odległość między punktami');
  });
});
