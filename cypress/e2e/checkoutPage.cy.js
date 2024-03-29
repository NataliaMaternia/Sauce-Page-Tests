/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import CartPage from "../pageObjects/cartPage";
import CheckoutPage from "../pageObjects/checkoutPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe("Checkout tests", () => {
  beforeEach(() => {
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
    mainPage.clickOnshoppingcart();
    cartPage.clickOnCheckoutButton();
  });

  it("fill user information", () => {
    checkoutPage.fillUserInformation();
  });

  it("click on cancel button", () => {
    checkoutPage.fillUserInformation();
    checkoutPage.clickOnCancelButton();
  });

  it("click on finish button", () => {
    checkoutPage.fillUserInformation();
    checkoutPage.clickOnFinishButton();
  });

  it("check pathname of checkout:'your information' page", () => {
    checkoutPage.pathnameCheckoutYourInformation();
  });

  it("check pathname of checkout:'overview' page", () => {
    checkoutPage.fillUserInformation();
    checkoutPage.pathnameCheckoutOverwiew();
  });

  it("check pathname of checkout:'complete' page", () => {
    checkoutPage.fillUserInformation();
    checkoutPage.clickOnFinishButton();
    checkoutPage.pathnameCheckoutComplete();
  })

});
