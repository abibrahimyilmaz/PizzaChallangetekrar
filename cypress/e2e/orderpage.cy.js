// cypress/e2e/orderPage.cy.js

describe('OrderPage Form Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/OrderPage'); // OrderPage route'unu açıyoruz
    });

    it('Pizza siparişi oluşturma', () => {
        // Boyut seç (örneğin Large L)
        cy.get('input[type="radio"][value="L"]').check({ force: true });

        // Hamur seç
        cy.get('select.hamurselect').select('İnce');

        // En az 4 malzeme seç
        cy.get('input[type="checkbox"]').eq(0).check({ force: true }); // Mozzarella
        cy.get('input[type="checkbox"]').eq(1).check({ force: true }); // Sucuk
        cy.get('input[type="checkbox"]').eq(2).check({ force: true }); // Mantar
        cy.get('input[type="checkbox"]').eq(3).check({ force: true }); // Biber

        // İsim gir
        cy.get('input[name="isim"]').type('İbrahim Yılmaz');

        // Adet varsayılan 1 geliyor, değiştirmek istersen
        cy.get('input[name="adet"]').clear().type('2');

        // Sipariş ver butonuna tıkla
        cy.get('button.siparis-buton').click();

        // SuccessPage'e yönlendirme kontrolü
        cy.url().should('include', '/SuccessPage');
    });

    it('Gerekleri yerine getirmediğinde hata mesajları gözüküyor mu', () => {
        // Boyut seç (örneğin Large L)
        cy.get('input[type="radio"][value="L"]').check({ force: true });

        // Hamur seç
        cy.get('select.hamurselect').select('İnce');

        // En az 4 malzeme seç
        cy.get('input[type="checkbox"]').eq(0).check({ force: true }); // Mozzarella
        cy.get('input[type="checkbox"]').eq(1).check({ force: true }); // Sucuk
        cy.get('input[type="checkbox"]').eq(2).check({ force: true }); // Mantar
        cy.get('input[type="checkbox"]').eq(3).check({ force: true }); // Biber
        cy.get('input[type="checkbox"]').eq(4).check({ force: true });
        cy.get('input[type="checkbox"]').eq(5).check({ force: true });
        cy.get('input[type="checkbox"]').eq(6).check({ force: true });
        cy.get('input[type="checkbox"]').eq(7).check({ force: true });
        cy.get('input[type="checkbox"]').eq(8).check({ force: true });
        cy.get('input[type="checkbox"]').eq(9).check({ force: true });
        cy.get('input[type="checkbox"]').eq(10).check({ force: true });

        // İsim gir
        cy.get('input[name="isim"]').type('İb');





        cy.contains('En fazla 10 malzeme seçebilirsiniz').should('be.visible');
        cy.contains('İsim en az 3 karakter olmalı').should('be.visible');


    });

    beforeEach(() => {
        // API çağrısını yakala
        cy.intercept('POST', 'https://reqres.in/api/pizza').as('pizzaPost');
        cy.visit('http://localhost:5173/OrderPage'); // Senin OrderPage route'un
    });

    it('Sipariş başarıyla veriliyor', () => {
        // Boyut seç
        cy.get('input[type="radio"][value="L"]').check({ force: true });

        // Hamur seç
        cy.get('select.hamurselect').select('İnce');

        // En az 4 malzeme seç
        cy.get('input[type="checkbox"]').eq(0).check({ force: true });
        cy.get('input[type="checkbox"]').eq(1).check({ force: true });
        cy.get('input[type="checkbox"]').eq(2).check({ force: true });
        cy.get('input[type="checkbox"]').eq(3).check({ force: true });

        // İsim gir
        cy.get('input[name="isim"]').type('İbrahim Yılmaz');

        // Sipariş ver
        cy.get('button.siparis-buton').click();

        // API çağrısını bekle ve payload kontrol et
        cy.wait('@pizzaPost').then((interception) => {
            expect(interception.request.body).to.have.property('isim', 'İbrahim Yılmaz');
            expect(interception.request.body).to.have.property('boyut', 'L');
            cy.log('Payload:', interception.request.body); // Cypress loguna yazdırır
            console.log('Payload:', interception.request.body); // Tarayıcı console’una yazdırır
        });

        // SuccessPage’e yönlendirme kontrolü
        cy.url().should('include', '/SuccessPage');
    });
});
