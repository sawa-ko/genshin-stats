import genshinDb from 'genshin-db';

import { CharactersI } from './interfaces/characters.interface';
import {
  ArtifactsI,
  ConstelationsI,
  ElementsI,
  FoodsI,
  OptionsItemsI,
  TalentMaterialTypesI,
  TalentsI,
  WeaponMaterialTypesI,
  WeaponsI,
} from './interfaces/items.interface';

export class GameInfo {
  constructor() {}

  /**
   * Get Character Information
   * @param character Character name
   * @param options Search options
   * @returns Character
   */
  public getCharacter(character: string, options?: OptionsItemsI): CharactersI {
    return genshinDb.characters(character, options);
  }

  /**
   * Get Talent Information
   * @param character Talent name
   * @param options Search options
   * @returns Talent
   */
  public getTalents(talent: string, options?: OptionsItemsI): TalentsI {
    return genshinDb.talents(talent, options);
  }

  /**
   * Get Constellation Information
   * @param character Constellation name
   * @param options Search options
   * @returns Constellation
   */
  public getConstellations(constellations: string, options?: OptionsItemsI): ConstelationsI {
    return genshinDb.constellations(constellations, options);
  }

  /**
   * Get Weapon Information
   * @param character Weapon name
   * @param options Search options
   * @returns Weapon
   */
  public getWeapons(weapon: string, options?: OptionsItemsI): WeaponsI {
    return genshinDb.weapons(weapon, options);
  }

  /**
   * Get Weapon Information
   * @param character Weapon name
   * @param options Search options
   * @returns Weapon
   */
  public getWeaponMaterialTypes(weapon: string, options?: OptionsItemsI): WeaponMaterialTypesI {
    return genshinDb.weaponmaterialtypes(weapon, options);
  }

  /**
   * Get Talen Information
   * @param character Talen name
   * @param options Search options
   * @returns Talen
   */
  public getTalentMaterialTypes(talent: string, options?: OptionsItemsI): TalentMaterialTypesI {
    return genshinDb.talentmaterialtypes(talent, options);
  }

  /**
   * Get Artifacts Information
   * @param character Artifacts name
   * @param options Search options
   * @returns Artifacts
   */
  public getArtifacts(artifact: string, options?: OptionsItemsI): ArtifactsI {
    return genshinDb.artifacts(artifact, options);
  }

  /**
   * Get Food Information
   * @param character Food name
   * @param options Search options
   * @returns Food
   */
  public getFoods(food: string, options?: OptionsItemsI): FoodsI {
    return genshinDb.foods(food, options);
  }

  /**
   * Get Element Information
   * @param character Element name
   * @param options Search options
   * @returns Element
   */
  public getElements(element: string, options?: OptionsItemsI): ElementsI {
    return genshinDb.elements(element, options);
  }
}
