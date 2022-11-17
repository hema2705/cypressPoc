/// <reference types="cypress" />
import HomePage from "../../support/PageObjects/HomePage";

describe('Demo qa firs test -login',() =>{
    const homePage=new HomePage();
    beforeEach(()=>{
        cy.log('Before hook executing')
    })
    afterEach(()=>{
        cy.log('After hook executing')
    })

    before(()=>{
        cy.log('Importing the test data')
        cy.fixture('loginDate').then(function(data){
            this.data =data;
        })
        cy.fixture('example').then(function(data1){
            this.data1 =data1;
        })
    })
    it('Verif the login-posivte case',function (){
    //Object Creation for PageObject Page Class and assigning it to a constant variable
    // const homePage=new HomePage();
    cy.visit('my-account/')
    homePage.getEmail().type(this.data1.email);
    homePage.getUserName().type(this.data.userName);
    homePage.getPassword().type(this.data.password)

    })

    it('Verif the login-negetive case',() =>{
        //Object Creation for PageObject Page Class and assigning it to a constant variable
        // const homePage=new HomePage();
        cy.visit('my-account/')
        homePage.getEmail().type('abc@gmail.com');
        homePage.getUserName().type('testuser');
        homePage.getPassword().type('Test@1234')
    
        })

})