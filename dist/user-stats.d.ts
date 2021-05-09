import { UserFullStatsI, UserStatsI } from './interfaces/user-stats.interface';
export declare class UserStats {
    private options?;
    constructor(options?: {
        account_id: string;
        token: string;
    });
    getFullUserStats(userId: string): Promise<UserFullStatsI>;
    getUserStats(userId: string, region: string): Promise<UserStatsI>;
}
