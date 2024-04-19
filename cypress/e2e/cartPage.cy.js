/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import CartPage from "../pageObjects/cartPage";
import CheckoutPage from "../pageObjects/checkoutPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe("Cart page tests", () => {
  beforeEach(() => {
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
    mainPage.clickOnFirstProduct();
    mainPage.clickOnshoppingcart();
  });

  it("click on checkout button", () => {
    // arrange
    mainPage.clickOnshoppingcart();
    // act
    cartPage.clickOnCheckoutButton();
    // assert
    checkoutPage.verifyIfcheckoutIsVisible();
  });

  it("click on continue shopping button", () => {
    // arrange
    mainPage.clickOnshoppingcart();
    // act
    cartPage.clickOnContinueShoppingButton();
    // assert
    mainPage.verifyIfProductsElementIsVisible();
  });

  it("check pathname of cart page", () => {
    // act
    mainPage.clickOnshoppingcart();
    // assert
    cartPage.verifyCartPathname();
  });
});
