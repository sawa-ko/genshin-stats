# Genshin Impact Stats

This package can obtain a player's information from Genshin Impact, such as their stats, characters earned, character level and more.
Also, thanks to the [Genshin Db](https://github.com/theBowja/genshin-db) package, the package has more options to obtain information about Genshin impact characters, weapons, artifacts, etc. with a solid and updated database.

### Installation

> npm

```bash
npm i genshin-stats
```

> yarn

```bash
yarn add genshin-stats
```

### Game information - User guide

The available methods are listed below:

1. `getCharacter`
2. `getTalents`
3. `getConstellations`
4. `getWeapons`
5. `getWeaponMaterialTypes`
6. `getTalentMaterialTypes`
7. `getArtifacts`
8. `getFoods`
9. `getElements`

> Example

```ts
import { GameInfo } from 'genshin-stats';

const data = new GameInfo();
await data.getCharacter('amber');
```

### User statistics - User guide

The client to obtain the user information of a Genshin Impact player takes 2 parameters in its configuration. The parameters required in the configuration are listed below.

1. `account_id` - This parameter is the user uid linked to the access token that is generated when a user logs in to [Hoyolab](https://www.hoyolab.com/genshin/). It is necessary to enter the correct one because the token will work only if the correct uid is entered.
2. `token` - The token gives access to get the Genshin Impact API information, this token is generated when a user logs into [Hoyolab](https://www.hoyolab.com/genshin/) and can be obtained from the `Cookies` section, also the `account_id` parameter can be found there.

To obtain these parameters it is necessary to follow the instructions listed below:

#### 1. Login to [Hoyolab](https://www.hoyolab.com/genshin/)

<img src="https://i.ibb.co/cctHYdv/Genshin-Stats-hoyo-Lab-Login.png" width="1024">

#### 2. Press the `F12` key in the browser and click on the `Application` tab.

<img src="https://i.ibb.co/bPFFN5F/Genshin-Stats-Browser-console.png" width="1024">

#### 3. Go to the category `Storage`, open the option `Cookies` and open the option called `https://www.hoyolab.com/`.

<img src="https://i.ibb.co/ysXHMLg/Genshin-Stats-hoyolab-Cookies.png" width="1024">

#### 4. Find the `ltoken` and `account_id` field and copy its `value`.

The `ltoken` field is the token mentioned above.

<img src="https://i.ibb.co/2nd5V4y/Genshin-Stats-hoyolab-Cookies-access.png" width="1024">

Once this data is obtained, it will be introduced in the client's options to obtain the user's statistics.

> Example

```ts
import { UserStats } from 'genshin-stats';

const data = new UserStats({ account_id: 'account_id', token: 'ltoken' });
```

### Important note

This data may expire, so be sure to update it when necessary.
