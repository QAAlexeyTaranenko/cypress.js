describe('ПРОВЕРКА ПОКУПКИ НОВОГО АВАТАРА', function () {
  it('ТЕСТ ПОКУПКИ НОВОГО АВАТАРА', function () {

    cy.visit('https://pokemonbattle.ru/'); // Открыл сайт
    cy.get('#k_email').type('USER_LOGIN'); // Ввел верный логин
    cy.get('#k_password').type('USER_PASSWORD'); // Ввел верный пароль
    cy.get('.MuiButton-root').should('be.visible'); // Кнопка войти видна пользователю
    cy.get('.MuiButton-root').click(); // Нажал кнопку войти

    cy.get('.header_card_trainer').should('be.visible'); // Кнопка тренера видна пользователю
    cy.get('.header_card_trainer').click(); // Нажал кнопку тренера
    cy.get('[data-qa="shop"]').should('be.visible'); // Кнопка смена аватара видна пользователю
    cy.get('[data-qa="shop"]').click(); // Нажал кнопку смена аватара
    cy.get('.available > button').first().click(); // Нажал купить первого доступного аватара

    cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111111111111111'); // Ввел номер карты
    cy.get(':nth-child(1) > .style_1_base_input').type('0526'); // Ввел срок карты
    cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // Ввел cvv
    cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('GERMAN DOLNIKOV'); // Ввел имя
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').should('be.visible'); // Кнопка оплатить видна пользователю
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажал кнопку оплатить
    cy.get('.style_1_base_input').type('56456'); // Ввел правильный пароль от смс-ки
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажал кнопку оплатить

    cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // Проверяю текст после покупки
    cy.get('.payment_status_top_title').should('be.visible'); // Сообщение об успешной покупке видно пользователю
    cy.get('.style_1_base_link_blue').should('be.visible'); // Кнопка Вернуться в магазин видна пользователю
    cy.get('.style_1_base_link_blue').click(); // Кнопка вернуться в магазин активна и работает корректно

  })
})
