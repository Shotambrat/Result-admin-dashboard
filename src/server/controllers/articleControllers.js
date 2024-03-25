const articlesDAO = require('../dao/articlesDAO');

exports.getAllArticles = async (req, res) => {
    const articles = await articlesDAO.getAllArticles();
    res.json(articles);
};

exports.createArticle = async (req, res) => {
    const { title, content, author } = req.body;
    const articleId = await articlesDAO.createArticle({ title, content, author });
    res.status(201).json({ id: articleId });
};