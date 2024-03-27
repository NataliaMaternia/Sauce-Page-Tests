/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import ProductPage from "../pageObjects/productPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const productPage = new ProductPage();

describe("Main Page tests", () => {
  beforeEach(() => {
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
  });

  it("click on  product and back", () => {
    mainPage.clickOnFirstProduct();
    productPage.backButton();
  });

  it("Add product to cart at main page", () => {
    mainPage.addFirstProductToCart();
  });

  it("Remove first product from cart at main page", () => {
    mainPage.addFirstProductToCart();
    mainPage.removeFirstProductFromCart();
  });

  it("Click on shopping cart", () => {
    mainPage.clickOnshoppingcart();
  });
});
