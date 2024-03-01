/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
const loginPage = new loginPage();
// beforeEach(() => {
describe('Visit the Sauce Page Test', () => {
  it('Visit the Sauce Page', () => {
    cy.visit('https://www.saucedemo.com/')
  })
})
// })
