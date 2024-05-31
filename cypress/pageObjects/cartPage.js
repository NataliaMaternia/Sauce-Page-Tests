const selectors = {
  checkoutButton: "#checkout",
  continueShoppingButton: "#continue-shopping",

};

class CartPage {
  clickOnCheckoutButton() {
    cy.get(selectors.checkoutButton).click();
  }

  clickOnContinueShoppingButton() {
    cy.get(selectors.continueShoppingButton).click();
  }

  verifyIfYourCartElementIsVisible() {
    cy.get(".title")
      .should("exist")
      .and("have.text", "Your Cart")
  }

  verifyCartPathname() {
    cy.wa
    cy.location("pathname").should("equal", "/cart.html");
  }
}
export default CartPage;
