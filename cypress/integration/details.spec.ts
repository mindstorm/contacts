describe('Details', () => {
  it('Navigate to a existing detail page', () => {
    cy.visit('/ac26dca8-014c-4fea-b3df-6027378bdcd8');

    cy.get('section.details').should('be.visible');

    cy.get('.list').within(() => {
      cy.get('a.list__item[href*="ac26dca8-014c-4fea-b3df-6027378bdcd8"]').should('have.class', 'is-active');
    });
  });

  it('Navigate to a NOT existing detail page', () => {
    cy.visit('/foo-bar');

    cy.get('section.details').should('be.visible');

    cy.get('#message_empty').should('be.visible');

    cy.get('.list').within(() => {
      cy.get('a.list__item.is-active').should('not.exist');
    });
  });
});
