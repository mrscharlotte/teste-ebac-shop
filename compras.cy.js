const { faker } = require("@faker-js/faker");
/// <reference types = "cypress" />

describe('TESTE DE COMPRAS DE PRODUTO', () => {
    const email="joaovictor.correadelimaaa@gmail.com";
    const password="teste123";
    const endereço=faker.location.streetAddress();
    const cidade=faker.location.city();
    const cep="13466580";
    const telefone="19992810334"
    
    it('deve adicionar uma camiseta ao carrinho', () => {
        cy.adicionar(
            'http://lojaebac.ebaconline.art.br/product/josie-yoga-jacket/',
            'L',
            'Black'
        )
        cy.get('.woocommerce-message').should('be.visible')
    });
    it('deve aparecer uma mensagem de falta de estoque ao adicionar uma camisa', () => {
        cy.adicionar(
            'http://lojaebac.ebaconline.art.br/product/ariel-roll-sleeve-sweatshirt/',
            'XS',
            'Green'
        )
        cy.get('.stock').should('be.visible')
    });
    it('deve adicionar uma bermuda ao carrinho com sucesso', () => {
        cy.adicionar(
            'http://lojaebac.ebaconline.art.br/product/arcadio-gym-short/',
            '36',
            'Red'
        )
        cy.get('.woocommerce-message').should('be.visible')
    });
    it('deve adicionar uma camiseta regata ao carrinho com sucesso', () => {
        cy.adicionar(
            'http://lojaebac.ebaconline.art.br/product/ryker-lumatech-tee-v-neck/',
            'M',
            'Blue'
        )
        cy.get('.woocommerce-message').should('be.visible')
    });
    it('deve finalizar uma compra com sucesso', () => {
         cy.adicionar(    
        'http://lojaebac.ebaconline.art.br/product/josie-yoga-jacket/',
        'L',
        'Black',
        )
        cy.adicionar(    
        'http://lojaebac.ebaconline.art.br/product/arcadio-gym-short/',
        '36',
        'Red'
        )
        cy.adicionar(  
            'http://lojaebac.ebaconline.art.br/product/ryker-lumatech-tee-v-neck/',
            'M',
            'Blue'
        )
        cy.logincarrinho(email, password)
        cy.dadosdecompra(endereço,cidade,cep,telefone)
        cy.get('.page-title').should('be.visible')
    });
});