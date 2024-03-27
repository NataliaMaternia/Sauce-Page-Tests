/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import ProductPage from "../pageObjects/productPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const productPage = new ProductPage();

describe("Product Page tests", () => {
  beforeEach(() => {
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
    mainPage.clickOnFirstProduct();
  });

  it("Add product to cart at product page", () => {
    productPage.addFirstProductToCart();
  });

  it("Remove product from cart st product page", () => {
    productPage.addFirstProductToCart();
    productPage.removeProductFromCart();
  });
});
