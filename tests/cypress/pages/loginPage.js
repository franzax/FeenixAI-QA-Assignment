
class loginPage {


    elements ={
        username : () => cy.get('#user-name'),
        password : () => cy.get('#password'),
        loginBtn : () => cy.get('#login-button'),
        errorMsg : () => cy.get('h3[data-test="error"]')
    }

    clickOnLoginButton(){
        this.elements.loginBtn().click();
    }

    insertUser(username){
        this.elements.username().type(username);
    }

    insertPassword(){
        this.elements.password().type("secret_sauce");
    }

    readErrorMsg(expectedError){
        cy.on(this.elements.errorMsg(), (str) => {
            expect(str.toString()).to.contain(expectedError);
        })
    }


}

module.exports = new loginPage();