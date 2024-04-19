/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import CartPage from "../pageObjects/cartPage";
import CheckoutPage from "../pageObjects/checkoutPage";
import CompletePage from "../pageObjects/completePage";
import OverviewPage from "../pageObjects/overviewPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const completePage = new CompletePage();
const overviewPage = new OverviewPage();

describe("Checkout: 'your information' tests", () => {
  beforeEach(() => {
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
    mainPage.clickOnshoppingcart();
    cartPage.clickOnCheckoutButton();
    checkoutPage.fillUserInformation();
    checkoutPage.clickOnContinueButton();
  });

  it("click on back home button", () => {
    // arrange
    overviewPage.clickOnFinishButton();
    // act
    completePage.clickOnBackHomeButton();
    // assert
    mainPage.verifyIfProductsElementIsVisible();
  });

  it("check pathname of checkout:'complete' page", () => {
    // act
    overviewPage.clickOnFinishButton();
    // assert
    completePage.pathnameCompletePage();
  });
});
