class HomePage{

    getUserName(){
        return cy.get('#1reg_username');
    }
    getEmail(){
        return cy.get('#reg_email');
    }
    getPassword(){
        return cy.get('#reg_password');
    }
    getLoginUserName(){
        return cy.get('#ausername1');
    }
    getRegisterButton() {
        return cy.get('.woocommerce-Button');
    }
}
export default HomePage