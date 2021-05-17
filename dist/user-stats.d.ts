import { UserFullStatsI, UserStatsI } from './interfaces/user-stats.interface';
export declare class UserStats {
    private options;
    private cookieOptions;
    private availableRegions;
    /**
     * Client options
     * @param options Set the account ID of the obtained token. More information at README.md
     */
    constructor(options: {
        account_id: string;
        token: string;
        lang?: string;
    });
    /**
     * Get Genshin Impact player and forum information
     * @param userId User forum id
     * @returns Game and forum user data
     */
    getFullUserStats(userId: string): Promise<UserFullStatsI>;
    /**
     * Get Genshin Impact player information
     * @param userId User game id
     * @returns Game user data
     */
    getUserStats(userId: string, region: string): Promise<UserStatsI>;
}
