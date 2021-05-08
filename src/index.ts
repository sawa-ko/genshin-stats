import { GameInfo } from './game-info';

export * from './user-stats';
export * from './game-info';

(async () => {
  const data = new GameInfo();
  console.log(data.getElements('Anemo'));
})();
