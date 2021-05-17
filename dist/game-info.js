"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameInfo = void 0;
const tslib_1 = require("tslib");
const genshin_db_1 = tslib_1.__importDefault(require("genshin-db"));
class GameInfo {
    constructor() { }
    /**
     * Get Character Information
     * @param character Character name
     * @param options Search options
     * @returns Character
     */
    getCharacter(character, options) {
        return genshin_db_1.default.characters(character, options);
    }
    /**
     * Get Talent Information
     * @param character Talent name
     * @param options Search options
     * @returns Talent
     */
    getTalents(talent, options) {
        return genshin_db_1.default.talents(talent, options);
    }
    /**
     * Get Constellation Information
     * @param character Constellation name
     * @param options Search options
     * @returns Constellation
     */
    getConstellations(constellations, options) {
        return genshin_db_1.default.constellations(constellations, options);
    }
    /**
     * Get Weapon Information
     * @param character Weapon name
     * @param options Search options
     * @returns Weapon
     */
    getWeapons(weapon, options) {
        return genshin_db_1.default.weapons(weapon, options);
    }
    /**
     * Get Weapon Information
     * @param character Weapon name
     * @param options Search options
     * @returns Weapon
     */
    getWeaponMaterialTypes(weapon, options) {
        return genshin_db_1.default.weaponmaterialtypes(weapon, options);
    }
    /**
     * Get Talen Information
     * @param character Talen name
     * @param options Search options
     * @returns Talen
     */
    getTalentMaterialTypes(talent, options) {
        return genshin_db_1.default.talentmaterialtypes(talent, options);
    }
    /**
     * Get Artifacts Information
     * @param character Artifacts name
     * @param options Search options
     * @returns Artifacts
     */
    getArtifacts(artifact, options) {
        return genshin_db_1.default.artifacts(artifact, options);
    }
    /**
     * Get Food Information
     * @param character Food name
     * @param options Search options
     * @returns Food
     */
    getFoods(food, options) {
        return genshin_db_1.default.foods(food, options);
    }
    /**
     * Get Element Information
     * @param character Element name
     * @param options Search options
     * @returns Element
     */
    getElements(element, options) {
        return genshin_db_1.default.elements(element, options);
    }
}
exports.GameInfo = GameInfo;
