
import inventoryPage from "../../pages/inventoryPage";
import loginPage from "../../pages/loginPage"


it('Standard User should be able to Login', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("standard_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    inventoryPage.userLogOut();
})

it('Locked Out User try to log in and should get an Error message', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("locked_out_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    loginPage.readErrorMsg("Epic sadface: Sorry, this user has been locked out.");
})

it('Problem User should be able to Login', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("problem_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    inventoryPage.userLogOut();
})

it('Performance Glitch User should be able to Login', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("performance_glitch_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    inventoryPage.userLogOut();
})

it('Error User should be able to Login', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("error_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    inventoryPage.userLogOut();
})

it('Visual User should be able to Login', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("visual_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    inventoryPage.userLogOut();
})

it('User try to log in with no username credentials and should get an Error message', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.clickOnLoginButton();
    loginPage.readErrorMsg("Epic sadface: Username is required");
})

it('Standard User try to log in with no password credentials and should get an Error message', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("standard_user");
    loginPage.clickOnLoginButton();
    loginPage.readErrorMsg("Epic sadface: Password is required");
})