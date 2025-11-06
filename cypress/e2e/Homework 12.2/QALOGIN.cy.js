describe('Проверка авторизации', function () {

   it('Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        
        cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
        cy.get('#pass').type('qa_one_love1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#forgotEmailButton').click(); // Нажал кнопку забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел имейл
        cy.get('#restoreEmailButton').click(); // Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка нужного текста
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Негативный кейс авторизации(пароль)', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        
        cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
        cy.get('#pass').type('qa_one_love111'); // Ввел НЕверный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверил нужный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })

    it('Негативный кейс авторизации(логин)', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        
        cy.get('#mail').type('german@dolnikoff.ru'); // Ввел НЕверный логин
        cy.get('#pass').type('qa_one_love1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверил нужный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })

    it('негативный кейс валидации(логин без @)', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        
        cy.get('#mail').type('germandolnikoff.ru'); // Ввел  логин логин без @
        cy.get('#pass').type('qa_one_love1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверил нужный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })

    it('Приведение к строчным буквам в логине)', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел логин GerMan@Dolnikov.ru
        cy.get('#pass').type('qa_one_love1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации виден текст (там баг)
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
      

    })

})

