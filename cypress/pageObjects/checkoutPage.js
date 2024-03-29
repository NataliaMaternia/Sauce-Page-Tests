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
    cy.get(selectors.continueButton).click();
  }

  clickOnCancelButton() {
    cy.get(selectors.cancelButton).click();
  }

  clickOnFinishButton() {
    cy.get(selectors.finishButton).click();
  }

  pathnameCheckoutYourInformation() {
    cy.location("pathname").should("equal", "/checkout-step-one.html");
  }

  pathnameCheckoutOverwiew() {
    cy.location("pathname").should("equal", "/checkout-step-two.html");
  }

  pathnameCheckoutComplete() {
    cy.location("pathname").should("equal", "/checkout-complete.html");
  }
}
export default CheckoutPage;
