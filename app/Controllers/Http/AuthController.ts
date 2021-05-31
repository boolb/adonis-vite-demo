import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class AuthController {
  async validate({ auth }: HttpContextContract) {
    const authMethod = auth.use('web');
    if (await authMethod.check()) {
      return auth.user;
    }
    return {};
  }

  async login({ request, auth }: HttpContextContract) {
    const authMethod = auth.use('web');
    if (await authMethod.check()) {
      return auth.user;
    }
    const username = request.input('username');
    const password = request.input('password');
    const user = await authMethod.attempt(username, password, true);
    return user;
  }

  async logout({ auth }: HttpContextContract) {
    const authMethod = auth.use('web');
    if (authMethod.isLoggedIn) {
      await authMethod.logout();
    }
  }
}
