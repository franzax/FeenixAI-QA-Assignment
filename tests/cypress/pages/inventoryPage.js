
class inventoryPage {


    elements ={
        shoppingCartBtn : () => cy.get('#shopping_cart_container'),
        filterBtn : () => cy.get('.product_sort_container'),

        burgerBtn : () => cy.get('.bm-burger-button'),
        // -- Inside BurgerBtn: 
        logoutBtn : () => cy.get('#logout_sidebar_link'),
        allItemsBtn : () => cy.get('#bm-item-list'),
        resetStoreBtn : () => cy.get('#reset_sidebar_link'),

        addToCartBtn : () => cy.get('#add-to-cart'),
        backToProducts : () => cy.get('#back-to-products'),
        itemDescription : () => cy.get('.inventory_details_desc_container'),
        itemImage : () => cy.get('.inventory_details_img_container')
    }

    userLogOut(){
        this.elements.burgerBtn().click();
        this.elements.logoutBtn().click();
    }

    verifyUserLoginSuccess(){
        this.elements.shoppingCartBtn();
    }

    addItemToChart(){
        let itemnumber = Math.floor(Math.random() * (5 - 0)) + 0;
        this.selectItem(itemnumber).click();
        this.elements.addToCartBtn().click();
        this.elements.backToProducts().click();
    }

    viewItemDescription(){
        let itemnumber = Math.floor(Math.random() * (5 - 0)) + 0;
        this.selectItem(itemnumber).click();
    }

    confirmItemDescriptionIsDisplayed(){
        this.elements.itemDescription().should('exist');
        this.elements.itemImage().should('exist');
    }

    selectItem(number){
        return cy.get('#item_' + number + '_title_link');
    }

    clickOnShoppingCartButton(){
        this.elements.shoppingCartBtn().click();
    }

}

module.exports = new inventoryPage();