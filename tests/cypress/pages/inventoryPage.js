
class inventoryPage {


    elements ={
        shoppingCartBtn : () => cy.get('#shopping_cart_container'),
        filterBtn : () => cy.get('.product_sort_container'),

        burgerBtn : () => cy.get('.bm-burger-button'),
        // -- Inside BurgerBtn: 
        logoutBtn : () => cy.get('#logout_sidebar_link'),
        allItemsBtn : () => cy.get('#bm-item-list'),
        resetStoreBtn : () => cy.get('#reset_sidebar_link'),
    }

    userLogOut(){
        this.elements.burgerBtn().click();
        this.elements.logoutBtn().click();
    }


}

module.exports = new inventoryPage();