require('dotenv').config();
const express = require('express');
const db = require('./src/db/db');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcrypt');
const secretKey = process.env.SECRET_KEY;
const apiRoutes = require('./src/server/routes/api');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 4444;

// Настройка парсинга тела запроса
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use(express.static('src/public'));

//Настройка сессий
// app.use(session({
//     secret: secretKey, // Укажи здесь свой уникальный секретный ключ
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: !true } // Установи `true` только если используешь HTTPS
//   }));
  
//   // Проверка аутентификации перед доступом к любому пути
//   app.use((req, res, next) => {
//     const isLoginRoute = req.path === '/login' || req.path === '/login/';
//     const isAuthenticating = req.path === '/login' && req.method === 'POST';
//     if (!req.session.userId && !isLoginRoute && !isAuthenticating) {
//       // Пользователь не аутентифицирован и пытается получить доступ к другим путям
//       return res.redirect('/login');
//     }
//     next();
//   });

  
//   // Страница логина
//   app.get('/login', (req, res) => {
//     // Отправь форму логина
//     res.render('auth/login');
//   });
  
//   // Обработка логина
//   app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     console.log(req.body);
//     // Здесь должна быть логика аутентификации...
//     // Предположим, что user - это пользователь, полученный из БД
//     const user = await db('superuser').where({ username: username }).first();
//     console.log(user);
//     if (user && password == user.password) {
//       req.session.userId = user.id; // Аутентификация успешна
//       return res.redirect('/');
//     } else {
//       return res.redirect('/login'); // Неверные учетные данные
//     }
//   });
  app.use(expressLayouts).set("view engine", "ejs").set("views", path.join(__dirname, "./src/views"));
  
//   // Разлогинивание
//   app.post('/logout', (req, res) => {
//     req.session.destroy(() => {
//       res.redirect('/login');
//     });
//   });

app.get('/', (req, res) => {
  res.render("index", {
    layout: path.join(__dirname, "./src/views/layouts/dashboard"),
  });
});

app.get('/articles', (req, res) => {
  res.render("articles/articles", {
    layout: path.join(__dirname, "./src/views/layouts/dashboard"),
  });
});

app.post('/login/createsuperuser', async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const newUser = {
      username: username,
      password: hashedPassword
    };

    console.log(newUser);

    await db('superuser').insert(newUser);

    res.status(200).json({ message: 'Superuser created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating superuser' });
    console.log(error);
  }
})

// Здесь добавьте ваши маршруты...

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});