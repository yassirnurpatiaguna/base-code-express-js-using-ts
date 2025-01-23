import bcrypt from 'bcrypt';
import { QueryInterface } from 'sequelize';

export = {
  async up(queryInterface: QueryInterface) {
    const hashedPassword = await bcrypt.hash('Admin123!', 10);

    await queryInterface.bulkInsert('Users', [
      {
        email: 'superadmin@gmail.com',
        password: hashedPassword,
        role: 'super-admin', // Make sure your `role` column exists and supports this value
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('Users', { email: 'superadmin@example.com' });
  },
};
