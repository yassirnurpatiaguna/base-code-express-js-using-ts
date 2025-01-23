import User from '../models/User';

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ where: { email } });
};

export const createUser = async (email: string, password: string) => {
  return await User.create({ email, password });
};
