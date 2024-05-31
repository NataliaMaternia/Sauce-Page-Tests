/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import ProductPage from "../pageObjects/productPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const productPage = new ProductPage();

describe("Product Page tests", () => {
  beforeEach(() => {
    loginPage.openPageAndCorrectlyLogin();
  });

  it("Add first product to cart at product page", () => {
    // arrange
    mainPage.clickOnFirstProduct();
    // act
    productPage.addProductToCart(); 
    // assert
    productPage.checkIfShoppingCartIsNotEmpty();
  });

  it("Remove product from cart at product page", () => {
    // arrange
    mainPage.clickOnFirstProduct();
    productPage.addProductToCart();
    // act
    productPage.removeProductFromCart();
    // assert
    productPage.checkIfShoppingCartIsEmpty();
  });

  it("Click on back to products button", () => {
    // arrange
    mainPage.clickOnFirstProduct();
    // act
    productPage.clickOnBackToProductsButton();
    // assert
    mainPage.verifyIfProductsElementIsVisible();
  });
});
