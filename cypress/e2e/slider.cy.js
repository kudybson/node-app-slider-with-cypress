describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Upewnij się, że użytkownik może przewijać slajdy w galerii za pomocą przycisków nawigacji.', function () {
  it('Upewnij się, że użytkownik może przewijać slajdy w galerii za pomocą przycisków nawigacji.', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Italy');
  });
});


describe('Zweryfikuj, czy opis każdego slajdu jest wyświetlany poprawnie.', function () {
  it('Zweryfikuj, czy opis każdego slajdu jest wyświetlany poprawnie.', function () {
    cy.visit('http://localhost:3000');
    let contents = [
      {
        name: "Italy",
        desc: "Rome"
      },
      {
        name: "United Kingdom",
        desc: "London"
      },
      {
        name: "France",
        desc: "Paris"
      }]
    contents.forEach(element => {
      cy.get('.swiper-slide-active').should('contain', element.name);
      cy.get('.swiper-slide-active').should('contain', element.desc);
      cy.get('.swiper-button-next').click();
      cy.wait(2000);
    });
  });
});

// jak zwryfikowac poprawnosc skoro widok tylko zmienia roziar? 
describe('Zweryfikuj, czy galeria zachowuje się poprawnie na różnych urządzeniach.', function () {
  it('viewport test', () => {
    cy.visit('http://localhost:3000');
    cy.viewport(320, 480);
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');

  })
});
