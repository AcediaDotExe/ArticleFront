
# Frontend for Article web service

Article web service - это веб-сервис, который позволяет пользователям создавать и редактировать статьи,
а также комментировать их. Все статьи и комментарии хранятся в базе данных. Сервис предоставляет REST API,
с помощью которого можно получить список статей, создать новую статью, получить/обновить/удалить статью по её ID,
получить список комментариев к статье, создать комментарий к статье, получить/обновить/удалить комментарий по его ID.

## Требования к реализации
1. Все API должны быть документированы с помощью Swagger.
2. Все API должны быть доступны по HTTP.

## Stack for backend
1. Kotlin (Его знает хорошо только один человек, но он знает)
2. Spring Boot (Стандарт де-факто на рынке)
3. Spring Data JPA (Позволяет работать с БД)
4. PostgreSQL (Стандарт де-факто на рынке(либо MongoDB, но у нас нет необходимости в no-SQL DB))
5. Maven (Для управления зависимостями)
6. Docker (Для разворачивания в контейнере)
7. Swagger (Для документации API)
8. JUnit (Для тестирования)
9. Mockito (Для тестирования)
10. Flyway (Для миграций БД)
11. IntelliJ IDEA (Стандарт де-факто на рынке)
12. GitHub (Для хранения кода)
13. GitHub Actions (Для деплоя)
14. Postman (Для тестирования API)

## Структура backend
1. Article controller - отвечает за управление статьями
2. Article service - отвечает за бизнес-логику статей
3. Auth controller - отвечает за авторизацию
4. Auth service - отвечает за бизнес-логику авторизации
5. User controller - отвечает за управление пользователями
6. User service - отвечает за бизнес-логику пользователей
7. Article analytics controller - отвечает за аналитику статей
8. Article analytics service - отвечает за бизнес-логику аналитики статей

## Stack for frontend
1. React (Стандарт де-факто на рынке)
2. Redux (Самаая популярная библиотека для управления состоянием в связке с React)
3. TypeScript (Типизированный JavaScript)
4. Material UI (Библиотека компонентов для React)
5. Axios (Библиотека для работы с HTTP запросами)
6. Jest (Библиотека для тестирования)
7. Webpack (Сборщик проекта)
8. Babel (Транспайлер из JSX в JS)
9. ESLint (Линтер для JS)
10. Prettier (Форматтер для JS)
11. GitHub (Для хранения кода)
12. GitHub Actions (Для деплоя)



## Структура frontend
1. Точка входа - index.js
2. Основной компонент React - App.js
3. Компоненты:
    1. Компонент для работы с пользователями
        1. Компонент для авторизации - AuthComponent
    2. Компонент для работы со статьями
        1. Компонент для отображения списка статей - ArticleListComponent
        2. Компонент для отображения одной статьи - ArticleComponent
            1. Сбор статистики по статье - StatisticAggregatorComponent
        3. Компонент для редактирования статьи - EditArticleComponent
            1. Компонент для работы с изображениями - ImageComponent
        4. Компонент для реакций к статье - ReactionComponent
    3. Компоненты для работы с аналитикой
        1. Компонент для отображения статистики - StatisticComponent
        2. Компонент для отображения графика - ChartComponent