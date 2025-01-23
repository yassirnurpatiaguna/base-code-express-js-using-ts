import app from './app';
import sequelize from './config/database';

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync();
    console.log('Database connected!');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Error starting server:', error);
  }
})();
