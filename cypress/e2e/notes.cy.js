describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://practice.expandtesting.com/notes/app/')
    cy.get('[data-testid="open-register-view"]').click()
    //Registration
    cy.get('[data-testid="register-email"]').type('mikhail123456@gmail.fr')
    cy.get('[data-testid="register-name"]').type('Mikhail')
    cy.get(':nth-child(2) > .mb-2').type('123456')
    cy.get('[data-testid="register-confirm-password"]').type('123456')
    cy.get('[data-testid="register-submit"]').click()
    //Log in
    cy.get('[data-testid="login-view"]').click()
    cy.get('[data-testid="login-email"]').type('mikhail123456@gmail.fr')
    cy.get('[data-testid="login-password"]').type('123456')
    cy.get('[data-testid="login-submit"]').click()
  })
})
it("Note creation", () => {
  //J'ai créé commande perso `getNotesApi`, le bout de code j'ai mis dans le fichier `commands.js`
  //J'ai créé Jeux de Données dans le fichier `notesbody`et j'ai mis dedant le tableau de body. Puis je l'appelle avec la méthode `body: notesbody` 
  cy.getNotesApi().then((response) => {
    expect(response.status).to.eql(200); 
  })
})






