"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStats = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
class UserStats {
    constructor(options) {
        this.options = options;
        if (!this.options) {
            throw new Error('Options not set.');
        }
        if (this.options.account_id == '') {
            throw new Error('account_id is required.');
        }
        if (this.options.token == '') {
            throw new Error('token is required.');
        }
    }
    async getUserStats(userId) {
        try {
            const userForumData = await axios_1.default.get('https://api-os-takumi.mihoyo.com/community/user/wapi/getUserFullInfo', {
                withCredentials: true,
                params: { uid: userId, gids: 2 },
                headers: { cookie: `ltoken=${this.options.token}; ltuid=${this.options.account_id}` },
            });
            const userData = await axios_1.default.get('https://api-os-takumi.mihoyo.com/game_record/card/wapi/getGameRecordCard', {
                withCredentials: true,
                params: { uid: userId },
                headers: { cookie: `ltoken=${this.options.token}; ltuid=${this.options.account_id}` },
            });
            const extraUserData = await axios_1.default.get('https://api-os-takumi.mihoyo.com/game_record/genshin/api/index', {
                withCredentials: true,
                params: { role_id: userData.data.data.list[0].game_role_id, server: userData.data.data.list[0].region },
                headers: { cookie: `ltoken=${this.options.token}; ltuid=${this.options.account_id}`, 'x-rpc-language': 'en-us' },
            });
            return {
                forum: {
                    avatar: userForumData.data.data.user_info.avatar_url,
                    nickname: userForumData.data.data.user_info.nickname,
                    uid: userForumData.data.data.user_info.uid,
                    introduce: userForumData.data.data.user_info.introduce,
                },
                nickname: userData.data.data.list[0].nickname,
                level: userData.data.data.list[0].level,
                region: userData.data.data.list[0].region,
                game_id: userData.data.data.list[0].game_role_id,
                public: userData.data.data.list[0].is_public,
                stats: extraUserData.data.data.stats,
                characters: extraUserData.data.data.avatars,
                city_explorations: extraUserData.data.data.city_explorations,
                world_explorations: extraUserData.data.data.world_explorations,
            };
        }
        catch (error) {
            throw new Error(error.response || error);
        }
    }
}
exports.UserStats = UserStats;
