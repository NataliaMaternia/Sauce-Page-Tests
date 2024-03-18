/// <reference types="cypress" />

import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";
import CartPage from "../pageObjects/cartPage";
const loginPage = new LoginPage();
const mainPage = new MainPage();
const cartPage = new CartPage();

beforeEach(() => {
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
    mainPage.clickOnFirstProduct();
    mainPage.clickOnshoppingcart();
  });

describe("Cart page tests", () => {
  it("click on checkout button", () => {
    cartPage.clickOnCheckoutButton();
  });

    it("click on continue shopping button", () => {
    cartPage.clickOnContinueShoppingButton();
    });
  });
