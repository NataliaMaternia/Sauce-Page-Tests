/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();

beforeEach(() => {
  loginPage.fillCredentialsData("standard_user", "secret_sauce");
  loginPage.clickSignInButton();
});

describe("Main Page tests", () => {
  it("click on  product and back", () => {
    mainPage.clickOnProductAndBack();
  });

  it("Add product to cart", () => {
    mainPage.addProductToCart();
    // TODO assert
  });
});
