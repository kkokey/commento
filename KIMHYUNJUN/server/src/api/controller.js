import models from '../models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

const SECRET_KEY = 'helloworld';

export const postRegister = async (req, res) => {
  const {
    body: { name, email }
  } = req;
  const password = await bcrypt.hashSync(req.body.password, 8);

  try {
    const user = await models.User.create({
      name,
      email,
      password
    });
    const expiresIn = 60 * 60;
    const accessToken = await jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn });
    res.status(200).send({
      user,
      access_token: accessToken,
      expires_in: expiresIn
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Server error!');
  }
};

export const postLogin = async (req, res) => {
  const {
    body: { email, password }
  } = req;
  try {
    const user = await models.User.findOne({
      where: { email }
    });
    if (!user) return res.status(404).send('User not found!');
    const result = await bcrypt.compareSync(password, user.password);
    if (!result) return res.status(401).send('Password not valid!');

    const expiresIn = 60 * 60;
    const accessToken = await jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn });

    res.status(200).send({
      user,
      access_token: accessToken,
      expires_in: expiresIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error!');
  }
};
