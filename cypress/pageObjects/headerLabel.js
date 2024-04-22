const selectors = {
  burgerMenu: "#react-burger-menu-btn",
  logout: "#logout_sidebar_link",
  resetAppState: "#reset_sidebar_link",
  headerLabelText: ".app_logo",
  shoppingCart: "#shopping_cart_container",
  UnfoldedBurgerMenu: ".bm-item-list",
  
};

class HeaderLabel {

  clickOnBurgerMenu() {
    cy.get(selectors.burgerMenu).click();
  }

  checkIfBurgerMenuIsUnfolded() {
    cy.get(selectors.UnfoldedBurgerMenu).click();
  }

  clickOnlogout() {
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

  verifyTextOnHeaderLabel() {
    cy.get(selectors.headerLabelText).should("exist").contains("Swag Labs");
  }
}
export default HeaderLabel;
