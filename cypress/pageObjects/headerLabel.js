const selectors = {
  burgerMenu: "#react-burger-menu-btn",
  logout: "#logout_sidebar_link",
  resetAppState: "#reset_sidebar_link",
  headerLabelText: ".app_logo",

};

class HeaderLabel {
  clickOnlogout() {
    cy.get(selectors.burgerMenu).click();
    cy.get(selectors.logout).click();
  }

  clickOnResetAppState() {
    cy.get(selectors.burgerMenu).click();
    cy.get(selectors.resetAppState).click();
  }

  verifyTextOnHeaderLabel() {
    cy.get(selectors.headerLabelText).should("exist").contains("Swag Labs");
    
  }


}
export default HeaderLabel;
