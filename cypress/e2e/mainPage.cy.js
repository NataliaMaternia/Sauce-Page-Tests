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
});

describe("Main Page tests", () => {
  it("click on  product and back", () => {
    mainPage.clickOnProduct();
    productPage.backButton();
  });

  it("Add product to cart", () => {
    mainPage.addProductToCart();
  });
});
