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
   loginPage.openPageAndCorrectlyLogin();
  });

  it("click on product and back", () => {
    // arrange
    mainPage.clickOnFirstProduct();
    // act
    productPage.clickOnBackToProductsButton();
    // assert
    mainPage.verifyIfProductsElementIsVisible();
  });

  it("Add product to cart at main page", () => {
    // arrange
    mainPage.addFirstProductToCart();
    // act
    headerLabel.checkIfShoppingCartIsGreaterThan0();
    // assert
  });

  it("Remove first product from cart at main page", () => {
    // given
    mainPage.addFirstProductToCart();
    // when
    mainPage.removeFirstProductFromCart();
    // then
    headerLabel.checkIfShoppingCartIsEmpty();
  });

  it("Sort by Name A to Z", () => {
    mainPage.sortByNameAtoZ();
  });

  it("Sort by Name Z to A", () => {
    mainPage.sortByNameZtoA();
  });

  it("Sort by price low to high", () => {
    mainPage.sortByPriceLowToHigh();
  });

  it("Sort by price high to low", () => {
    mainPage.sortByPriceHighToLow();
  });

  it("Click on shopping cart", () => {
    mainPage.clickOnshoppingcart();
  });

  it("check pathname of main page", () => {
    mainPage.pathname();
  });
});
