import { BaseCommand } from '@adonisjs/core/build/standalone';
import execaUtils from '../app/Utils/execaUtils';

export default class AppDev extends BaseCommand {
  public static commandName = 'app:dev';
  public static description = 'Unified Adonis & Vite dev mode';

  public static settings = {
    loadApp: false,
    stayAlive: false,
  };

  public async run() {
    this.logger.info('Starting servers');

    const adonisDev = execaUtils.execute('npm', ['run', 'dev:adonis']);
    const viteDev = execaUtils.execute('npm', ['run', 'dev:vite']);

    await Promise.all([adonisDev, viteDev]);
  }
}
