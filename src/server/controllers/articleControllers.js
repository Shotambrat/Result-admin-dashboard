const articlesDAO = require("../dao/articlesDAO");

exports.getAllArticles = async (req, res) => {
  const articles = await articlesDAO.getAllArticles();
  res.json(articles);
};

exports.createArticle = async (req, res) => {
  let { title, description, category, createdate, plan} = req.body;
  let imgData = req.files.map(file => file.buffer);

  console.log(title, description, category, createdate, plan, imgData);
  const articleId = await articlesDAO.createArticle({
    title,
    description,
    category,
    createdate,
    plan,
    img_data: imgData,
  });
  res.status(201).json({ id: articleId });
};
