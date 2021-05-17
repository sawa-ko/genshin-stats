import { CharactersI } from './interfaces/characters.interface';
import { ArtifactsI, ConstelationsI, ElementsI, FoodsI, OptionsItemsI, TalentMaterialTypesI, TalentsI, WeaponMaterialTypesI, WeaponsI } from './interfaces/items.interface';
export declare class GameInfo {
    constructor();
    /**
     * Get Character Information
     * @param character Character name
     * @param options Search options
     * @returns Character
     */
    getCharacter(character: string, options?: OptionsItemsI): CharactersI;
    /**
     * Get Talent Information
     * @param character Talent name
     * @param options Search options
     * @returns Talent
     */
    getTalents(talent: string, options?: OptionsItemsI): TalentsI;
    /**
     * Get Constellation Information
     * @param character Constellation name
     * @param options Search options
     * @returns Constellation
     */
    getConstellations(constellations: string, options?: OptionsItemsI): ConstelationsI;
    /**
     * Get Weapon Information
     * @param character Weapon name
     * @param options Search options
     * @returns Weapon
     */
    getWeapons(weapon: string, options?: OptionsItemsI): WeaponsI;
    /**
     * Get Weapon Information
     * @param character Weapon name
     * @param options Search options
     * @returns Weapon
     */
    getWeaponMaterialTypes(weapon: string, options?: OptionsItemsI): WeaponMaterialTypesI;
    /**
     * Get Talen Information
     * @param character Talen name
     * @param options Search options
     * @returns Talen
     */
    getTalentMaterialTypes(talent: string, options?: OptionsItemsI): TalentMaterialTypesI;
    /**
     * Get Artifacts Information
     * @param character Artifacts name
     * @param options Search options
     * @returns Artifacts
     */
    getArtifacts(artifact: string, options?: OptionsItemsI): ArtifactsI;
    /**
     * Get Food Information
     * @param character Food name
     * @param options Search options
     * @returns Food
     */
    getFoods(food: string, options?: OptionsItemsI): FoodsI;
    /**
     * Get Element Information
     * @param character Element name
     * @param options Search options
     * @returns Element
     */
    getElements(element: string, options?: OptionsItemsI): ElementsI;
}
