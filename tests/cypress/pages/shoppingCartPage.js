const { expect } = require("chai");

class shoppingCartPage {


    elements ={

        continueShoppingBtn : () => cy.get('#continue-shopping'),
        checkoutBtn : () => cy.get('#checkout'),

        //Checkout
        firstName: () => cy.get('#first-name'),
        lastName : () => cy.get('#last-name'),
        postalCode : () => cy.get('#postal-code'),
        continueBtn : () => cy.get('#continue'),
        finishBtn : () => cy.get('#finish')

    }

    verifyElementIsOnCart(){
        cy.get('.inventory_item_name').should('exist');
    }

    verifyFewElementsOnCart(number){
        cy.get('.inventory_item_name').should('have.length', number);
    }

    removeFirstElementOnCart(){
        cy.get('button:contains("Remove")').first().click();
    }

    clickOnCheckoutButton(){
        this.elements.checkoutBtn().click();
    }

    fillUptheForm(){
        this.elements.firstName().type("TestFirstname");
        this.elements.lastName().type("TestLastname");
        this.elements.postalCode().type("753324");
    }

    clickOnContinueButton(){
        this.elements.continueBtn().click();
    }

    clickOnFinishButton(){
        this.elements.finishBtn().click();
    }

    verifyOrderIsDispatched(){
        cy.get('h2:contains("Thank you for your order!")').should('exist');
    }


}

module.exports = new shoppingCartPage();