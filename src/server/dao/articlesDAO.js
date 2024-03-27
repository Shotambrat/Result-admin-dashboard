const knex = require("../../db/db");

exports.getAllArticles = () => {
  return knex("articles").select("*");
};

exports.createArticle = ({
  title,
  description,
  category,
  createdate,
  plan,
  img_data
}) => {
  return knex("articles")
    .insert({
        title,
        description,
        category,
        createdate: new Date(createdate),
        plan, // Уже в формате JSON
        img_data
    })
    .returning("id");
};
