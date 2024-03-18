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

}
export default CartPage;
