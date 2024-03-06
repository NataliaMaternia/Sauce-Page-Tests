const selectors = {
    products: '.title',
    }

class MainPage {

        verifyIfBasicElementsAreDisplayed(){
            cy.get(selectors.products).should('be.visible');
        }
    
    


}
export default MainPage