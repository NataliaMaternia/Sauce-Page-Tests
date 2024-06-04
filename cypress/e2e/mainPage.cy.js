/// <reference types="cypress" />

import CartPage from "../pageObjects/cartPage";
import HeaderLabel from "../pageObjects/headerLabel";
import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import ProductPage from "../pageObjects/productPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const productPage = new ProductPage();
const headerLabel = new HeaderLabel();
const cartPage = new CartPage();

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
    // act
    mainPage.addFirstProductToCart();
    // assert
    headerLabel.checkIfShoppingCartIsGreaterThan0();
  });

  it("Remove first product from cart at main page", () => {
    // arrange
    mainPage.addFirstProductToCart();
    // act
    mainPage.removeFirstProductFromCart(); 
    // assert
    headerLabel.checkIfShoppingCartIsEmpty();
  });

  it("Sort by Name A to Z", () => {
    // act
    mainPage.sortByNameAtoZ();
    // assert
    mainPage.verifyIfProductsAreSortByNameAtoZ();
  });

  it("Sort by Name Z to A", () => {
    // act
    mainPage.sortByNameZtoA();
    // assert
    mainPage.verifyIfProductsAreSortByNameZtoA();
  });

  it("Sort by price low to high", () => {
    // act
    mainPage.sortByPriceLowToHigh();
    // assert
    mainPage.verifyIfProductsAreSortByPriceLowToHigh();
    
  });

  it("Sort by price high to low", () => {
    // act
    mainPage.sortByPriceHighToLow();
    // assert
    mainPage.verifyIfProductsAreSortByPriceHighToLow();
  });

  it("Click on shopping cart", () => {
    // act
    mainPage.clickOnshoppingcart();
    // assert
    cartPage.verifyIfYourCartElementIsVisible();
  });

  it("check pathname of main page", () => {
    mainPage.pathname();
  });
});
