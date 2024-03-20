/// <reference types="cypress" />

import HeaderLabel from "../pageObjects/headerLabel";
import LoginPage from "../pageObjects/loginPage";
const loginPage = new LoginPage();
const headerLabel = new HeaderLabel();

beforeEach(() => {
  loginPage.fillCredentialsData("standard_user", "secret_sauce");
  loginPage.clickSignInButton();
});

describe("Header Label tests", () => {
  it("Logout", () => {
    headerLabel.logout();
  });
});
