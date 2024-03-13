const selectors = {
  productElement: ".title",
  inventoryItemName: ".inventory_item_name",
  shoppingCart: ".shopping_cart_badge",
};

class MainPage {
  verifyIfProductElementIsDisplayed() {
    cy.get(selectors.productElement).should("be.visible");
  }

  clickOnProduct() {
    cy.get(selectors.inventoryItemName).should(
      "contain",
      "Sauce Labs Backpack"
    );
    cy.get("#item_4_title_link").click();
  }

  addProductToCart() {
    cy.get(selectors.inventoryItemName).should(
      "contain",
      "Sauce Labs Backpack"
    );
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get(selectors.shoppingCart).should("be.visible");
    cy.get(selectors.shoppingCart)
      .invoke("text")
      .then(parseInt)
      .should("be.greaterThan", 0);
  }
}

export default MainPage;
