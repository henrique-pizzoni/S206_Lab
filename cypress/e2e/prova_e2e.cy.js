/// <reference types="cypress" />

function visitarSite() {
  cy.visit('https://www.saucedemo.com/');
}

function login(username, password) {
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
}

describe("Testes E2E - Site Saucedemo - Prova", () => {

  it("Teste positivo - Conferir se adiciona ao carrinho ao escolher produto", () => {
    visitarSite()
    login('standard_user', 'secret_sauce')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should("contain.text", "1")
  });

  it("Teste negativo - Credenciais inválidas ao fazer login no site", () => {
    visitarSite()
    login('standard_user', 'chrislima')
    cy.get('[data-test="error"]').should("contain.text", "Epic sadface: Username and password do not match any user in this service")
  });

  it("Teste positivo - Experiência de compra completa", () => {
    visitarSite()
    login('standard_user', 'secret_sauce')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type("John")
    cy.get('[data-test="lastName"]').type("Wick")
    cy.get('[data-test="postalCode"]').type("9999")
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should("contain.text", "Thank you for your order!")
  });

});
