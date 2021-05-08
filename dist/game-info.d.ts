import { Artifacts, Characters, Constelations, Elements, Foods, Options, TalentMaterialTypes, Talents, WeaponMaterialTypes, Weapons } from 'genshin-db';
export declare class GameInfo {
    constructor();
    getCharacter(character: string, options?: Options): Characters | string[];
    getTalents(talent: string, options?: Options): Talents | string[];
    getConstellations(constellations: string, options?: Options): Constelations | string[];
    getWeapons(weapon: string, options?: Options): Weapons | string[];
    getWeaponMaterialTypes(weapon: string, options?: Options): WeaponMaterialTypes;
    getTalentMaterialTypes(talent: string, options?: Options): TalentMaterialTypes;
    getArtifacts(artifact: string, options?: Options): Artifacts | string[];
    getFoods(food: string, options?: Options): Foods | string[];
    getElements(element: string, options?: Options): Elements | string[];
}
