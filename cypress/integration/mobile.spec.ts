describe('Mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
  });

  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Contacts');

    cy.get('#button_add').should('be.visible');
    cy.get('a.back__link').should('not.be.visible');
  });

  it('Navigate to a existing detail page', () => {
    cy.visit('/ac26dca8-014c-4fea-b3df-6027378bdcd8');

    cy.get('section.details').should('be.visible');
    cy.get('.list').should('not.be.visible');
    cy.get('a.back__link').should('be.visible');
  });

  it('Navigate back', () => {
    cy.get('a.back__link').click();

    cy.url().should('eq', Cypress.config().baseUrl);

    cy.get('.list').should('be.visible');
    cy.get('section.details').should('not.exist');
  });
});
