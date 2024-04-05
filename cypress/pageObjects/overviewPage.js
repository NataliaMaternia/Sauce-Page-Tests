const selectors = {
  cancelButton: "#cancel",
  finishButton: "#finish",
};

class OverviewPage {
  
  clickOnCancelButton() {
    cy.get(selectors.cancelButton).click();
  }

  clickOnFinishButton() {
    cy.get(selectors.finishButton).click();
  }

  pathnameOverwiewPage() {
    cy.location("pathname").should("equal", "/checkout-step-two.html");
  }

}
export default OverviewPage;
