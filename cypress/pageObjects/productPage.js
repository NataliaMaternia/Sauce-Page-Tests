const selectors = {
  backButton: "#back-to-products",
  shoppingCart: "#shopping_cart_container",
  addOrRemovebutton: ".inventory_details_desc_container button",
  
};

class ProductPage {
  backButton() {
    cy.get(selectors.backButton).click();
  }

  addFirstProductToCart() {
    cy.get(selectors.addOrRemovebutton).first()
    .should('contain', 'Add to cart');
    cy.get(selectors.addOrRemovebutton).first().click();
    cy.get(selectors.shoppingCart)
      .invoke("text")
      .then(parseInt)
      .should("be.greaterThan", 0);
  }

  removeProductFromCart() {
    cy.get(selectors.addOrRemovebutton)
    .should('contain', 'Remove');
    cy.get(selectors.addOrRemovebutton).click();
    cy.get(selectors.shoppingCart)
      .invoke("text")
      .should("be.empty");
  }
};

export default ProductPage;
