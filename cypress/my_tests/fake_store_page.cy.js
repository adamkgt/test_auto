
beforeEach(() => {
  cy.viewport(1920,1080);  // Ustawienie rozdzielczości przed każdym testem

});

describe('Entering the website', () => {
  it('Go to the website and check the title.', () => {
    cy.visit('https://fakestore.testelka.pl/')
    cy.get('.custom-logo').should('be.visible')
    cy.get('#post-12 > div > header > h1').contains('Wybierz podróż dla siebie!')
  })
})

describe('User registration', () => {
  it('Incorrect registration of a new user', () => {
    cy.fixture('dataLogin').then((dataLogin) => {
    cy.visit('https://fakestore.testelka.pl/moje-konto/');
    cy.get('#reg_email').type(dataLogin.username); 
    cy.get('#reg_password').type(dataLogin.wrongPassword); 
    cy.get('#customer_login > div.u-column2.col-2 > form > p:nth-child(5) > button').should('exist').should('be.disabled'); 
    cy.url().should('include', '/moje-konto'); 
    cy.get('#password_strength').should('contain.text', 'Bardzo słabe - Proszę wpisać mocniejsze hasło.'); 
    })
   })

  it('Correct registration of a new user', () => {
    cy.fixture('dataLogin').then((dataLogin) => {
    cy.visit('https://fakestore.testelka.pl/moje-konto/');
    cy.get('#reg_email').type(dataLogin.username); 
    cy.get('#reg_password').type(dataLogin.password); 
    cy.get('#customer_login > div.u-column2.col-2 > form > p:nth-child(5) > button').click(); 
    cy.url().should('include', '/moje-konto'); 
    cy.get('.woocommerce-MyAccount-content').should('contain.text', 'Witaj test'); 
    })
  })
})

  describe('User login', () => {
    it('Incorrect user login', () => {
    cy.fixture('dataLogin').then((dataLogin) => {
      cy.visit('https://fakestore.testelka.pl/moje-konto/');
      cy.get('#username').type(dataLogin.wrongUsername); 
      cy.get('#password').type(dataLogin.wrongPassword); 
      cy.get('#customer_login > div.u-column1.col-1 > form > p:nth-child(3) > button').click(); 
      cy.url().should('include', '/moje-konto'); 
      cy.get('.woocommerce-error').should('contain.text', 'Błąd: brak admin wśród zarejestrowanych w witrynie użytkowników. Jeśli nie masz pewności co do nazwy użytkownika, użyj adresu e-mail.')
    })
  })

    it('Correct user login', () => {
      cy.fixture('dataLogin').then((dataLogin) => {
      cy.visit('https://fakestore.testelka.pl/moje-konto/');
      cy.get('#username').type(dataLogin.username); 
      cy.get('#password').type(dataLogin.password); 
      cy.get('#customer_login > div.u-column1.col-1 > form > p:nth-child(3) > button').click(); 
      cy.url().should('include', '/moje-konto'); 
      cy.get('.woocommerce-MyAccount-content').should('contain.text', 'Witaj test'); 
    })
  })
})

  describe('Deleting a user account', () => {

    it('Correct deleting a user account', () => {
      cy.fixture('dataLogin').then((dataLogin) => {
      cy.visit('https://fakestore.testelka.pl/moje-konto/');
      cy.get('#username').type(dataLogin.username); 
      cy.get('#password').type(dataLogin.password); 
      cy.get('#customer_login > div.u-column1.col-1 > form > p:nth-child(3) > button').click(); 
      cy.url().should('include', '/moje-konto'); 
      cy.get('.woocommerce-MyAccount-content').should('contain.text', 'Witaj test');  
      cy.get('#post-8 > div > div > div > p:nth-child(4) > a').click();
      cy.get('.custom-logo').should('be.visible')
      cy.get('#post-12 > div > header > h1').contains('Wybierz podróż dla siebie!')
      })
   })
})

