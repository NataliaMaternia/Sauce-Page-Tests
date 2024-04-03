const selectors = {
  productElement: ".title",
  inventoryItemName: ".inventory_item_name",
  addOrRemovebutton: ".inventory_item_description button",
};

class MainPage {
  verifyIfProductElementIsDisplayed() {
    cy.get(selectors.productElement).should("be.visible");
  }

  clickOnFirstProduct() {
    cy.get(selectors.inventoryItemName).eq(0).click();
  }

  addFirstProductToCart() {
    cy.get(selectors.addOrRemovebutton).eq(0).should("contain", "Add to cart");
    cy.get(selectors.addOrRemovebutton).eq(0).click();
  }

  removeFirstProductFromCart() {
    cy.get(selectors.addOrRemovebutton).eq(0).should("contain", "Remove");
    cy.get(selectors.addOrRemovebutton).eq(0).click();
  }

  clickOnshoppingcart() {
    cy.get(selectors.shoppingCart).click();
  }
  
  pathname() {
    cy.location("pathname").should("equal", "/inventory.html");
  }
}

export default MainPage;
