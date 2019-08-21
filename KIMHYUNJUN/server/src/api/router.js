import express from 'express';
import { postRegister, postLogin } from './controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('This is an authentication server');
});

router.post('/register', postRegister);

router.post('/login', postLogin);

export default router;
