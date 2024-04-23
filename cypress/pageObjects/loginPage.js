const selectors = {
  loginTextbox: "#user-name",
  passwordTextbox: "#password",
  signInButton: "#login-button",
};

class LoginPage {

  openPageAndCorrectlyLogin() {
    this.openPage();
    cy.fixture("credentials").then((loginData) => {
      this.fillCredentialsData(loginData.loginUser, loginData.passwordUser);
    });
    this.clickSignInButton();
  }

  openPage() {
    cy.visit("https://www.saucedemo.com/", {
      onBeforeLoad(win) {
        delete win.navigator.__proto__.serviceWorker;
      },
    });
  }

  fillCredentialsData(usernameData, passwordData) {
    cy.get(selectors.loginTextbox).type(usernameData);
    cy.get(selectors.passwordTextbox).type(passwordData);
  }

  clickSignInButton() {
    cy.get(selectors.signInButton).click();
  }
  
  verifyIfBasicElementsAreDisplayed() {
    cy.get(selectors.loginTextbox).should("be.visible");
    cy.get(selectors.passwordTextbox).should("be.visible");
    cy.get(selectors.signInButton).should("be.visible");
  }

  verifyBadCredentialsAlert() {
    cy.get(".error-message-container")
      .should("exist")
      .and("contain", "Username and password do not match");
  }

  checkIfSignInButtonIsVissible() {
    cy.get(selectors.signInButton).should("be.visible");
  }
}
export default LoginPage;
