import { Router } from 'express';

// import model
import { User } from '../models';

const userRouter = new Router();

/*
userSchema = {
  id: String,
  name: String,
  account: String,
  password: String,
}
*/

// /api/users/
userRouter.get('/', (req, res) => {
  // Get all users
});

userRouter.get('/:id', (req, res) => {
  // Get one by user id
});

userRouter.get('/query', (req, res) => {
  // Get users using query
  // Example: /api/users/query?name=john&num=10
  // There are "id, name, account, num" to be in a query.
});

userRouter.post('/', (req, res) => {
  // Post one user
});

userRouter.put('/:id', (req, res) => {
  // Update one user by id
});

userRouter.delete('/:id', (req, res) => {
  // Delete one user by id
});

export default userRouter;