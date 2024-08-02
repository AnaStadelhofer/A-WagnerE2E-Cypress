/// <reference types="cypress"/>

describe("Sync", () => {
    
    beforeEach(() => { 
    });

    it("Verificando o token", () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: 'a@a',
                redirecionar: false,
                senha: 'a'
            }
        }).its('body.token').should('not.be.empty')

        // .then(rest => console.log(rest))
   
    })

    it("Verificando o status", () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: 'a@a',
                redirecionar: false,
                senha: 'a'
            }
        }).then((response) => {
            expect(response.status).to.eq(200); // Verifica o status HTTP
            // Caso você precise verificar mais detalhes do corpo da resposta
            // expect(response.body).to.have.property('status', '200');
        });

        // .then(rest => console.log(rest))
   
    })

})