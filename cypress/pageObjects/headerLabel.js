const selectors = {
  burgerMenu: "#react-burger-menu-btn",
  logout: "#logout_sidebar_link",
  resetAppState: "#reset_sidebar_link",
  headerLabelText: ".app_logo",
  shoppingCart: "#shopping_cart_container",
};

class HeaderLabel {
  clickOnlogout() {
    cy.get(selectors.burgerMenu).click();
    cy.get(selectors.logout).click();
  }

  checkIfShoppingCartIsGreaterThan0() {
    cy.get(selectors.shoppingCart)
      .invoke("text")
      .then(parseInt)
      .should("be.greaterThan", 0);
  }

  checkIfShoppingCartIsEmpty() {
    cy.get(selectors.shoppingCart).invoke("text").should("be.empty");
  }

  clickOnResetAppState() {
    cy.get(selectors.burgerMenu).click();
    cy.get(selectors.resetAppState).click();
  }

  verifyTextOnHeaderLabel() {
    cy.get(selectors.headerLabelText).should("exist").contains("Swag Labs");
  }
}
export default HeaderLabel;
