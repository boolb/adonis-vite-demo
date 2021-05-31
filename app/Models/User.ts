import Hash from '@ioc:Adonis/Core/Hash';
import { column, beforeSave } from '@ioc:Adonis/Lucid/Orm';
import AppBaseModel from './AppBaseModel';

export default class User extends AppBaseModel {


  @column()
  public name: string;

  @column()
  public username: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public rememberMeToken?: string;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
