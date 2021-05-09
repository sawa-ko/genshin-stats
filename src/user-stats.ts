import axios from 'axios';

import { UserFullStatsI, UserStatsI } from './interfaces/user-stats.interface';

export class UserStats {
  /**
   * Client options
   * @param options Set the account ID of the obtained token. More information at README.md
   */
  constructor(private options?: { account_id: string; token: string }) {}

  /**
   * Get Genshin Impact player and forum information
   * @param userId User forum id
   * @returns Game and forum user data
   */
  public async getFullUserStats(userId: string): Promise<UserFullStatsI> {
    if (!this.options) {
      throw new Error('Options not set.');
    }

    if (this.options.account_id == '') {
      throw new Error('account_id is required.');
    }

    if (this.options.token == '') {
      throw new Error('token is required.');
    }

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

      if (userData.data.data.list) {
        throw new Error('User not found.');
      }

      const statsUserData = await axios.get('https://api-os-takumi.mihoyo.com/game_record/genshin/api/index', {
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
        stats: statsUserData.data.data.stats,
        characters: statsUserData.data.data.avatars,
        city_explorations: statsUserData.data.data.city_explorations,
        world_explorations: statsUserData.data.data.world_explorations,
      };
    } catch (error) {
      throw new Error(error.response || error);
    }
  }

  /**
   * Get Genshin Impact player information
   * @param userId User game id
   * @returns Game user data
   */
  public async getUserStats(userId: string, region: string): Promise<UserStatsI> {
    try {
      const statsUserData = await axios.get('https://api-os-takumi.mihoyo.com/game_record/genshin/api/index', {
        withCredentials: true,
        params: { role_id: userId, server: `os_${region}` },
        headers: { cookie: `ltoken=${this.options.token}; ltuid=${this.options.account_id}`, 'x-rpc-language': 'en-us' },
      });

      if (statsUserData.data.data == null) {
        throw new Error('User not found.');
      }

      return {
        stats: statsUserData.data.data.stats,
        characters: statsUserData.data.data.avatars,
        city_explorations: statsUserData.data.data.city_explorations,
        world_explorations: statsUserData.data.data.world_explorations,
      };
    } catch (error) {
      throw new Error(error.response || error);
    }
  }
}
