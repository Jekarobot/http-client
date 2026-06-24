# 🌐 HTTP Client

Простой HTTP-клиент для выполнения запросов к API и управления данными билетов. Проект предназначен для демонстрации работы с HTTP-запросами, модальными окнами и отображением списка билетов.

## 🚀 Технологический стек

- **Языки**: JavaScript (ES6+), HTML5, CSS3
- **Сборщик**: Webpack 5
- **CI/CD**: AppVeyor
- **Зависимости**: npm-пакеты (см. `package.json`)

## 📦 Установка и запуск

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/your-username/http-client.git
   cd http-client
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите проект в режиме разработки:
   ```bash
   npm start
   ```

4. Для production-сборки:
   ```bash
   npm run build
   ```

## 💻 Примеры использования

### Выполнение GET-запроса
```javascript
import { fetchTickets } from './src/modules/api';

fetchTickets()
  .then(tickets => console.log(tickets))
  .catch(error => console.error(error));
```

### Открытие модального окна
```javascript
import { showModal } from './src/modules/modal';

showModal('Детали билета', 'Информация о билете...');
```

## 📁 Структура проекта

```
http-client/
├── 📄 appveyor.yml          # Конфигурация CI/CD
├── 📄 package.json          # Зависимости и скрипты
├── 📄 webpack.config.js     # Конфигурация Webpack
├── 📁 src/
│   ├── 📄 index.html        # Главная HTML-страница
│   ├── 📄 index.js          # Точка входа JavaScript
│   ├── 📄 styles.css        # Стили проекта
│   └── 📁 modules/
│       ├── 📄 api.js        # Модуль для HTTP-запросов
│       ├── 📄 modal.js      # Модуль модальных окон
│       └── 📄 tickets.js    # Модуль управления билетами
└── 📄 package-lock.json     # Фиксация версий зависимостей
```

## 📄 Лицензия

Проект распространяется под лицензией MIT. Подробнее см. в файле `LICENSE`.