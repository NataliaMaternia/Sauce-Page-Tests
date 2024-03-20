const selectors = {
  burgerMenu: "#react-burger-menu-btn",
  logoutButton: "#logout_sidebar_link"
};

class HeaderLabel {
  logout() {
    cy.get(selectors.burgerMenu).click();
    cy.get(selectors.logoutButton).click();
  }
}
export default HeaderLabel;
