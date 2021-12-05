describe('Home page tests', () => {
  beforeEach(() => {
    cy.fixture('user').then((user) => {
      cy.login(user.login, user.password);
    });
  });

  it('Logout should navigate to login', () => {
    cy.contains('Log out').click();

    cy.url().should('include', '/login');
  });

  it('Show total resources and servers', () => {
    cy.get('.resources');
    cy.get('.content-servers .list');
  });

  it('Should show server resources on click', () => {
    cy.get('.content-servers .list .item').click();
    cy.contains('Server details');
  });
});
