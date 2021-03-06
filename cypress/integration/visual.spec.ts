describe('Image Snapshot', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1024, 768);
  });

  it('main', () => {
    // take snapshot
    cy.percySnapshot();
    cy.matchImageSnapshot();
  });

  it('dialog', () => {
    cy.get('#button_add').should('be.visible').click();
    cy.get('#dialog_edit').should('be.visible');

    // fill the input fields
    cy.get('#input_firstname').type('Foo');
    cy.get('#input_lastname').type('Bar');

    // take snapshot
    cy.percySnapshot();
    cy.get('#dialog-container_edit').matchImageSnapshot();
  });
});
