describe('Main', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');

    cy.contains('Contacts');

    cy.get('#button_add').should('be.visible');
  });

  it('Select a contact item', () => {
    cy.contains('.list > li > a', 'Appleseed, Johnny')
      .should('have.class', 'mat-ripple')
      .click()
      .within(() => {
        cy.get('.mat-ripple-element').should('be.visible');
      });

    cy.url().should('include', 'ac26dca8-014c-4fea-b3df-6027378bdcd8');

    cy.get('section.details').should('be.visible');
  });
});
