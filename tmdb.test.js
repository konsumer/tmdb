import { test, describe } from 'node:test'
import TmDB from './TmDB.js'

const { TMDB_API_KEY } = process.env

if (!TMDB_API_KEY) {
  throw new Error('Please set TMDB_API_KEY')
}

const tmdb = new TmDB(TMDB_API_KEY)

// TODO: skipped tests just haven't been written yet, but the function should work ok

describe('movie', () => {
  test('searchMovie', async ({ assert }) => {
    const r = await tmdb.searchMovie('goonies')
    assert.equal(r.results[0].original_title, 'The Goonies')
  })

  test('discoverMovie', async ({ assert }) => {
    const r = await tmdb.discoverMovie()
    assert.equal(r.results.length, 20)
  })

  test('movieDetails', async ({ assert }) => {
    const r = await tmdb.movieDetails(9340)
    assert.equal(r.original_title, 'The Goonies')
  })

  test('movieImages', async ({ assert }) => {
    const r = await tmdb.movieImages(9340)
    assert.equal(r.posters.length > 100, true)
  })

  test('trendingMovies', async ({ assert }) => {
    const r = await tmdb.trendingMovies()
    assert.equal(r.results.length, 20)
  })

  test('movieAlternativeTitles', async ({ assert }) => {
    const r = await tmdb.movieAlternativeTitles(9340)
    const st = r.titles.find((t) => t.iso_3166_1 === 'FI')
    assert.equal(st.title, 'Dödskallegänget')
  })

  test('movieChanges', async ({ assert }) => {
    const r = await tmdb.movieChanges(9340)
    assert.deepEqual(r.changes, [])
  })

  test('movieCredits', async ({ assert }) => {
    const r = await tmdb.movieCredits(9340)

    const dir = r.crew.find((c) => c.job === 'Director')
    assert.equal(dir.name, 'Richard Donner')

    const chunk = r.cast.find((c) => c.character === 'Chunk')
    assert.equal(chunk.name, 'Jeff Cohen')
  })

  test('movieExternalIds', async ({ assert }) => {
    const r = await tmdb.movieExternalIds(9340)
    assert.equal(r.imdb_id, 'tt0089218')
    assert.equal(r.facebook_id, 'thegooniesmovie')
  })

  test('movieKeywords', async ({ assert }) => {
    const r = await tmdb.movieKeywords(9340)
    const kw = r.keywords.map((i) => i.name)
    assert.equal(kw.includes('booby trap'), true)
  })

  test('movieLists', async ({ assert }) => {
    const r = await tmdb.movieLists(9340)
    assert.equal(r.results.length, 20)
  })

  test('movieRecommendations', async ({ assert }) => {
    const r = await tmdb.movieRecommendations(9340)
    assert.equal(Array.isArray(r.results) && r.results.length > 0, true)
  })

  test('movieReleaseDates', async ({ assert }) => {
    const r = await tmdb.movieReleaseDates(9340)
    assert.equal(Array.isArray(r.results), true)
    const us = r.results.find((x) => x.iso_3166_1 === 'US')
    assert.equal(Array.isArray(us?.release_dates), true)
  })

  test('movieReviews', async ({ assert }) => {
    const r = await tmdb.movieReviews(9340)
    assert.equal(Array.isArray(r.results), true)
  })

  test('movieSimilar', async ({ assert }) => {
    const r = await tmdb.movieSimilar(9340)
    assert.equal(Array.isArray(r.results) && r.results.length > 0, true)
  })

  test('movieTranslations', async ({ assert }) => {
    const r = await tmdb.movieTranslations(9340)
    assert.equal(Array.isArray(r.translations), true)
    assert.equal(!!r.translations.find((t) => t.iso_639_1 === 'en'), true)
  })

  test('movieVideos', async ({ assert }) => {
    const r = await tmdb.movieVideos(9340)
    assert.equal(Array.isArray(r.results), true)
  })

  test('movieWatchProviders', async ({ assert }) => {
    const r = await tmdb.movieWatchProviders(9340)
    assert.equal(typeof r.results, 'object')
  })

  test('personMovieCredits', async ({ assert }) => {
    const r = await tmdb.personMovieCredits(287)
    assert.equal(Array.isArray(r.cast) || Array.isArray(r.crew), true)
  })

  test('moviePopularList', async ({ assert }) => {
    const r = await tmdb.moviePopularList()
    assert.equal(r.results.length, 20)
  })

  test('movieTopRatedList', async ({ assert }) => {
    const r = await tmdb.movieTopRatedList()
    assert.equal(r.results.length, 20)
  })

  test('movieUpcomingList', async ({ assert }) => {
    const r = await tmdb.movieUpcomingList()
    assert.equal(r.results.length, 20)
  })

  test('movieNowPlayingList', async ({ assert }) => {
    const r = await tmdb.movieNowPlayingList()
    assert.equal(r.results.length, 20)
  })

  test('movieLatestId', async ({ assert }) => {
    const r = await tmdb.movieLatestId()
    assert.equal(typeof r.id, 'number')
  })

  test('certificationMovieList', async ({ assert }) => {
    const r = await tmdb.certificationMovieList()
    assert.equal(typeof r.certifications, 'object')
    assert.equal(!!r.certifications.US, true)
  })

  test('changesMovieList', async ({ assert }) => {
    const r = await tmdb.changesMovieList()
    assert.equal(Array.isArray(r.results), true)
  })

  test('genreMovieList', async ({ assert }) => {
    const r = await tmdb.genreMovieList()
    assert.equal(Array.isArray(r.genres) && r.genres.length > 0, true)
  })

  test('watchProvidersMovieList', async ({ assert }) => {
    const r = await tmdb.watchProvidersMovieList()
    assert.equal(Array.isArray(r.results) && r.results.length > 0, true)
  })

  test('keywordMovies', async ({ assert }) => {
    const kws = await tmdb.movieKeywords(9340)
    const firstKw = kws.keywords[0]
    const r = await tmdb.keywordMovies(firstKw.id)
    assert.equal(Array.isArray(r.results), true)
  })

  test.skip('movieAddRating', async ({ assert }) => {})

  test.skip('movieDeleteRating', async ({ assert }) => {})

  test.skip('guestSessionRatedMovies', async ({ assert }) => {})
})

describe('tv', () => {
  test('searchTv', async ({ assert }) => {
    const r = await tmdb.searchTv('supernatural')
    assert.equal(r.results[0].original_name, 'Supernatural')
  })

  test('tvSeriesDetails', async ({ assert }) => {
    const r = await tmdb.tvSeriesDetails(1622)
    assert.equal(r.original_name, 'Supernatural')
  })

  test('tvSeasonDetails', async ({ assert }) => {
    const r = await tmdb.tvSeasonDetails(1622, 1)
    assert.equal(r.episodes.length, 22)
  })

  test('tvEpisodeDetails', async ({ assert }) => {
    const r = await tmdb.tvEpisodeDetails(1622, 1, 5)
    assert.equal(r.name, 'Bloody Mary')
  })

  test('discoverTv', async ({ assert }) => {
    const r = await tmdb.discoverTv()
    assert.equal(r.results.length, 20)
  })

  test('tvSeriesImages', async ({ assert }) => {
    const r = await tmdb.tvSeriesImages(1622)
    assert.equal(Array.isArray(r.posters), true)
  })

  test('tvSeasonImages', async ({ assert }) => {
    const r = await tmdb.tvSeasonImages(1622, 1)
    assert.equal(Array.isArray(r.posters), true)
  })

  test('tvEpisodeImages', async ({ assert }) => {
    const r = await tmdb.tvEpisodeImages(1622, 1, 5)
    assert.equal(Array.isArray(r.stills), true)
  })

  test('trendingTv', async ({ assert }) => {
    const r = await tmdb.trendingTv()
    assert.equal(r.results.length, 20)
  })

  test('tvSeriesChanges', async ({ assert }) => {
    const r = await tmdb.tvSeriesChanges(1622)
    assert.equal(Array.isArray(r.changes), true)
  })

  test('personTvCredits', async ({ assert }) => {
    // Jensen Ackles
    const r = await tmdb.personTvCredits(11073)
    assert.equal(Array.isArray(r.cast) || Array.isArray(r.crew), true)
  })

  test('tvSeriesAiringTodayList', async ({ assert }) => {
    const r = await tmdb.tvSeriesAiringTodayList()
    assert.equal(r.results.length, 20)
  })

  test('tvSeriesOnTheAirList', async ({ assert }) => {
    const r = await tmdb.tvSeriesOnTheAirList()
    assert.equal(r.results.length, 20)
  })

  test('tvSeriesPopularList', async ({ assert }) => {
    const r = await tmdb.tvSeriesPopularList()
    assert.equal(r.results.length, 20)
  })

  test('tvSeriesTopRatedList', async ({ assert }) => {
    const r = await tmdb.tvSeriesTopRatedList()
    assert.equal(r.results.length, 20)
  })

  test('tvSeriesLatestId', async ({ assert }) => {
    const r = await tmdb.tvSeriesLatestId()
    assert.equal(typeof r.id, 'number')
  })

  test('tvSeriesAggregateCredits', async ({ assert }) => {
    const r = await tmdb.tvSeriesAggregateCredits(1622)
    assert.equal(Array.isArray(r.cast) || Array.isArray(r.crew), true)
  })

  test('tvSeriesAlternativeTitles', async ({ assert }) => {
    const r = await tmdb.tvSeriesAlternativeTitles(1622)
    assert.equal(Array.isArray(r.results), true)
  })

  test('tvSeriesContentRatings', async ({ assert }) => {
    const r = await tmdb.tvSeriesContentRatings(1622)
    assert.equal(Array.isArray(r.results), true)
  })

  test('tvSeriesCredits', async ({ assert }) => {
    const r = await tmdb.tvSeriesCredits(1622)
    assert.equal(Array.isArray(r.cast) || Array.isArray(r.crew), true)
  })

  test('tvSeriesEpisodeGroups', async ({ assert }) => {
    const r = await tmdb.tvSeriesEpisodeGroups(1622)
    assert.equal(Array.isArray(r.results), true)
  })

  test('tvSeriesExternalIds', async ({ assert }) => {
    const r = await tmdb.tvSeriesExternalIds(1622)
    assert.equal(r.imdb_id, 'tt0460681')
  })

  test('tvSeriesKeywords', async ({ assert }) => {
    const r = await tmdb.tvSeriesKeywords(1622)
    assert.equal(Array.isArray(r.results), true)
  })

  test('tvSeriesRecommendations', async ({ assert }) => {
    const r = await tmdb.tvSeriesRecommendations(1622)
    assert.equal(Array.isArray(r.results), true)
  })

  test('tvSeriesReviews', async ({ assert }) => {
    const r = await tmdb.tvSeriesReviews(1622)
    assert.equal(Array.isArray(r.results), true)
  })

  test('tvSeriesScreenedTheatrically', async ({ assert }) => {
    const r = await tmdb.tvSeriesScreenedTheatrically(1622)
    assert.equal(Array.isArray(r.results), true)
  })

  test('tvSeriesSimilar', async ({ assert }) => {
    const r = await tmdb.tvSeriesSimilar(1622)
    assert.equal(Array.isArray(r.results), true)
  })

  test('tvSeriesTranslations', async ({ assert }) => {
    const r = await tmdb.tvSeriesTranslations(1622)
    assert.equal(Array.isArray(r.translations), true)
  })

  test('tvSeriesVideos', async ({ assert }) => {
    const r = await tmdb.tvSeriesVideos(1622)
    assert.equal(Array.isArray(r.results), true)
  })

  test('tvSeriesWatchProviders', async ({ assert }) => {
    const r = await tmdb.tvSeriesWatchProviders(1622)
    assert.equal(typeof r.results, 'object')
  })

  test('tvSeasonAccountStates', async ({ assert }) => {
    const r = await tmdb.tvSeasonAccountStates(1622, 1)
    assert.equal(r.results.length, 22)
  })

  test('tvSeasonAggregateCredits', async ({ assert }) => {
    const r = await tmdb.tvSeasonAggregateCredits(1622, 1)
    assert.equal(Array.isArray(r.cast) || Array.isArray(r.crew), true)
  })

  test('tvSeasonChangesById', async ({ assert }) => {
    const season = await tmdb.tvSeasonDetails(1622, 1)
    const r = await tmdb.tvSeasonChangesById(season.id)
    assert.equal(Array.isArray(r.changes), true)
  })

  test('tvSeasonCredits', async ({ assert }) => {
    const r = await tmdb.tvSeasonCredits(1622, 1)
    assert.equal(Array.isArray(r.cast) || Array.isArray(r.crew), true)
  })

  test('tvSeasonExternalIds', async ({ assert }) => {
    const r = await tmdb.tvSeasonExternalIds(1622, 1)
    assert.equal(typeof r.id, 'number')
  })

  test('tvSeasonTranslations', async ({ assert }) => {
    const r = await tmdb.tvSeasonTranslations(1622, 1)
    assert.equal(Array.isArray(r.translations), true)
  })

  test('tvSeasonVideos', async ({ assert }) => {
    const r = await tmdb.tvSeasonVideos(1622, 1)
    assert.equal(Array.isArray(r.results), true)
  })

  test('tvEpisodeCredits', async ({ assert }) => {
    const r = await tmdb.tvEpisodeCredits(1622, 1, 5)
    assert.equal(Array.isArray(r.cast) || Array.isArray(r.crew), true)
  })

  test('tvEpisodeExternalIds', async ({ assert }) => {
    const r = await tmdb.tvEpisodeExternalIds(1622, 1, 5)
    assert.equal(typeof r.id, 'number')
  })

  test('tvEpisodeTranslations', async ({ assert }) => {
    const r = await tmdb.tvEpisodeTranslations(1622, 1, 5)
    assert.equal(Array.isArray(r.translations), true)
  })

  test('tvEpisodeVideos', async ({ assert }) => {
    const r = await tmdb.tvEpisodeVideos(1622, 1, 5)
    assert.equal(Array.isArray(r.results), true)
  })

  test('certificationsTvList', async ({ assert }) => {
    const r = await tmdb.certificationsTvList()
    assert.equal(typeof r.certifications, 'object')
  })

  test('changesTvList', async ({ assert }) => {
    const r = await tmdb.changesTvList()
    assert.equal(Array.isArray(r.results), true)
  })

  test('genreTvList', async ({ assert }) => {
    const r = await tmdb.genreTvList()
    assert.equal(Array.isArray(r.genres) && r.genres.length > 0, true)
  })

  test('watchProviderTvList', async ({ assert }) => {
    const r = await tmdb.watchProviderTvList()
    assert.equal(Array.isArray(r.results), true)
  })

  test('tvSeasonWatchProviders', async ({ assert }) => {
    const r = await tmdb.tvSeasonWatchProviders(1622, 1)
    assert.equal(typeof r.results, 'object')
  })

  test('tvEpisodeChangesById', async ({ assert }) => {
    const ep = await tmdb.tvEpisodeDetails(1622, 1, 5)
    const r = await tmdb.tvEpisodeChangesById(ep.id)
    assert.equal(Array.isArray(r.changes), true)
  })

  test('tvEpisodeGroupDetails', async ({ assert }) => {
    const groups = await tmdb.tvSeriesEpisodeGroups(1622)
    if (Array.isArray(groups.results) && groups.results.length > 0) {
      const r = await tmdb.tvEpisodeGroupDetails(groups.results[0].id)
      assert.equal(typeof r.id, 'string')
    } else {
      // If no groups exist, ensure results is an array
      assert.equal(Array.isArray(groups.results), true)
    }
  })

  test.skip('tvSeriesAddRating', async ({ assert }) => {})

  test.skip('tvSeriesDeleteRating', async ({ assert }) => {})

  test.skip('tvEpisodeAddRating', async ({ assert }) => {})

  test.skip('tvEpisodeDeleteRating', async ({ assert }) => {})

  test.skip('guestSessionRatedTv', async ({ assert }) => {})

  test.skip('guestSessionRatedTvEpisodes', async ({ assert }) => {})
})

describe('person', () => {
  test('searchPerson', async ({ assert }) => {
    const r = await tmdb.searchPerson('Jensen Ackles')
    const person = r.results.find((p) => p.name === 'Jensen Ackles')
    assert.equal(!!person, true)
  })

  test('personDetails', async ({ assert }) => {
    const r = await tmdb.personDetails(11073)
    assert.equal(r.name, 'Lara Harris')
  })

  test('personChanges', async ({ assert }) => {
    const r = await tmdb.personChanges(11073)
    assert.equal(Array.isArray(r.changes), true)
  })

  test('personImages', async ({ assert }) => {
    const r = await tmdb.personImages(11073)
    assert.equal(Array.isArray(r.profiles), true)
  })

  test('personCombinedCredits', async ({ assert }) => {
    const r = await tmdb.personCombinedCredits(11073)
    assert.equal(Array.isArray(r.cast) || Array.isArray(r.crew), true)
  })

  test('personExternalIds', async ({ assert }) => {
    const r = await tmdb.personExternalIds(11073)
    assert.equal(typeof r.imdb_id, 'string')
  })

  test('personTaggedImages', async ({ assert }) => {
    const r = await tmdb.personTaggedImages(11073)
    assert.equal(Array.isArray(r.results), true)
  })

  test('personPopularList', async ({ assert }) => {
    const r = await tmdb.personPopularList()
    assert.equal(r.results.length, 20)
  })

  test('personLatestId', async ({ assert }) => {
    const r = await tmdb.personLatestId()
    assert.equal(typeof r.id, 'number')
  })
})

describe('company', () => {
  test('companyDetails', async ({ assert }) => {
    const r = await tmdb.companyDetails(213)
    assert.equal(r.name, "Cooper's Town")
  })

  test('companyAlternativeNames', async ({ assert }) => {
    const r = await tmdb.companyAlternativeNames(213)
    assert.equal(Array.isArray(r.results), true)
  })

  test('companyImages', async ({ assert }) => {
    const r = await tmdb.companyImages(213)
    assert.equal(Array.isArray(r.logos), true)
  })

  test('searchCompany', async ({ assert }) => {
    const r = await tmdb.searchCompany('Netflix')
    const item = r.results.find((x) => x.name === 'Netflix')
    assert.equal(!!item, true)
  })
})

describe('configuration', () => {
  test('configurationDetails', async ({ assert }) => {
    const r = await tmdb.configurationDetails()
    assert.equal(typeof r.images.base_url, 'string')
  })

  test('configurationCountries', async ({ assert }) => {
    const r = await tmdb.configurationCountries()
    assert.equal(!!r.find((c) => c.iso_3166_1 === 'US'), true)
  })

  test('configurationJobs', async ({ assert }) => {
    const r = await tmdb.configurationJobs()
    assert.equal(Array.isArray(r) && r.length > 0, true)
  })

  test('configurationLanguages', async ({ assert }) => {
    const r = await tmdb.configurationLanguages()
    assert.equal(!!r.find((l) => l.iso_639_1 === 'en'), true)
  })

  test('configurationPrimaryTranslations', async ({ assert }) => {
    const r = await tmdb.configurationPrimaryTranslations()
    assert.equal(r.includes('en-US'), true)
  })

  test('configurationTimezones', async ({ assert }) => {
    const r = await tmdb.configurationTimezones()
    assert.equal(!!r.find((z) => z.iso_3166_1 === 'US'), true)
  })
})

describe('collection', () => {
  test('collectionDetails', async ({ assert }) => {
    const r = await tmdb.collectionDetails(10)
    assert.equal(r.name.includes('Star Wars'), true)
  })

  test('collectionImages', async ({ assert }) => {
    const r = await tmdb.collectionImages(10)
    assert.equal(Array.isArray(r.backdrops) || Array.isArray(r.posters), true)
  })

  test('collectionTranslations', async ({ assert }) => {
    const r = await tmdb.collectionTranslations(10)
    assert.equal(Array.isArray(r.translations), true)
  })

  test('searchCollection', async ({ assert }) => {
    const r = await tmdb.searchCollection('star wars')
    const item = r.results.find((x) => x.name.includes('Star Wars'))
    assert.equal(!!item, true)
  })
})

describe('other', () => {
  test('searchMulti', async ({ assert }) => {
    const r = await tmdb.searchMulti('goonies')
    assert.equal(
      r.results.some((x) => x.media_type === 'movie'),
      true
    )
  })

  test('trendingAll', async ({ assert }) => {
    const r = await tmdb.trendingAll()
    assert.equal(r.results.length, 20)
  })

  test('trendingPeople', async ({ assert }) => {
    const r = await tmdb.trendingPeople()
    assert.equal(r.results.length, 20)
  })

  test('findById', async ({ assert }) => {
    const r = await tmdb.findById('tt0089218', 'imdb_id')
    assert.equal(Array.isArray(r.movie_results) && r.movie_results[0].id === 9340, true)
  })

  test('translations', async ({ assert }) => {
    const r = await tmdb.translations(11073)
    assert.equal(Array.isArray(r.translations), true)
  })

  test('changesPeopleList', async ({ assert }) => {
    const r = await tmdb.changesPeopleList()
    assert.equal(Array.isArray(r.results), true)
  })

  test('creditDetails', async ({ assert }) => {
    const creds = await tmdb.movieCredits(9340)
    const creditId = creds.cast[0]?.credit_id || creds.crew[0]?.credit_id
    const r = await tmdb.creditDetails(creditId)
    assert.equal(typeof r.credit_type, 'string')
  })

  test('watchProvidersAvailableRegions', async ({ assert }) => {
    const r = await tmdb.watchProvidersAvailableRegions()
    assert.equal(Array.isArray(r.results) && r.results.some((x) => x.iso_3166_1 === 'US'), true)
  })

  test('keywordDetails', async ({ assert }) => {
    const kws = await tmdb.movieKeywords(9340)
    const firstKw = kws.keywords[0]
    const r = await tmdb.keywordDetails(firstKw.id)
    assert.equal(r.id, firstKw.id)
  })

  test('networkDetails', async ({ assert }) => {
    const r = await tmdb.networkDetails(213)
    assert.equal(r.name, 'Netflix')
  })

  test('reviewDetails', async ({ assert }) => {
    const r = await tmdb.reviewDetails('5c337a2a925141635e73acf5')
    assert.equal(r.author, 'John Chard')
  })

  test('searchKeyword', async ({ assert }) => {
    const r = await tmdb.searchKeyword('treasure')
    assert.equal(Array.isArray(r.results) && r.results.length > 0, true)
  })

  test('networkAlternativeNames', async ({ assert }) => {
    const r = await tmdb.networkAlternativeNames(213)
    assert.equal(r.results.length > 2, true)
  })

  test('networkImages', async ({ assert }) => {
    const r = await tmdb.networkImages(213)
    assert.equal(r.logos.length > 1, true)
  })
})

describe('authentication', () => {
  test.skip('authenticationCreateGuestSession', async ({ assert }) => {})

  test.skip('authenticationCreateRequestToken', async ({ assert }) => {})

  test.skip('authenticationCreateSession', async ({ assert }) => {})

  test.skip('authenticationDeleteSession', async ({ assert }) => {})

  test.skip('authenticationValidateKey', async ({ assert }) => {})

  test.skip('authenticationCreateSessionFromLogin', async ({ assert }) => {})
})

describe('account', () => {
  test.skip('movieAccountStates', async ({ assert }) => {})

  test.skip('tvSeriesAccountStates', async ({ assert }) => {})

  test.skip('tvEpisodeAccountStates', async ({ assert }) => {})

  test.skip('tvSeasonAccountStates', async ({ assert }) => {})

  test.skip('accountDetails', async ({ assert }) => {})

  test.skip('accountLists', async ({ assert }) => {})

  test.skip('accountGetFavorites', async ({ assert }) => {})

  test.skip('accountFavoriteTv', async ({ assert }) => {})

  test.skip('accountRatedMovies', async ({ assert }) => {})

  test.skip('accountRatedTv', async ({ assert }) => {})

  test.skip('accountRatedTvEpisodes', async ({ assert }) => {})

  test.skip('accountWatchlistMovies', async ({ assert }) => {})

  test.skip('accountWatchlistTv', async ({ assert }) => {})

  test.skip('accountAddFavorite', async ({ assert }) => {})

  test.skip('accountAddToWatchlist', async ({ assert }) => {})
})

describe('lists', () => {
  test.skip('listDetails', async ({ assert }) => {})

  test.skip('listDelete', async ({ assert }) => {})

  test.skip('listCheckItemStatus', async ({ assert }) => {})

  test.skip('listCreate', async ({ assert }) => {})

  test.skip('listAddMovie', async ({ assert }) => {})

  test.skip('listRemoveMovie', async ({ assert }) => {})

  test.skip('listClear', async ({ assert }) => {})

  test.skip('listsCopy', async ({ assert }) => {})
})
