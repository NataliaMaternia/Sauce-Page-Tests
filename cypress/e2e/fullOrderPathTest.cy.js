/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import HeaderLabel from "../pageObjects/headerLabel";
import CartPage from "../pageObjects/cartPage";
import CheckoutPage from "../pageObjects/checkoutPage";
import OverviewPage from "../pageObjects/overviewPage";
import CompletePage from "../pageObjects/completePage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const headerLabel = new HeaderLabel();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const overviewPage = new OverviewPage();
const completePage = new CompletePage();

describe("Order test", () => {
  it("Order test", () => {
    cy.visit("https://www.saucedemo.com/");
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
    mainPage.addFirstProductToCart();
    headerLabel.checkIfShoppingCartIsGreaterThan0();
    mainPage.clickOnshoppingcart();
    cartPage.clickOnCheckoutButton();
    checkoutPage.fillUserInformation();
    checkoutPage.clickOnContinueButton();
    overviewPage.clickOnFinishButton();
    completePage.verifyIfOrderIsComplete();
  });
});
