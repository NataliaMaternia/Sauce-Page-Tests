const selectors = {
  productsElement: ".title",
  inventoryItemName: ".inventory_item_name",
  addOrRemovebutton: ".inventory_item_description button",
  productSortContainer: ".product_sort_container",
  shoppingCart: ".shopping_cart_link",
};

class MainPage {
  verifyIfProductsElementIsVisible() {
    cy.get(selectors.productsElement)
      .should("exist")
      .and("have.text", "Products");
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

  sortByNameAtoZ() {
    cy.get(selectors.productSortContainer).select("Name (A to Z)"),
      cy.get(selectors.productSortContainer).should("have.value", "az");
  }

  sortByNameZtoA() {
    cy.get(selectors.productSortContainer).select("Name (Z to A)"),
      cy.get(selectors.productSortContainer).should("have.value", "za");
  }

  sortByPriceLowToHigh() {
    cy.get(selectors.productSortContainer).select("Price (low to high)"),
      cy.get(selectors.productSortContainer).should("have.value", "lohi");
  }

  sortByPriceHighToLow() {
    cy.get(selectors.productSortContainer).select("Price (high to low)"),
      cy.get(selectors.productSortContainer).should("have.value", "hilo");
  }

  clickOnshoppingcart() {
    cy.get(selectors.shoppingCart).click();
  }

  pathname() {
    cy.location("pathname").should("equal", "/inventory.html");
  }
}

export default MainPage;
