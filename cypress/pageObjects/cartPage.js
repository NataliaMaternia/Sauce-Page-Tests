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

  verifyPathname() {
    cy.location("pathname").should("equal", "/cart.html");
  }
}
export default CartPage;
