const selectors = {
  backHomeButton: "#back-to-products",
  completeHeader:".complete-header",
};

class CompletePage {

  clickOnBackHomeButton() {
    cy.get(selectors.backHomeButton).click();
  }

  verifyIfOrderIsComplete() {
    cy.get(selectors.completeHeader).should('have.text', 'Thank you for your order!');

  }

  pathnameCompletePage() {
    cy.location("pathname").should("equal", "/checkout-complete.html");
  }
}
export default CompletePage;
