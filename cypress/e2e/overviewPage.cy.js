/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import CartPage from "../pageObjects/cartPage";
import CheckoutPage from "../pageObjects/checkoutPage";
import OverviewPage from "../pageObjects/overviewPage";
import CompletePage from "../pageObjects/completePage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const overviewPage = new OverviewPage();
const completePage = new CompletePage();

describe("Checkout tests", () => {
  beforeEach(() => {
    loginPage.openPageAndCorrectlyLogin();
    mainPage.clickOnshoppingcart();
    cartPage.clickOnCheckoutButton();
    checkoutPage.fillUserInformation();
  });

  it("click on cancel button", () => {
    // arrange
    checkoutPage.clickOnContinueButton();
    // act
    overviewPage.clickOnCancelButton();
    // assert
    mainPage.verifyIfProductsElementIsVisible();
  });

  it("click on finish button", () => {
    // arrange
    checkoutPage.clickOnContinueButton();
    // act
    overviewPage.clickOnFinishButton();
    // assert
    completePage.verifyIfOrderIsComplete();
  });

  it("check pathname of checkout:'overview' page", () => {
    // act
    checkoutPage.clickOnContinueButton();
    // assert
    overviewPage.pathnameOverwiewPage();
  });
});
