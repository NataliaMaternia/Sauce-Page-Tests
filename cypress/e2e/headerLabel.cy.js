/// <reference types="cypress" />

import HeaderLabel from "../pageObjects/headerLabel";
import LoginPage from "../pageObjects/loginPage";
const loginPage = new LoginPage();
const headerLabel = new HeaderLabel();

describe("Header Label tests", () => {
  beforeEach(() => {
    loginPage.fillCredentialsData("standard_user", "secret_sauce");
    loginPage.clickSignInButton();
  });

  it("Click on logout", () => {
    headerLabel.clickOnlogout();
  });

  it("Click reset app state", () => {
    headerLabel.clickOnResetAppState();
  });

  it("Verify text on headerLabel", () => {
    headerLabel.verifyTextOnHeaderLabel();
  });
});
