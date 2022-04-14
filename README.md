# Чат

Тестовое задание для компании Лаборатория Наносемантик

## Запуск

```shell
git clone https://github.com/Ciwinforjsstuding/test-nano-lab.git
```

```shell
cd test-nano-lab
```

```shell
npm i && npm run start
```

## Коротко об стеке:

-   @redux-toolkit
-   scss
-   webpack5
-   TypeScript
-   React

## Структура проекта:

-   components: 4 папки, самое интересное лежит в Dialog, Chat - по факту это практически весь наш UI который мы видим
    -   NavBar: боковое меню с выбором чатов
-   hooks: лежат кастомные хуки
    -useAction (что ты не получать каждый раз dispatch)
    -   useTypedSelector (что не типизировать каждый раз Selector)
-   store: наше хранилище в котором описанна вся логика
    -   slice: лежит sliceDialog и файл с описанием типов, который связанны с ним
    -   index: иницализация stora и подписка на изменения для localStorage
    -   utils.ts: разного рода функции которые облегчают мне жизнь, к примеру есть функция для получения url к боту
-   index.scss: сброс отступов и общие правила, так же есть css variable для цветов

## Немного про UX:

-   кнопка сброса чата появляется при наведении на боковой item в navbare
-   кнопка отправки появляется когда поле inputa не заполненно (так же если фокус на inpute, при нажатии на Enter вы отправите сообщение боту)

Если есть какие-то вопросы или вы хотите что бы я выложил на тестовый хостинг для демонстрации решения, пишите в тг https://t.me/ciwin_r
