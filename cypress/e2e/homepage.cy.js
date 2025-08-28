describe('Homepage Tests', () => {
    it('Ana sayfa açılıyor ve "ANASAYFADAKİ YAZI " yazısı gözüküyor', () => {
        cy.visit('http://localhost:5173');
        cy.contains('KOD ACIKTIRIR'); // Sayfada beklediğin bir yazı
    });
});
it('"ACIKTIM" yazan buton var mı kontrol', () => {
    cy.visit('http://localhost:5173'); // projeni çalıştırdığın port
    cy.contains('button', 'ACIKTIM').should('be.visible');
});
it('"ACIKTIM" butonuna tıklayınca Sipariş sayfasına gidiyor mu?', () => {
    cy.visit('http://localhost:5173'); // Ana sayfanın URL'si

    // ACİKTIM butonuna tıkla
    cy.contains('button', 'ACIKTIM').click();

    // Yönlendikten sonra URL kontrolü
    cy.url().should('include', '/orderpage'); // OrderPage URL kısmını kontrol et

    // Sipariş sayfasında beklenen bir yazıyı kontrol et
    cy.contains('Sipariş Ver'); // örneğin formda "Sipariş Ver" butonu varsa
});

