import { test, describe } from 'node:test'
import TmDB from './TmDB.js'

const { TMDB_API_KEY } = process.env

if (!TMDB_API_KEY) {
  throw new Error('Please set TMDB_API_KEY')
}

const tmdb = new TmDB(TMDB_API_KEY)

describe('movie', () => {
  test('searchMovie', async ({ assert }) => {
    const r = await tmdb.searchMovie("Goonies")
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

  test.skip('movieImages', async ({ assert }) => {
  })
  test.skip('trendingMovies', async ({ assert }) => {
  })
  test.skip('movieAlternativeTitles', async ({ assert }) => {
  })
  test.skip('movieChanges', async ({ assert }) => {
  })
  test.skip('movieCredits', async ({ assert }) => {
  })
  test.skip('movieExternalIds', async ({ assert }) => {
  })
  test.skip('movieKeywords', async ({ assert }) => {
  })
  test.skip('movieLists', async ({ assert }) => {
  })
  test.skip('movieRecommendations', async ({ assert }) => {
  })
  test.skip('movieReleaseDates', async ({ assert }) => {
  })
  test.skip('movieReviews', async ({ assert }) => {
  })
  test.skip('movieSimilar', async ({ assert }) => {
  })
  test.skip('movieTranslations', async ({ assert }) => {
  })
  test.skip('movieVideos', async ({ assert }) => {
  })
  test.skip('movieWatchProviders', async ({ assert }) => {
  })
  test.skip('movieAddRating', async ({ assert }) => {
  })
  test.skip('movieDeleteRating', async ({ assert }) => {
  })
  test.skip('personMovieCredits', async ({ assert }) => {
  })
  test.skip('moviePopularList', async ({ assert }) => {
  })
  test.skip('movieTopRatedList', async ({ assert }) => {
  })
  test.skip('movieUpcomingList', async ({ assert }) => {
  })
  test.skip('movieNowPlayingList', async ({ assert }) => {
  })
  test.skip('movieLatestId', async ({ assert }) => {
  })
  test.skip('certificationMovieList', async ({ assert }) => {
  })
  test.skip('changesMovieList', async ({ assert }) => {
  })
  test.skip('genreMovieList', async ({ assert }) => {
  })
  test.skip('guestSessionRatedMovies', async ({ assert }) => {
  })
  test.skip('watchProvidersMovieList', async ({ assert }) => {
  })
  test.skip('keywordMovies', async ({ assert }) => {
  })
})
describe('tv', () => {
  test.skip('tvSeriesDetails', async ({ assert }) => {
  })
  test.skip('searchTv', async ({ assert }) => {
  })
  test.skip('tvSeasonDetails', async ({ assert }) => {
  })
  test.skip('tvEpisodeDetails', async ({ assert }) => {
  })
  test.skip('discoverTv', async ({ assert }) => {
  })
  test.skip('tvSeriesImages', async ({ assert }) => {
  })
  test.skip('tvSeasonImages', async ({ assert }) => {
  })
  test.skip('tvEpisodeImages', async ({ assert }) => {
  })
  test.skip('trendingTv', async ({ assert }) => {
  })
  test.skip('tvSeriesChanges', async ({ assert }) => {
  })
  test.skip('personTvCredits', async ({ assert }) => {
  })
  test.skip('tvSeriesAiringTodayList', async ({ assert }) => {
  })
  test.skip('tvSeriesOnTheAirList', async ({ assert }) => {
  })
  test.skip('tvSeriesPopularList', async ({ assert }) => {
  })
  test.skip('tvSeriesTopRatedList', async ({ assert }) => {
  })
  test.skip('tvSeriesLatestId', async ({ assert }) => {
  })
  test.skip('tvSeriesAggregateCredits', async ({ assert }) => {
  })
  test.skip('tvSeriesAlternativeTitles', async ({ assert }) => {
  })
  test.skip('tvSeriesContentRatings', async ({ assert }) => {
  })
  test.skip('tvSeriesCredits', async ({ assert }) => {
  })
  test.skip('tvSeriesEpisodeGroups', async ({ assert }) => {
  })
  test.skip('tvSeriesExternalIds', async ({ assert }) => {
  })
  test.skip('tvSeriesKeywords', async ({ assert }) => {
  })
  test.skip('tvSeriesRecommendations', async ({ assert }) => {
  })
  test.skip('tvSeriesReviews', async ({ assert }) => {
  })
  test.skip('tvSeriesScreenedTheatrically', async ({ assert }) => {
  })
  test.skip('tvSeriesSimilar', async ({ assert }) => {
  })
  test.skip('tvSeriesTranslations', async ({ assert }) => {
  })
  test.skip('tvSeriesVideos', async ({ assert }) => {
  })
  test.skip('tvSeriesWatchProviders', async ({ assert }) => {
  })
  test.skip('tvSeriesAddRating', async ({ assert }) => {
  })
  test.skip('tvSeriesDeleteRating', async ({ assert }) => {
  })
  test.skip('tvSeasonAggregateCredits', async ({ assert }) => {
  })
  test.skip('tvSeasonChangesById', async ({ assert }) => {
  })
  test.skip('tvSeasonCredits', async ({ assert }) => {
  })
  test.skip('tvSeasonExternalIds', async ({ assert }) => {
  })
  test.skip('tvSeasonTranslations', async ({ assert }) => {
  })
  test.skip('tvSeasonVideos', async ({ assert }) => {
  })
  test.skip('tvEpisodeCredits', async ({ assert }) => {
  })
  test.skip('tvEpisodeExternalIds', async ({ assert }) => {
  })
  test.skip('tvEpisodeTranslations', async ({ assert }) => {
  })
  test.skip('tvEpisodeVideos', async ({ assert }) => {
  })
  test.skip('tvEpisodeAddRating', async ({ assert }) => {
  })
  test.skip('tvEpisodeDeleteRating', async ({ assert }) => {
  })
  test.skip('certificationsTvList', async ({ assert }) => {
  })
  test.skip('changesTvList', async ({ assert }) => {
  })
  test.skip('genreTvList', async ({ assert }) => {
  })
  test.skip('guestSessionRatedTv', async ({ assert }) => {
  })
  test.skip('guestSessionRatedTvEpisodes', async ({ assert }) => {
  })
  test.skip('watchProviderTvList', async ({ assert }) => {
  })
  test.skip('tvSeasonWatchProviders', async ({ assert }) => {
  })
  test.skip('tvEpisodeChangesById', async ({ assert }) => {
  })
  test.skip('tvEpisodeGroupDetails', async ({ assert }) => {
  })
})
describe('authentication', () => {
  test.skip('authenticationCreateGuestSession', async ({ assert }) => {
  })
  test.skip('authenticationCreateRequestToken', async ({ assert }) => {
  })
  test.skip('authenticationCreateSession', async ({ assert }) => {
  })
  test.skip('authenticationDeleteSession', async ({ assert }) => {
  })
  test.skip('authenticationValidateKey', async ({ assert }) => {
  })
  test.skip('authenticationCreateSessionFromLogin', async ({ assert }) => {
  })
})
describe('person', () => {
  test.skip('searchPerson', async ({ assert }) => {
  })
  test.skip('personDetails', async ({ assert }) => {
  })
  test.skip('personChanges', async ({ assert }) => {
  })
  test.skip('personImages', async ({ assert }) => {
  })
  test.skip('personCombinedCredits', async ({ assert }) => {
  })
  test.skip('personExternalIds', async ({ assert }) => {
  })
  test.skip('personTaggedImages', async ({ assert }) => {
  })
  test.skip('personPopularList', async ({ assert }) => {
  })
  test.skip('personLatestId', async ({ assert }) => {
  })
})
describe('account', () => {
  test.skip('movieAccountStates', async ({ assert }) => {
  })
  test.skip('tvSeriesAccountStates', async ({ assert }) => {
  })
  test.skip('tvEpisodeAccountStates', async ({ assert }) => {
  })
  test.skip('tvSeasonAccountStates', async ({ assert }) => {
  })
  test.skip('accountDetails', async ({ assert }) => {
  })
  test.skip('accountLists', async ({ assert }) => {
  })
  test.skip('accountGetFavorites', async ({ assert }) => {
  })
  test.skip('accountFavoriteTv', async ({ assert }) => {
  })
  test.skip('accountRatedMovies', async ({ assert }) => {
  })
  test.skip('accountRatedTv', async ({ assert }) => {
  })
  test.skip('accountRatedTvEpisodes', async ({ assert }) => {
  })
  test.skip('accountWatchlistMovies', async ({ assert }) => {
  })
  test.skip('accountWatchlistTv', async ({ assert }) => {
  })
  test.skip('accountAddFavorite', async ({ assert }) => {
  })
  test.skip('accountAddToWatchlist', async ({ assert }) => {
  })
})
describe('other', () => {
  test.skip('searchMulti', async ({ assert }) => {
  })
  test.skip('trendingAll', async ({ assert }) => {
  })
  test.skip('trendingPeople', async ({ assert }) => {
  })
  test.skip('findById', async ({ assert }) => {
  })
  test.skip('translations', async ({ assert }) => {
  })
  test.skip('changesPeopleList', async ({ assert }) => {
  })
  test.skip('creditDetails', async ({ assert }) => {
  })
  test.skip('watchProvidersAvailableRegions', async ({ assert }) => {
  })
  test.skip('keywordDetails', async ({ assert }) => {
  })
  test.skip('networkDetails', async ({ assert }) => {
  })
  test.skip('detailsCopy', async ({ assert }) => {
  })
  test.skip('alternativeNamesCopy', async ({ assert }) => {
  })
  test.skip('reviewDetails', async ({ assert }) => {
  })
  test.skip('searchKeyword', async ({ assert }) => {
  })
})
describe('lists', () => {
  test.skip('listDetails', async ({ assert }) => {
  })
  test.skip('listDelete', async ({ assert }) => {
  })
  test.skip('listCheckItemStatus', async ({ assert }) => {
  })
  test.skip('listCreate', async ({ assert }) => {
  })
  test.skip('listAddMovie', async ({ assert }) => {
  })
  test.skip('listRemoveMovie', async ({ assert }) => {
  })
  test.skip('listClear', async ({ assert }) => {
  })
  test.skip('listsCopy', async ({ assert }) => {
  })
})
describe('company', () => {
  test.skip('companyDetails', async ({ assert }) => {
  })
  test.skip('companyAlternativeNames', async ({ assert }) => {
  })
  test.skip('companyImages', async ({ assert }) => {
  })
  test.skip('searchCompany', async ({ assert }) => {
  })
})
describe('configuration', () => {
  test.skip('configurationDetails', async ({ assert }) => {
  })
  test.skip('configurationCountries', async ({ assert }) => {
  })
  test.skip('configurationJobs', async ({ assert }) => {
  })
  test.skip('configurationLanguages', async ({ assert }) => {
  })
  test.skip('configurationPrimaryTranslations', async ({ assert }) => {
  })
  test.skip('configurationTimezones', async ({ assert }) => {
  })
})
describe('collection', () => {
  test.skip('collectionDetails', async ({ assert }) => {
  })
  test.skip('collectionImages', async ({ assert }) => {
  })
  test.skip('collectionTranslations', async ({ assert }) => {
  })
  test.skip('searchCollection', async ({ assert }) => {
  })
})