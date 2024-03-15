/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import ProductPage from "../pageObjects/productPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const productPage = new ProductPage();

beforeEach(() => {
  loginPage.fillCredentialsData("standard_user", "secret_sauce");
  loginPage.clickSignInButton();
  mainPage.clickOnFirstProduct();
});

describe("Product Page tests", () => {
  it("Add product to cart at product page", () => {
    productPage.addFirstProductToCart();
  });

  it("Remove product from cart ", () => {
    productPage.addFirstProductToCart();
    productPage.removeProductFromCart();
  });
});
