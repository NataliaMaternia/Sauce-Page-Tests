const selectors = {
  firstName: "#first-name",
  lastName: "#last-name",
  postalCode: "#postal-code",
  continueButton: "#continue",
};

class CheckoutPage {
  fillUserInformation() {
    cy.get(selectors.firstName).type("Jan");
    cy.get(selectors.lastName).type("Kowalski");
    cy.get(selectors.postalCode).type("50-040 Wrocław");
    cy.get(selectors.continueButton).click();
  }
}
export default CheckoutPage;
