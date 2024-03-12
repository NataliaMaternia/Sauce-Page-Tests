const selectors = {
  productElement: ".title",
  inventoryItemName: ".inventory_item_name",
  backButton: "#back-to-products",
};

class MainPage {
  verifyIfProductElementIsDisplayed() {
    cy.get(selectors.productElement).should("be.visible");
  }

  clickOnProductAndBack() {
    cy.get(selectors.inventoryItemName)
      .should("contain", "Sauce Labs Backpack");
    cy.get("#item_4_title_link").click();
    cy.get(selectors.backButton).click();
     }

     addProductToCart() {
      cy.get(selectors.inventoryItemName)
      .should("contain", "Sauce Labs Backpack");
      cy.get("#add-to-cart-sauce-labs-backpack").click();
      
      
     }
}

export default MainPage;
