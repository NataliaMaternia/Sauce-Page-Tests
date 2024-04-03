/// <reference types="cypress" />

import HeaderLabel from "../pageObjects/headerLabel";
import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import ProductPage from "../pageObjects/productPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const productPage = new ProductPage();
const headerLabel = new HeaderLabel();

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
    headerLabel.checkIfShoppingCartIsGreaterThan0();
  });

  it("Remove first product from cart at main page", () => {
    // given
    mainPage.addFirstProductToCart(); 
    // when
    mainPage.removeFirstProductFromCart();
    // then
    headerLabel.checkIfShoppingCartIsEmpty();
  });

  it("Click on shopping cart", () => {
    mainPage.clickOnshoppingcart();
  });

  it("check pathname of main page", () => {
    mainPage.pathname();
  })

});
