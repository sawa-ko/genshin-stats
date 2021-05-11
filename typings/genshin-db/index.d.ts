declare module 'genshin-db' {
  export interface OptionsI {
    matchAliases?: boolean;
    matchCategories?: boolean;
    verboseCategories?: boolean;
    queryLanguages?: string[];
    resultLanguage?: string[];
  }

  export interface CharactersI {
    name: string;
    title: string;
    description: string;
    rarity: string;
    element: string;
    weapontype: string;
    substat: string;
    gender: string;
    body: string;
    association: string;
    region: string;
    affiliation: string;
    birthdaymmdd: string;
    birthday: string;
    constellation: string;
    cv: {
      english: string;
      chinese: string;
      japanese: string;
      korean: string;
    };
    talentmaterialtype: string;
    images: {
      image: string;
      card: string;
      portrait: string;
      icon: string;
      sideicon: string;
      cover1: string;
      cover2: string;
      'hoyolab-avatar': string;
    };
    url: { fandom: string };
    stats(): unknown;
  }

  export interface OptionsItemsI {
    matchAliases?: boolean;
    matchCategories?: boolean;
    verboseCategories?: boolean;
    queryLanguages?: string[];
    resultLanguage?: string[];
  }

  export interface ArtifactsI {
    name: string;
    rarity: ['1', '2', '3'];
    '2pc': string;
    '4pc': string;
    flower: {
      name: string;
      relictype: string;
      description: string;
    };
    plume: {
      name: string;
      relictype: string;
      description: string;
    };
    sands: {
      name: string;
      relictype: string;
      description: string;
    };
    goblet: {
      name: string;
      relictype: string;
      description: string;
    };
    circlet: {
      name: string;
      relictype: string;
      description: string;
    };
    images: {
      flower: string;
      plume: string;
      sands: string;
      goblet: string;
      circlet: string;
    };
    url: { fandom: string };
  }

  export interface TalentsI {
    name: string;
    combat1: {
      name: string;
      info: string;
      description: string;
      image: string;
    };
    combat2: {
      name: string;
      info: string;
      description: string;
      image: string;
    };
    combat3: {
      name: string;
      info: string;
      description: string;
      image: string;
    };
    passive1: {
      name: string;
      info: string;
      description: string;
      image: string;
    };
    passive2: {
      name: string;
      info: string;
      description: string;
      image: string;
    };
    passive3: {
      name: string;
      info: string;
      description: string;
      image: string;
    };
    images: {
      combat1: string;
      combat2: string;
      combatsp: string;
      combat3: string;
      passive1: string;
      passive2: string;
      passive3: string;
    };
  }

  export interface ConstelationsI {
    name: string;
    c1: {
      name: string;
      effect: string;
      image: string;
    };
    c2: {
      name: string;
      effect: string;
      image: string;
    };
    c3: {
      name: string;
      effect: string;
      image: string;
    };
    c4: {
      name: string;
      effect: string;
      image: string;
    };
    c5: {
      name: string;
      effect: string;
      image: string;
    };
    c6: {
      name: string;
      effect: string;
      image: string;
    };
  }

  export interface WeaponMaterialTypesI {
    name: string;
    '2starname': string;
    '3starname': string;
    '4starname': string;
    '5starname': string;
    day: string[];
    location: string;
    region: string;
    domainofforgery: string;
  }

  export interface TalentMaterialTypesI {
    name: string;
    '2starname': string;
    '3starname': string;
    '4starname': string;
    day: string[];
    location: string;
    region: string;
    domainofmastery: string;
  }

  export interface WeaponsI {
    name: string;
    description: string;
    weapontype: string;
    rarity: string;
    baseatk: number;
    substat: string;
    subvalue: string;
    effectname: string;
    effect: string;
    r1: string[];
    r2: string[];
    r3: string[];
    r4: string[];
    r5: string[];
    weaponmaterialtype: string;
    url: string;
    images: {
      icon: string;
      awakenicon: string;
    };
    stats(): unknown;
  }

  export interface FoodsI {
    name: string;
    rarity: number;
    foodtype: string;
    foodfilter: string;
    foodcategory: string;
    effect: string;
    description: string;
    suspicious: {
      effect: string;
      description: string;
    };
    normal: {
      effect: string;
      description: string;
    };
    delicious: {
      effect: string;
      description: string;
    };
    ingredients: Array<{ name: string; count: number }>;
    images: unknown;
    url: {
      fandom: string;
    };
  }

  export interface ElementsI {
    name: string;
    type: string;
    color: string;
    emoji: string;
    region: string;
    archon: string;
    theme: string;
    url: string;
  }

  export function setOptions(options: OptionsI): void;

  export function getOptions(): OptionsI;

  export function characters(query: string, options?: OptionsI): CharactersI;

  export function talents(query: string, options?: OptionsI): TalentsI;

  export function constellations(query: string, options?: OptionsI): ConstelationsI;

  export function weapons(query: string, options?: OptionsI): WeaponI;

  export function weaponmaterialtypes(query: string, options?: OptionsI): WeaponMaterialTypesI;

  export function talentmaterialtypes(query: string, options?: OptionsI): TalentMaterialTypesI;

  export function artifacts(query: string, options?: OptionsI): ArtifactsI;

  export function foods(query: string, options?: OptionsI): FoodsI;

  export function elements(query: string, options?: OptionsI): ElementsI;
}
