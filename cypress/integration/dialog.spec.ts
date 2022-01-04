describe('Dialog', () => {
  it('Open the Dialog', () => {
    cy.visit('/');

    cy.get('#button_add').should('be.visible').click();

    cy.contains('New Contact');

    cy.get('#button_submit').should('be.disabled');
  });

  it('Add a new contact item', () => {
    // fill the input fields
    cy.get('#input_firstname').type('Foo');
    cy.get('#input_lastname').type('Bar');

    cy.get('#button_submit').should('be.enabled').click();
  });

  it('Check the new contact item in the overview', () => {
    cy.contains('.list__divider', 'B');
    cy.contains('.list > li > a', 'Bar, Foo');
  });
});
