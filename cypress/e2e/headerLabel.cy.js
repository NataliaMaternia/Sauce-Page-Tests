/// <reference types="cypress" />

import HeaderLabel from "../pageObjects/headerLabel";
import LoginPage from "../pageObjects/loginPage";
const loginPage = new LoginPage();
const headerLabel = new HeaderLabel();

describe("Header Label tests", () => {
  beforeEach(() => {
    loginPage.openPageAndCorrectlyLogin();
  });

  it("Click on burger menu", () => {
    // arrange in before section
    // act
    headerLabel.clickOnBurgerMenu();
    // assert
    headerLabel.checkIfBurgerMenuIsUnfolded();
  });

  it("Click on logout", () => {
    // arrange
    headerLabel.clickOnBurgerMenu();
    // act
    headerLabel.clickOnlogout();
    // assert
    loginPage.checkIfSignInButtonIsVissible();
  });

  it("Verify text on headerLabel", () => {
    headerLabel.verifyTextOnHeaderLabel();
  });
});
