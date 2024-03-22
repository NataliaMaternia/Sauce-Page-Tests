const selectors = {
  burgerMenu: "#react-burger-menu-btn",
  logout: "#logout_sidebar_link",
  resetAppState: "#reset_sidebar_link",
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
}
export default HeaderLabel;
