import { BaseCommand } from '@adonisjs/core/build/standalone';
import fs from 'fs-extra';
import path from 'path';
import execaUtils from '../app/Utils/execaUtils';

export default class AppBuild extends BaseCommand {
  public static commandName = 'app:build';

  public static description = 'Unified Adonis & Vite build';

  public static settings = {
    loadApp: false,
    stayAlive: false,
  };

  public async run() {
    const targetDir = path.resolve('./public/assets');
    await fs.remove(targetDir);

    await execaUtils.execute('npm', ['run', 'build:vite']);

    await fs.move(path.resolve('./ui/dist/assets'), targetDir);

    await fs.move(path.resolve('./ui/dist/manifest.json'), path.resolve('./public/assets/manifest.json'));

    await execaUtils.execute('npm', ['run', 'build:adonis']);

    await fs.remove(targetDir);
    await fs.remove(path.resolve('./ui/dist'));
  }
}
