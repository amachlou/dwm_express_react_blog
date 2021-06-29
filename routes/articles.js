 
const router = require('express').Router();
const articlesRepo = require('../repositories/articles');

/* GET articles listing. */

router.get('/', async function(req, res, next) {
  res.send(await articlesRepo.getAllArticles())
});

router.get('/:id', async function(req, res, next) {
  res.send(await articlesRepo.getArticle(req.params.id))
});

module.exports = router;