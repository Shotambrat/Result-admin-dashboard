const knex = require('../../db/db');

exports.getAllArticles = () => {
    return knex('articles').select('*');
};

exports.createArticle = ({ title, content, author }) => {
    return knex('articles').insert({
        title,
        content,
        author
    }).returning('id');
};