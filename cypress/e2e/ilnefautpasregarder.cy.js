/*
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
  cy.fixture('notesbody.json').then((notesbody) => {
    cy.request({      
      url: 'https://practice.expandtesting.com/notes/api/notes/',
      headers: {
        accept:"application/json",
        "x-auth-token": '586da450ea9d4205970d5d415797f092b7bc4cb3a0304466bf345eb980383f03',
      },
      body: notesbody
    }).then((response) => {
      expect(response.status).to.eql(200)
      console.log(response.body)
    })
  })
})
*/