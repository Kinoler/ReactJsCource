export {};

describe('Counter Component Tests', () => {
  it('Component renders initial value provided in props', () => {
    const initValue = 0;
    cy.visit(`/`); 
    cy.get('.div-counter p').should('contain', initValue); 
  });

  it('Click event on "decrement" button decrements the displayed value', () => {
    const initValue = 0;
    cy.visit(`/`);

    cy.get('button:contains("-")').click();
    cy.get('.div-counter p').should('contain', initValue - 1);
  });

  it('Click event on "increment" button increments the displayed value', () => {
    const initValue = 0;
    cy.visit(`/`);

    cy.get('button:contains("+")').click();
    cy.get('.div-counter p').should('contain', initValue + 1);
  });
});