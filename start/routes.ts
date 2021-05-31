/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route';
import Env from '@ioc:Adonis/Core/Env';
import path from 'path';
import loadAssets from 'App/Utils/loadAssets';

const isDevEnv = Env.get('NODE_ENV') === 'development';

Route.group(() => {
  Route.post('/auth/login', 'AuthController.login');
  Route.get('health', () => {
    return {
      status: 'OK',
    };
  });

  Route.group(() => {
    Route.post('/auth/logout', 'AuthController.logout');
    Route.get('/auth/validate', 'AuthController.validate');
  }).middleware('auth');
}).prefix('/api');

// Serve vite resources on dev mode
if (isDevEnv) {
  Route.get('/src/*', async ({ request, response }) => {
    const file = path.resolve(`./ui/${request.url()}`);
    response.attachment(file, path.basename(file), 'inline');
  });
}

Route.get('*', async ({ view }) => {
  const assetsData = await loadAssets();
  return view.render('index', {
    isDev: !assetsData.found && isDevEnv,
    assetsData,
  });
});
