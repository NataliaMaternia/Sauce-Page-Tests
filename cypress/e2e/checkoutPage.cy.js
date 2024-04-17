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

describe("Checkout: 'your information' tests", () => {
  beforeEach(() => {
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
    mainPage.clickOnshoppingcart();
  });

  it("fill user information", () => {
    // arrange
    cartPage.clickOnCheckoutButton();
    // act
    checkoutPage.fillUserInformation();
    // assert
    checkoutPage.verifyIfErrorMessageCointainerDoNotContainError();
  });

  it("click on cancel button", () => {
    // arrange
    cartPage.clickOnCheckoutButton();
    checkoutPage.fillUserInformation();
    // act
    checkoutPage.clickOnCancelButton();
    // assert
    cartPage.verifyCartPathname();
  });

  it("click on continue button", () => {
    // arrange
    cartPage.clickOnCheckoutButton();
    checkoutPage.fillUserInformation();
    // act
    checkoutPage.clickOnContinueButton();
    // assert
    overviewPage.pathnameOverwiewPage();
  });

  it("check pathname of checkout:'your information' page", () => {
    // act 
    cartPage.clickOnCheckoutButton();
    // assert
    checkoutPage.pathnameCheckoutYourInformation();
  });
});
