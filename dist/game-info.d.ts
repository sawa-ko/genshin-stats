import { CharactersI } from './interfaces/characters.interface';
import { ArtifactsI, ConstelationsI, ElementsI, FoodsI, OptionsItemsI, TalentMaterialTypesI, TalentsI, WeaponMaterialTypesI, WeaponsI } from './interfaces/items.interface';
export declare class GameInfo {
    constructor();
    getCharacter(character: string, options?: OptionsItemsI): CharactersI;
    getTalents(talent: string, options?: OptionsItemsI): TalentsI;
    getConstellations(constellations: string, options?: OptionsItemsI): ConstelationsI;
    getWeapons(weapon: string, options?: OptionsItemsI): WeaponsI;
    getWeaponMaterialTypes(weapon: string, options?: OptionsItemsI): WeaponMaterialTypesI;
    getTalentMaterialTypes(talent: string, options?: OptionsItemsI): TalentMaterialTypesI;
    getArtifacts(artifact: string, options?: OptionsItemsI): ArtifactsI;
    getFoods(food: string, options?: OptionsItemsI): FoodsI;
    getElements(element: string, options?: OptionsItemsI): ElementsI;
}
