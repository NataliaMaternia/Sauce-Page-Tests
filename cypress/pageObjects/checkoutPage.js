const selectors = {
  firstName: "#first-name",
  lastName: "#last-name",
  postalCode: "#postal-code",
  continueButton: "#continue",
  cancelButton: "#cancel",
  finishButton: "#finish",
};

class CheckoutPage {
  fillUserInformation() {
    cy.get(selectors.firstName).type("Jan");
    cy.get(selectors.lastName).type("Kowalski");
    cy.get(selectors.postalCode).type("50-040 Wrocław");
  }

  verifyIfcheckoutIsVisible() {
    cy.get(".title")
    .should("exist")
    .and("have.text", "Checkout: Your Information");
}

  clickOnContinueButton() {
    cy.get(selectors.continueButton).click();
  }

  clickOnCancelButton() {
    cy.get(selectors.cancelButton).click();
  }
  pathnameCheckoutYourInformation() {
    cy.location("pathname").should("equal", "/checkout-step-one.html");
  }

}
export default CheckoutPage;
