const selectors = {
    backButton: "#back-to-products"
  };

class ProductPage {


    backButton() {
        cy.get(selectors.backButton).click();
    }
}
export default ProductPage;