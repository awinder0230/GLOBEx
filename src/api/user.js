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
  User.find({}, '-password', (err, users) => {
    if(err) return res.status(500).send(err);
    return res.json(users);
  });
});

userRouter.get('/query', (req, res) => {
  // Get users using query
  // Example: /api/users/query?name=john&num=10
  // There are "id, name, account, num" to be in a query.
  console.log('get query: ', req.query);
  let query = req.query;
  let num = 1;

  if(query.hasOwnProperty('num')) {
    num = parseInt(query.num);
    delete query['num'];
  }

  User.find(query).limit(num).exec((err, users) => {
    if(err) return res.status(500).send(err);
    return res.json(users);
  });
});

userRouter.get('/:id', (req, res) => {
  // Get one by user id
  const id = req.params.id;
  User.findById(id, 'name account', (err, user) => {
    if(err) res.status(500).send(err);
    return res.json(user);
  });
});

userRouter.post('/', (req, res) => {
  // Post one user
  const { name, account, password } = req.body;

  User.create({
    name,
    account,
    password,
  }, (err, user) => {
    if(err) res.status(500).send(err);
    return res.json(user);
  });
});

userRouter.put('/:id', (req, res) => {
  // Update one user by id
  const { name, account, password } = req.body;
  const query = { _id: req.params.id };

  User.findOneAndUpdate(query, { name, account, password },
    { new: true }, (err, user) => {
      if(err) res.status(500).send(err);
      return res.json(user);
  });

});

userRouter.delete('/:id', (req, res) => {
  // Delete one user by id
  const id = req.params.id;

  User.findByIdAndRemove(id, (err, user) => {
    if(err) res.status(500).send(err);
    return res.send('  content of id: ' + id + ' is : \n' + user + '\n  has been removed.');
  });
});

export default userRouter;