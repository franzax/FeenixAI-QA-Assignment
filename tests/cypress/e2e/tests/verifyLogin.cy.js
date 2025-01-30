
import inventoryPage from "../../pages/inventoryPage";
import loginPage from "../../pages/loginPage"

// -- TC#1
it('Standard User should be able to Login', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("standard_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    inventoryPage.verifyUserLoginSuccess();
})

// -- TC#2
it('Locked Out User try to log in and should get an Error message', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("locked_out_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    loginPage.readErrorMsg("Epic sadface: Sorry, this user has been locked out.");
})

// -- TC#3
it('Problem User should be able to Login', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("problem_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    inventoryPage.verifyUserLoginSuccess();
})

// -- TC#4
it('Performance Glitch User should be able to Login', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("performance_glitch_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    inventoryPage.verifyUserLoginSuccess();
})

// -- TC#5
it('Error User should be able to Login', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("error_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    inventoryPage.verifyUserLoginSuccess();
})

// -- TC#6
it('Visual User should be able to Login', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("visual_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    inventoryPage.verifyUserLoginSuccess();
})

// -- TC#7
it('User try to log in with no username credentials and should get an Error message', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.clickOnLoginButton();
    loginPage.readErrorMsg("Epic sadface: Username is required");
})

// -- TC#8
it('Standard User try to log in with no password credentials and should get an Error message', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("standard_user");
    loginPage.clickOnLoginButton();
    loginPage.readErrorMsg("Epic sadface: Password is required");
})

// -- TC#9
it('Standard User try to log in with incorrect password credentials and should get an Error message', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("standard_user");
    loginPage.insertIncorrectPassword();
    loginPage.clickOnLoginButton();
    loginPage.readErrorMsg("Epic sadface: Username and password do not match any user in this service");
})

// -- TC#10
it('Standard User should be able to Logout', () =>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.insertUser("standard_user");
    loginPage.insertPassword();
    loginPage.clickOnLoginButton();
    inventoryPage.verifyUserLoginSuccess();
    inventoryPage.userLogOut();
})