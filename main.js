require('dotenv').config();
const express = require('express');
const knex = require('knex')(require('./knexfile').development);
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcrypt');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;
const apiRoutes = require('./src/server/routes/api');

const app = express();
const PORT = process.env.PORT || 4444;

// Настройка парсинга тела запроса
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use(express.static('src/public'))



// Настройка сессий
app.use(session({
    secret: secretKey, // Укажи здесь свой уникальный секретный ключ
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: !true } // Установи `true` только если используешь HTTPS
  }));
  
  // Проверка аутентификации перед доступом к любому пути
  app.use((req, res, next) => {
    if (!req.session.userId && !req.path.startsWith('/login')) {
      // Пользователь не аутентифицирован и не на пути логина
      return res.redirect('/login');
    }
    next();
  });
  
  // Страница логина
  app.get('/login', (req, res) => {
    // Отправь форму логина
    res.render('auth/login');
  });
  
  // Обработка логина
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Здесь должна быть логика аутентификации...
    // Предположим, что user - это пользователь, полученный из БД
    const user = await knex('users').where({ username }).first();
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.userId = user.id; // Аутентификация успешна
      return res.redirect('/dashboard');
    } else {
      return res.redirect('/login'); // Неверные учетные данные
    }
  });
  
  // Разлогинивание
  app.post('/logout', (req, res) => {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  });
  
  // Защищенный маршрут (только для аутентифицированных пользователей)
  app.get('/dashboard', (req, res) => {
    // Отправьте данные пользовательского интерфейса
    res.send('Добро пожаловать в Dashboard');
  });

// Установка EJS в качестве шаблонизатора
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Статические файлы
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Главная страница
app.get('/', (req, res) => {
    res.render('index'); // Убедитесь, что у вас есть файл src/views/index.ejs
});

// Здесь добавьте ваши маршруты...

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});