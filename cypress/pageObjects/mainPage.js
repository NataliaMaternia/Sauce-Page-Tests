const selectors = {
  productElement: ".title",
  inventoryItemName: ".inventory_item_name",
  shoppingCart: "#shopping_cart_container",
  addOrRemovebutton: ".inventory_item_description button",
};

class MainPage {
  verifyIfProductElementIsDisplayed() {
    cy.get(selectors.productElement).should("be.visible");
  }

  clickOnFirstProduct() {
    cy.get(selectors.inventoryItemName).first().click();
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

  removeFirstProductFromCart() {
    cy.get(selectors.addOrRemovebutton).first()
    .should('contain', 'Remove');
    cy.get(selectors.addOrRemovebutton).first().click();
    cy.get(selectors.shoppingCart)
      .invoke("text")
      .should("be.empty");
  }

   clickOnshoppingcart() {
  cy.get(selectors.shoppingCart).click();
  }

}

export default MainPage;
