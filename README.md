# BGBF BGG Search Input

> Now for React only

[Demo](https://board-game-ban-fan.github.io/bgbf-bgg-search/storybook/)

# Install

```sh
  npm install board-game-ban-fan/bgbf-bgg-search
  # or
  yarn add board-game-ban-fan/bgbf-bgg-search
```

# repo scripts

```sh
  # open dev server
  npm run storybook

  # rebundle module to dist
  npm run build-lib
```

# Usage

```js
// React env
import BggSearchInput from "bgbf-bgg-search";

<BggSearchInput
  {...props} // see storybooks
/>;
```

```js
// React env
import { getBggName } from "bgbf-bgg-search";

getBggName(BggData.name, isOriginName); // if(isOriginName === false)  return zh-tw name
```
