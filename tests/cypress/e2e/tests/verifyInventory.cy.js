import inventoryPage from "../../pages/inventoryPage";
import loginPage from "../../pages/loginPage"
import shoppingCartPage from "../../pages/shoppingCartPage";

// -- TC#11
it('Add one element to the Cart and Verify that is added', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.fastLogin("standard_user");
    inventoryPage.verifyUserLoginSuccess();
    inventoryPage.addItemToChart();
    inventoryPage.clickOnShoppingCartButton();
    shoppingCartPage.verifyElementIsOnCart();
})

// -- TC#12
it('Add two elements to the Cart and Verify that were added', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.fastLogin("standard_user");
    inventoryPage.verifyUserLoginSuccess();
    inventoryPage.addItemToChart();
    inventoryPage.addItemToChart();
    inventoryPage.clickOnShoppingCartButton();
    shoppingCartPage.verifyFewElementsOnCart(2);
})

// -- TC#17
it('Verify that item description page is displayed successfully', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.fastLogin("standard_user");
    inventoryPage.verifyUserLoginSuccess();
    inventoryPage.viewItemDescription();
    inventoryPage.confirmItemDescriptionIsDisplayed();
})

