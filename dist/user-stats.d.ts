import { UserStatsI } from './interfaces/user-stats.interface';
export declare class UserStats {
    private options;
    constructor(options: {
        account_id: string;
        token: string;
    });
    getUserStats(userId: string): Promise<UserStatsI>;
}
