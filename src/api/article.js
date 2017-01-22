import { Router } from 'express';

// import model
import { Article } from '../models';

const articleRouter = new Router();

/*
articleSchema = {
  id: String,
  title: String,
  content: String,
  tags: [],
  author: String,
  popularity: Number,
}
*/

// /api/articles/
articleRouter.get('/', (req, res) => {
	// Get all articles
});

articleRouter.get('/:id', (req, res) => {
	// Get one article by id
});

articleRouter.get('/query', (req, res) => {
  // Get articles using query
  // Example: /api/users/query?title=john&...
  // There are "" to be in a query.
});

articleRouter.post('/', (req, res) => {
	// Post one article
});

articleRouter.put('/:id', (req, res) => {
	// Update one article by id
});

articleRouter.delete('/:id', (req, res) => {
	// Delete one article by id
});

export default articleRouter;
