import inventoryPage from "../../pages/inventoryPage";
import loginPage from "../../pages/loginPage"
import shoppingCartPage from "../../pages/shoppingCartPage";

// -- TC#18
it('Remove an element from the Cart and Verify that is removed', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.fastLogin("standard_user");
    inventoryPage.verifyUserLoginSuccess();
    inventoryPage.addItemToChart();
    inventoryPage.clickOnShoppingCartButton();
    shoppingCartPage.verifyElementIsOnCart();
    shoppingCartPage.removeFirstElementOnCart();
    shoppingCartPage.verifyFewElementsOnCart(0);
})

// -- TC#19
it('Add an Item to the Shopping Cart and Checkout', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.fastLogin("standard_user");
    inventoryPage.verifyUserLoginSuccess();
    inventoryPage.addItemToChart();
    inventoryPage.clickOnShoppingCartButton();
    shoppingCartPage.verifyElementIsOnCart();
    shoppingCartPage.clickOnCheckoutButton();
    shoppingCartPage.fillUptheForm();
    shoppingCartPage.clickOnContinueButton();
    shoppingCartPage.verifyElementIsOnCart();
    shoppingCartPage.clickOnFinishButton();
    shoppingCartPage.verifyOrderIsDispatched();
})