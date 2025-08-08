This is a simple [TMDB](https://www.themoviedb.org/) library to interact with it, in javascript.

### installation

```sh
npm i @konsumer/tmdb
```

### usage

```js
import TmDB from '@konsumer/tmdb'

const { TMDB_API_KEY } = process.env

if (!TMDB_API_KEY) {
  throw new Error('Please set TMDB_API_KEY')
}

const tmdb = new TmDB(TMDB_API_KEY)

const r = await tmdb.searchMovie("Goonies")
console.log(r)
```

For more examples, see the [unit-test](tmdb.test.js).