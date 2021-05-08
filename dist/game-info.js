"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameInfo = void 0;
const tslib_1 = require("tslib");
const genshin_db_1 = tslib_1.__importDefault(require("genshin-db"));
class GameInfo {
    constructor() { }
    getCharacter(character, options) {
        return genshin_db_1.default.characters(character, options);
    }
    getTalents(talent, options) {
        return genshin_db_1.default.talents(talent, options);
    }
    getConstellations(constellations, options) {
        return genshin_db_1.default.constellations(constellations, options);
    }
    getWeapons(weapon, options) {
        return genshin_db_1.default.weapons(weapon, options);
    }
    getWeaponMaterialTypes(weapon, options) {
        return genshin_db_1.default.weaponmaterialtypes(weapon, options);
    }
    getTalentMaterialTypes(talent, options) {
        return genshin_db_1.default.talentmaterialtypes(talent, options);
    }
    getArtifacts(artifact, options) {
        return genshin_db_1.default.artifacts(artifact, options);
    }
    getFoods(food, options) {
        return genshin_db_1.default.foods(food, options);
    }
    getElements(element, options) {
        return genshin_db_1.default.elements(element, options);
    }
}
exports.GameInfo = GameInfo;
