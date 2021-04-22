// Regras de negocios
// Verifica se o usuario ja existe

import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}
//
class SettingsService {
  async create({ chat, username }: ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository);

    // select * from settings where username = "username" limit1;
    const userAlreadyExists = await settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const settings = settingsRepository.create({
      chat,
      username,
    });
    await settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService };
