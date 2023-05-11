describe("Pizza Test", function () {
    this.beforeEach(() => {
        // S7G4 Ders Notlarım:
        // boş bir visit veriyorum ve beforeEach içerisinde tüm testlerde çalışmasını sağlıyorum:
        cy.visit('/')
    })

    it("Anasayfadan tıklanan link ile gidilen sayfada Position Absolute Acı Pizza adında text var mı?", function () {
        cy.get("[data-test-id=main-page-link]").click();
        cy.contains("Position Absolute Acı Pizza");
    })

    it("Anasayfadan tıklanan link ile gidilen sayfanın url'si /pizza mı?", function () {
        cy.get("[data-test-id=main-page-link]").click();
        cy.url().should("include", "pizza");
    })

    it("Sipariş formunda isim bölümünde 2 karakterden az olamaz hata mesajı geliyor mu?", function () {
        cy.get("[data-test-id=main-page-link]").click();
        cy.get("#name-input").type("ay");
        cy.contains("İsim en az 2 karakter olmalıdır");
    })

    it("Pizza sayısını azaltıp arttırabiliyor muyum ben?", function () {
        cy.get("[data-test-id=main-page-link]").click();
        // önce boyut seçmemiz gerek:
        cy.get('[type="radio"]').check()
        cy.get("#increase").click();
        cy.get("[data-test-id=numberofpizza]").contains("2")
        cy.get("#decrease").click();
        cy.get("[data-test-id=numberofpizza]").contains("1")
    })

    it("Hadi backend'tekilere sıcak bir pizza gönderelim!", function () {
        cy.get("[data-test-id=main-page-link]").click();
        cy.get('[type="radio"]').check()
        cy.get('#size-dropdown').select("İnce")
        cy.get("#name-input").type("ismim adresim bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla");
        cy.get("#special-text").type("hızlı gelsin! çok açım! bekleyemiyorum lütfen çok hızlı getirin!");
        cy.get('[type="radio"]').check()
        cy.get("#increase").click();    
        cy.get("#button-order").click();
        
    })

});

