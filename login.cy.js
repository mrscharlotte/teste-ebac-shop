/// <reference types="cypress" /> 
const { faker } = require("@faker-js/faker");

describe('TESTE DE FUNCIONALIDADE - cadastro e login', () => {
    const email="joaovictor.correadelimaaa@gmail.com";
    const password="teste123";
    const firstname=faker.person.firstName();
    const lastname=faker.person.lastName();
    const displayname=faker.internet.displayName();
    
    it('deve fazer login com sucesso', () => {
        cy.login(email, password)
    });
    it('deve tentar fazer login com senha errada', () => {
        cy.login(email, 'teste1234')
        cy.get('.woocommerce-error').should('be.visible')
    });
    it('deve tentar fazer login com o email errado', () => {
        cy.login('joaocarlos@gmail.com', password)
        cy.get('.woocommerce-error').should('be.visible')
    });
    it('deve fazer cadastro com sucesso', () => {
        cy.cadastro(faker.internet.email(), faker.internet.password())
        cy.get('.page-title').should('be.visible')
    });
    it('deve completar cadastro com sucesso', () => {
        cy.login(email, password)
        cy.DadosDoCadastro( firstname, lastname,displayname)
        cy.get('.woocommerce-message').should('be.visible')
    });
    
});