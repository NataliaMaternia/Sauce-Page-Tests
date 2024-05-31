const selectors = {
  backToProductsButton: "#back-to-products",
  shoppingCart: "#shopping_cart_container",
  addOrRemovebutton: ".inventory_details_desc_container button",
};

class ProductPage {
  addProductToCart() {
    cy.get(selectors.addOrRemovebutton).eq(0).should("contain", "Add to cart");
    cy.get(selectors.addOrRemovebutton).eq(0).click();
  }

  checkIfShoppingCartIsNotEmpty() {
    cy.get(selectors.shoppingCart)
      .invoke("text")
      .then(parseInt)
      .should("be.greaterThan", 0);
  }

  removeProductFromCart() {
    cy.get(selectors.addOrRemovebutton).should("contain", "Remove");
    cy.get(selectors.addOrRemovebutton).click();
  }
  checkIfShoppingCartIsEmpty() {
    cy.get(selectors.shoppingCart).invoke("text").should("be.empty");
  }

  clickOnBackToProductsButton() {
    cy.get(selectors.backToProductsButton).should(
      "have.text",
      "Back to products"
    );
    cy.get(selectors.backToProductsButton).click();
  }
}

export default ProductPage;
