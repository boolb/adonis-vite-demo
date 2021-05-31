import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import User from 'App/Models/User';

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const adminUser = await User.findBy('username', 'admin');
    if (adminUser) return;

    await User.create({
      name: 'Admin',
      username: 'admin',
      email: 'admin@admin.admin',
      password: 'admin',
    });
  }
}
