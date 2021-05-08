declare module 'genshin-db' {
  export interface Options {
    matchAliases: boolean;
    matchCategories: boolean;
    verboseCategories: boolean;
    queryLanguages: string[];
    resultLanguage: string[];
  }

  export function setOptions(options: Options): void;

  export function getOptions(): Options;

  export function characters(query: string, options?: Options): void;

  export function talents(query: string, options?: Options): void;

  export function constellations(query: string, options?: Options): void;

  export function weapons(query: string, options?: Options): void;

  export function weaponmaterialtypes(query: string, options?: Options): void;

  export function talentmaterialtypes(query: string, options?: Options): void;

  export function artifacts(query: string, options?: Options): void;

  export function foods(query: string, options?: Options): void;

  export function elements(query: string, options?: Options): void;

  export function rarity(query: string, options?: Options): void;
}
