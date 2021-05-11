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
