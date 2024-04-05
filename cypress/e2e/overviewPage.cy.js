/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import CartPage from "../pageObjects/cartPage";
import CheckoutPage from "../pageObjects/checkoutPage";
import OverviewPage from "../pageObjects/overviewPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const overviewPage = new OverviewPage();

describe("Checkout tests", () => {
  beforeEach(() => {
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
    mainPage.clickOnshoppingcart();
    cartPage.clickOnCheckoutButton();
    checkoutPage.fillUserInformation();
    checkoutPage.clickOnContinueButton();
  });

  it("click on cancel button", () => {
    overviewPage.clickOnCancelButton();
  });

  it("click on finish button", () => {
    overviewPage.clickOnFinishButton();
  });

  it("check pathname of checkout:'overview' page", () => {
    overviewPage.pathnameOverwiewPage();
  });

});
