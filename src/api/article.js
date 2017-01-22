import { Router } from 'express';

// import model
import { Article } from '../models';

const articleRouter = new Router();

/*
articleSchema = {
  id: String,
  title: String,
  author: String,
  tags: [],
  location: String,
  content: String,
  popularity: Number,
}
*/

// /api/articles/
articleRouter.get('/', (req, res) => {
	// Get all articles
	Article.find({}, (err, articles) => {
		if(err) return res.status(500).send(err);
		return res.json(articles);
	});
});

articleRouter.get('/query', (req, res) => {
  // Get articles using query
  // Example: /api/articles/query?title=john&...
  // There are "id, title, author, tags, location, popularity, num" to be in a query.
  console.log('get query: ', req.query);
  let query = req.query;
  let num = 1;

  if(query.hasOwnProperty('num')) {
    num = parseInt(query.num);
    delete query['num'];
  }

  User.find(query).limit(num).sort({popularity: -1}).exec((err, users) => {
    if(err) return res.status(500).send(err);
    return res.json(users);
  });
});

articleRouter.get('/:id', (req, res) => {
	// Get one article by id
	const id = req.params.id;
	Article.findById(id, (err, articles) => {
    if(err) res.status(500).send(err);
    return res.json(articles);
  });
});

articleRouter.post('/', (req, res) => {
	// Post one article
	const { title, content, tags, author, location } = req.body;

	Article.create({
		title, content, tags, author,		
	}, (err, article) => {
		if(err) res.status(500).send(err);
    return res.json(article);
	});
});

articleRouter.put('/:id', (req, res) => {
	// Update one article by id
	const { title, content, tags, author, location } = req.body;
  const query = { _id: req.params.id };

  Article.findOneAndUpdate(query, { title, content, tags, author },
    { new: true }, (err, article) => {
      if(err) res.status(500).send(err);
      return res.json(article);
  });
});

articleRouter.delete('/:id', (req, res) => {
	// Delete one article by id
  const id = req.params.id;

  Article.findByIdAndRemove(id, (err, article) => {
    if(err) res.status(500).send(err);
    return res.send('  content of id: ' + id + ' is : \n' + article + '\n  has been removed.');
  });
});

export default articleRouter;
