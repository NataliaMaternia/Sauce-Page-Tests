const selectors = {
  loginTextbox: "#user-name",
  passwordTextbox: "#password",
  signInButton: "#login-button",
};

class LoginPage {
  verifyIfBasicElementsAreDisplayed() {
    cy.visit("https://www.saucedemo.com/");
    cy.get(selectors.loginTextbox).should("be.visible");
    cy.get(selectors.passwordTextbox).should("be.visible");
    cy.get(selectors.signInButton).should("be.visible");
  }

  fillCredentialsData(usernameData, passwordData) {
    cy.visit("https://www.saucedemo.com/", {
      onBeforeLoad(win) {
        delete win.navigator.__proto__.serviceWorker;
      },
    });
    cy.get(selectors.loginTextbox).type(usernameData);
    cy.get(selectors.passwordTextbox).type(passwordData);
  }

  verifyBadCredentialsAlert() {
    cy.get(".error-message-container")
      .should("exist")
      .and("contain", "Username and password do not match");
  }

  clickSignInButton() {
    cy.get(selectors.signInButton).click();
  }
}
export default LoginPage;
