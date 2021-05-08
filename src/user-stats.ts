import axios from 'axios';

import { UserStatsI } from './interfaces/user-stats.interface';

export class UserStats {
  /**
   * Client options
   * @param options Set the account ID of the obtained token. More information at README.md
   */
  constructor(private options: { account_id: string; token: string }) {
    if (!this.options) {
      throw new Error('Options not set.');
    }
  }

  /**
   * Get Genshin Impact player information
   * @param userId User game id
   * @returns Game user data
   */
  public async getUserStats(userId: string): Promise<UserStatsI> {
    try {
      const userForumData = await axios.get('https://api-os-takumi.mihoyo.com/community/user/wapi/getUserFullInfo', {
        withCredentials: true,
        params: { uid: userId, gids: 2 },
        headers: { cookie: `ltoken=${this.options.token}; ltuid=${this.options.account_id}` },
      });
      const userData = await axios.get('https://api-os-takumi.mihoyo.com/game_record/card/wapi/getGameRecordCard', {
        withCredentials: true,
        params: { uid: userId },
        headers: { cookie: `ltoken=${this.options.token}; ltuid=${this.options.account_id}` },
      });

      const extraUserData = await axios.get('https://api-os-takumi.mihoyo.com/game_record/genshin/api/index', {
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
        regio: userData.data.data.list[0].region,
        game_id: userData.data.data.list[0].game_role_id,
        public: userData.data.data.list[0].is_public,
        stats: extraUserData.data.data.stats,
        characters: extraUserData.data.data.avatars,
        city_explorations: extraUserData.data.data.city_explorations,
        world_explorations: extraUserData.data.data.world_explorations,
      };
    } catch (error) {
      throw new Error(error.response || error);
    }
  }
}
