export interface UserFullStatsI {
  forum: {
    avatar: string;
    nickname: string;
    uid: string;
    introduce: string;
  };
  nickname: string;
  level: number;
  region: string;
  game_id: string;
  public: boolean;
  stats: {
    active_day_number: number;
    achievement_number: number;
    win_rate: number;
    anemoculus_number: number;
    geoculus_number: number;
    avatar_number: number;
    way_point_number: number;
    domain_number: number;
    spiral_abyss: string;
    precious_chest_number: number;
    luxurious_chest_number: number;
    exquisite_chest_number: number;
    common_chest_number: number;
  };
  characters: Array<{
    id: number;
    image: string;
    name: string;
    element: string;
    fetter: number;
    level: number;
    rarity: number;
  }>;
  city_explorations: Array<{
    id: number;
    level: number;
    exploration_percentage: number;
    icon: string;
    name: string;
  }>;
  world_explorations: Array<{
    level: number;
    exploration_percentage: number;
    icon: string;
    name: string;
    type: string;
  }>;
}

export interface UserStatsI {
  stats: {
    active_day_number: number;
    achievement_number: number;
    win_rate: number;
    anemoculus_number: number;
    geoculus_number: number;
    avatar_number: number;
    way_point_number: number;
    domain_number: number;
    spiral_abyss: string;
    precious_chest_number: number;
    luxurious_chest_number: number;
    exquisite_chest_number: number;
    common_chest_number: number;
  };
  characters: Array<{
    id: number;
    image: string;
    name: string;
    element: string;
    fetter: number;
    level: number;
    rarity: number;
  }>;
  city_explorations: Array<{
    id: number;
    level: number;
    exploration_percentage: number;
    icon: string;
    name: string;
  }>;
  world_explorations: Array<{
    level: number;
    exploration_percentage: number;
    icon: string;
    name: string;
    type: string;
  }>;
}
