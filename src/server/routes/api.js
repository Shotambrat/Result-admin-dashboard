const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articleControllers');
// const casesController = require('../controllers/casesController');
// const usersController = require('../controllers/usersController');

// Маршруты для статей
router.get('/articles', articlesController.getAllArticles);
router.post('/articles', articlesController.createArticle);
// router.get('/articles/:id', articlesController.getArticleById);
// router.put('/articles/:id', articlesController.updateArticle);
// router.delete('/articles/:id', articlesController.deleteArticle);

// // Маршруты для кейсов
// router.get('/cases', casesController.getAllCases);
// router.post('/cases', casesController.createCase);
// router.get('/cases/:id', casesController.getCaseById);
// router.put('/cases/:id', casesController.updateCase);
// router.delete('/cases/:id', casesController.deleteCase);

// // Маршруты для пользователей
// router.get('/users', usersController.getAllUsers);
// router.post('/users', usersController.createUser);
// router.get('/users/:id', usersController.getUserById);
// router.put('/users/:id', usersController.updateUser);
// router.delete('/users/:id', usersController.deleteUser);

module.exports = router;