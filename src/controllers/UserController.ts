import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { HTTP_STATUS } from '../utils/httpStatus';
import { paginate } from '../utils/pagination';

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ email, password: hashedPassword });
  res.status(HTTP_STATUS.CREATED).json(user);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  res.status(HTTP_STATUS.OK).json({ token });
};

export const listUsers = async (req: Request, res: Response) => {
  const { limit, offset } = paginate(req.query);
  const users = await User.findAndCountAll({ limit, offset });
  res.status(HTTP_STATUS.OK).json(users);
};
