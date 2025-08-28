describe('Order Page Tests', () => {

    it('Form alanları görünür ve doldurulabiliyor, sipariş gönderilebiliyor', () => {
        cy.visit('http://localhost:5173/orderpage');

        // Boyut seç
        cy.get('input[type="radio"][value="Orta"]').check();

        // Hamur seç
        cy.get('select[name="hamur"]').select('ince');

        // Malzemelerden 4 tane seç
        cy.get('input[type="checkbox"][value="Mozzarella"]').check();
        cy.get('input[type="checkbox"][value="Sucuk"]').check();
        cy.get('input[type="checkbox"][value="Soğan"]').check();
        cy.get('input[type="checkbox"][value="Biber"]').check();

        // İsim gir
        cy.get('input[name="isim"]').type('ibram');

        // Adet inputu varsa +1 ekle
        cy.get('input[name="adet"]').clear().type('2');

        // Sipariş notu
        cy.get('textarea[name="not"]').type('Test sipariş notu');

        // Sipariş Ver butonuna tıkla
        cy.get('button.siparis-buton').click();

        // Başarı toastunu kontrol et
        cy.contains('TEBRİKLER!').should('be.visible');

        // Yönlendirme kontrolü
        cy.url().should('include', '/SuccessPage');
    });

    it('Boyut seçmeden ilerlendiğinde hata mesajı gösteriyor mu?', () => {
        cy.visit('http://localhost:5173/orderpage');

        cy.get('select[name="hamur"]').select('Kalın');
        cy.get('input[type="checkbox"][value="Mozzarella"]').check();
        cy.get('input[type="checkbox"][value="Sucuk"]').check();
        cy.get('input[name="isim"]').type('ibram');

        // Boyut seçmeden Sipariş Ver butonuna tıkla
        cy.get('button.siparis-buton').click();

        // Hata mesajını kontrol et
        cy.contains('Boyut Seçmek Zorunlu!').should('be.visible');

        // URL değişmemeli, hala aynı sayfada olmalı
        cy.url().should('include', '/orderpage');


    })

    it('10 dan fazla malzeme seçilmek istenildiğinde hata mesajı gözüküyor mu?', () => {
        cy.visit('http://localhost:5173/orderpage');

        cy.get('select[name="hamur"]').select('Kalın');
        cy.get('input[type="radio"][value="Orta"]').check();
        cy.get('input[type="checkbox"][value="Mozzarella"]').check();
        cy.get('input[type="checkbox"][value="Biber"]').check();
        cy.get('input[type="checkbox"][value="Domates"]').check();
        cy.get('input[type="checkbox"][value="Kapari"]').check();
        cy.get('input[type="checkbox"][value="Rokfor"]').check();
        cy.get('input[type="checkbox"][value="Sucuk"]').check();
        cy.get('input[type="checkbox"][value="Soğan"]').check();
        cy.get('input[type="checkbox"][value="Jambon"]').check();
        cy.get('input[type="checkbox"][value="Sosis"]').check();
        cy.get('input[type="checkbox"][value="Mısır"]').check();
        cy.get('input[type="checkbox"][value="Tavuk"]').check();
        cy.get('input[name="isim"]').type('ibram');

        // Boyut seçmeden Sipariş Ver butonuna tıkla
        cy.get('button.siparis-buton').click();

        // Hata mesajını kontrol et
        cy.contains('En fazla 10 malzeme seçebilirsiniz').should('be.visible');

        // URL değişmemeli, hala aynı sayfada olmalı
        cy.url().should('include', '/orderpage');


    })


});