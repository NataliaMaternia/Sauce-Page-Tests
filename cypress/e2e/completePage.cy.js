/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import CartPage from "../pageObjects/cartPage";
import CheckoutPage from "../pageObjects/checkoutPage";
import CompletePage from "../pageObjects/completePage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const completePage = new CompletePage();

describe("Checkout: 'your information' tests", () => {
  beforeEach(() => {
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
    mainPage.clickOnshoppingcart();
    cartPage.clickOnCheckoutButton();  
    checkoutPage.fillUserInformation();
    checkoutPage.clickOnContinueButton();
    checkoutPage.clickOnFinishButton();
  });


  it("click on back home button", () => {
    completePage.clickOnBackHomeButton();
  });

  it("verify if order is complete", () => {
    completePage.verifyIfOrderIsComplete();
  });

  it("check pathname of checkout:'complete' page", () => {
    completePage.pathnameCompletePage();
  })

});
