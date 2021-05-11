declare module 'genshin-db' {
  export interface Options {
    matchAliases?: boolean;
    matchCategories?: boolean;
    verboseCategories?: boolean;
    queryLanguages?: string[];
    resultLanguage?: string[];
  }

  export interface Artifacts {
    name: string;
    minrarity: number;
    maxrarity: number;
    flower: {
      name: string;
      images: {
        image: string;
      };
      description: string;
    };
    plume: {
      name: string;
      images: {
        image: string;
      };
      description: string;
    };
    sands: {
      name: string;
      images: {
        image: string;
      };
      description: string;
    };
    goblet: {
      name: string;
      images: {
        image: string;
      };
      description: string;
    };
    circlet: {
      name: string;
      images: {
        image: string;
      };
      description: string;
    };
    '2pc': string;
    '4pc': string;
    drop: {
      '1': [];
      '2': [];
      '3': [];
      '4': [];
      '5': [];
    };
  }

  export interface Characters {
    name: string;
    title: string;
    element: string;
    weapontype: string;
    gender: string;
    body: string;
    rarity: string;
    birthday: string;
    birthdayunformatted: string;
    constellation: string;
    substat: string;
    images: {
      image: string;
      card: string;
      portrait: string;
    };
    cv: {
      english: string;
      japanese: string;
      korean: string;
      chinese: string;
    };
    affiliation: string;
    description: string;
    talentmaterialtype: string;
    url: string;
  }

  export interface Talents {
    name: string;
    combat1: {
      name: string;
      image: string;
      info: string;
      attributes: string;
    };
    combat2: {
      name: string;
      image: string;
      info: string;
      description: string;
      attributes: string;
    };
    combat3: {
      name: string;
      image: string;
      info: string;
      description: string;
      attributes: string;
    };
    passive1: {
      name: string;
      image: string;
      info: string;
    };
    passive2: {
      name: string;
      image: string;
      info: string;
    };
    passive3: {
      name: string;
      image: string;
      info: string;
    };
  }

  export interface Constelations {
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

  export interface WeaponMaterialTypes {
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

  export interface TalentMaterialTypes {
    name: string;
    '2starname': string;
    '3starname': string;
    '4starname': string;
    day: string[];
    location: string;
    region: string;
    domainofmastery: string;
  }

  export interface Weapons {
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
    images: Array<{
      image: string;
      icon: string;
      awakenicon: string;
    }>;
    stats: [];
  }

  export interface Foods {
    name: string;
    rarity: 5;
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
    ingredients: [{ name: 'Ham'; count: 4 }, { name: 'Crab'; count: 3 }, { name: 'Shrimp Meat'; count: 3 }, { name: 'Matsutake'; count: 3 }];
    images: Array<{
      image: string;
      icon: string;
      awakenicon: string;
    }>;
    url: {
      fandom: string;
    };
  }

  export interface Elements {
    name: string;
    type: string;
    color: string;
    emoji: string;
    region: string;
    archon: string;
    theme: string;
    url: string;
    images: string;
  }

  export function setOptions(options: Options): void;

  export function getOptions(): Options;

  export function characters(query: string, options?: Options): Characters;

  export function talents(query: string, options?: Options): Talents;

  export function constellations(query: string, options?: Options): Constelations;

  export function weapons(query: string, options?: Options): Weapon;

  export function weaponmaterialtypes(query: string, options?: Options): WeaponMaterialTypes;

  export function talentmaterialtypes(query: string, options?: Options): TalentMaterialTypes;

  export function artifacts(query: string, options?: Options): Artifacts;

  export function foods(query: string, options?: Options): Foods;

  export function elements(query: string, options?: Options): Elements;
}
