"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const game_info_1 = require("./game-info");
tslib_1.__exportStar(require("./user-stats"), exports);
tslib_1.__exportStar(require("./game-info"), exports);
(async () => {
    const data = new game_info_1.GameInfo();
    console.log(data.getElements('Anemo'));
})();
