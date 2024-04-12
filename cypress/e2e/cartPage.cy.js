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
    // given
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
    mainPage.clickOnFirstProduct();
    mainPage.clickOnshoppingcart();
  });

  it("click on checkout button", () => {
    // when
    cartPage.clickOnCheckoutButton();
    // then
    checkoutPage.verifyIfcheckoutIsVisible();
  });

  it("click on continue shopping button", () => {
    // when
    cartPage.clickOnContinueShoppingButton();
    // then
    mainPage.verifyIfProductElementIsVisible();
  });

  it("check pathname of cart page", () => {
    // when go to page in before section
    // then
    cartPage.verifyPathname();
  });
});
