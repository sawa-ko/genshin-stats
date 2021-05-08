import genshinDb, { Options } from 'genshin-db';

export class GameInfo {
  constructor() {}

  /**
   * Get Character Information
   * @param character Character name
   * @param options Search options
   * @returns Character
   */
  public getCharacter(character: string, options?: Options) {
    return genshinDb.characters(character, options);
  }

  /**
   * Get Talent Information
   * @param character Talent name
   * @param options Search options
   * @returns Talent
   */
  public getTalents(talent: string, options?: Options) {
    return genshinDb.talents(talent, options);
  }

  /**
   * Get Constellation Information
   * @param character Constellation name
   * @param options Search options
   * @returns Constellation
   */
  public getConstellations(constellations: string, options?: Options) {
    return genshinDb.constellations(constellations, options);
  }

  /**
   * Get Weapon Information
   * @param character Weapon name
   * @param options Search options
   * @returns Weapon
   */
  public getWeapons(weapon: string, options?: Options) {
    return genshinDb.weapons(weapon, options);
  }

  /**
   * Get Weapon Information
   * @param character Weapon name
   * @param options Search options
   * @returns Weapon
   */
  public getWeaponMaterialTypes(weapon: string, options?: Options) {
    return genshinDb.weaponmaterialtypes(weapon, options);
  }

  /**
   * Get Talen Information
   * @param character Talen name
   * @param options Search options
   * @returns Talen
   */
  public getTalentMaterialTypes(talent: string, options?: Options) {
    return genshinDb.talentmaterialtypes(talent, options);
  }

  /**
   * Get Artifacts Information
   * @param character Artifacts name
   * @param options Search options
   * @returns Artifacts
   */
  public getArtifacts(artifact: string, options?: Options) {
    return genshinDb.artifacts(artifact, options);
  }

  /**
   * Get Food Information
   * @param character Food name
   * @param options Search options
   * @returns Food
   */
  public getFoods(food: string, options?: Options) {
    return genshinDb.foods(food, options);
  }

  /**
   * Get Element Information
   * @param character Element name
   * @param options Search options
   * @returns Element
   */
  public getElements(element: string, options?: Options) {
    return genshinDb.elements(element, options);
  }

  /**
   * Get Rarity Information
   * @param character Rarity name
   * @param options Search options
   * @returns Rarity
   */
  public getRarity(rarity: string, options?: Options) {
    return genshinDb.rarity(rarity, options);
  }
}
