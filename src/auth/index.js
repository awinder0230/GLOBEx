import { Router } from 'express';
import passportFacebook from '../auth/facebook';

const router = new Router();

router.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});

router.get('/auth/facebook', passportFacebook.authenticate('facebook',{session: false}) );

router.get('/auth/facebook/callback',
  passportFacebook.authenticate('facebook', { failureRedirect: '/login', session: false }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);
  }
);

export default router;
