/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();

describe("Login page tests", () => {
  it("Visit the Sauce Page", () => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Check if basic elements are dislplayed", () => {
    cy.visit("https://www.saucedemo.com/");
    loginPage.verifyIfBasicElementsAreDisplayed();
  });

  it("Login into bank accout using hardcoded data", () => {
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
    mainPage.verifyIfProductElementIsDisplayed();
  });

  it("Login with bad credentials", () => {
    loginPage.fillCredentialsData("BadUsername", "BadPassword");
    loginPage.clickSignInButton();
    loginPage.verifyBadCredentialsAlert();
  });

  it("Log into bank account using json data", () => {
    cy.fixture("credentials").then((loginData) => {
      loginPage.fillCredentialsData(
        loginData.loginUser,
        loginData.passwordUser
      );
      loginPage.clickSignInButton();
      mainPage.verifyIfProductElementIsDisplayed();
    });
  });
});
