/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();

describe("Login page tests", () => {
  it("Visit the Sauce Page", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("equal", "https://www.saucedemo.com/");
  });

  it("Check if basic elements are dislplayed", () => {
    // act
    loginPage.openPage();
    // assert
    loginPage.verifyIfBasicElementsAreDisplayed();
  });

  it("Login into bank accout using hardcoded data", () => {
    // arrange
    loginPage.openPage();
    // act
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
    // assert
    mainPage.verifyIfProductsElementIsVisible();
  });

  it("Login with bad credentials", () => {
    // arrange
    loginPage.openPage();
    // act
    loginPage.fillCredentialsData("BadUsername", "BadPassword");
    loginPage.clickSignInButton();
    // assert
    loginPage.verifyBadCredentialsAlert();
  });

  it("Log into bank account using json data", () => {
    // arrange
    loginPage.openPage();
    // act
    cy.fixture("credentials").then((loginData) => {
      loginPage.fillCredentialsData(
        loginData.loginUser,
        loginData.passwordUser
      );
    });
    loginPage.clickSignInButton();
    // assert
    mainPage.verifyIfProductsElementIsVisible();
  });
});
