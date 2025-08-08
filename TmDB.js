export default class TmDB {
  constructor(token) {
    this.token = token
  }

  // perform API request
  async q(u, params = {}, body) {
    const options = { headers: { accept: `application/json`, authorization: `Bearer ${this.token}` } }
    const url = new URL(`https://api.themoviedb.org/3/${u}`)
    url.search = new URLSearchParams(params)
    if (body) {
      options.headers[`content-type`] = `application/json`
      options.body = JSON.stringify(body)
      options.method = `POST`
    }
    const r = await fetch(url.toString(), options).then((r) => r.json())
    if (r?.success === false) {
      throw new Error(r?.status_message || 'TmDB request failed.')
    }
    return r
  }

  // Movie
  searchMovie(query, o = {}) {
    return this.q(`search/movie`, { query, ...o })
  }
  // Movie
  discoverMovie(o = {}) {
    return this.q(`discover/movie`, o)
  }
  // Details
  movieDetails(movie_id, o = {}) {
    return this.q(`movie/${movie_id}`, o)
  }
  // Details
  tvSeriesDetails(series_id, o = {}) {
    return this.q(`tv/${series_id}`, o)
  }
  // TV
  searchTv(query, o = {}) {
    return this.q(`search/tv`, { query, ...o })
  }
  // Multi
  searchMulti(query, o = {}) {
    return this.q(`search/multi`, { query, ...o })
  }
  // Person
  searchPerson(query, o = {}) {
    return this.q(`search/person`, { query, ...o })
  }
  // Details
  configurationDetails() {
    return this.q(`configuration`, {})
  }
  // Details
  tvSeasonDetails(series_id, season_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}`, o)
  }
  // Details
  tvEpisodeDetails(series_id, season_number, episode_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/episode/${episode_number}`, o)
  }
  // TV
  discoverTv(o = {}) {
    return this.q(`discover/tv`, o)
  }
  // Images
  movieImages(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/images`, o)
  }
  // Images
  tvSeriesImages(series_id, o = {}) {
    return this.q(`tv/${series_id}/images`, o)
  }
  // Images
  tvSeasonImages(series_id, season_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/images`, o)
  }
  // Images
  tvEpisodeImages(series_id, season_number, episode_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/episode/${episode_number}/images`, o)
  }
  // All
  trendingAll(time_window='day', o = {}) {
    return this.q(`trending/all/${time_window}`, o)
  }
  // Movies
  trendingMovies(time_window='day', o = {}) {
    return this.q(`trending/movie/${time_window}`, o)
  }
  // TV
  trendingTv(time_window='day', o = {}) {
    return this.q(`trending/tv/${time_window}`, o)
  }
  // Account States
  movieAccountStates(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/account_states`, o)
  }
  // Account States
  tvSeriesAccountStates(series_id, o = {}) {
    return this.q(`tv/${series_id}/account_states`, o)
  }
  // Account States
  tvEpisodeAccountStates(series_id, season_number, episode_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/episode/${episode_number}/account_states`, o)
  }
  // People
  trendingPeople(time_window='day', o = {}) {
    return this.q(`trending/person/${time_window}`, o)
  }
  // Alternative Titles
  movieAlternativeTitles(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/alternative_titles`, o)
  }
  // Changes
  movieChanges(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/changes`, o)
  }
  // Credits
  movieCredits(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/credits`, o)
  }
  // External IDs
  movieExternalIds(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/external_ids`, o)
  }
  // Keywords
  movieKeywords(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/keywords`, o)
  }
  // Lists
  movieLists(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/lists`, o)
  }
  // Recommendations
  movieRecommendations(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/recommendations`, o)
  }
  // Release Dates
  movieReleaseDates(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/release_dates`, o)
  }
  // Reviews
  movieReviews(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/reviews`, o)
  }
  // Similar
  movieSimilar(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/similar`, o)
  }
  // Translations
  movieTranslations(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/translations`, o)
  }
  // Videos
  movieVideos(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/videos`, o)
  }
  // Watch Providers
  movieWatchProviders(movie_id, o = {}) {
    return this.q(`movie/${movie_id}/watch/providers`, o)
  }
  // Add Rating
  movieAddRating(movie_id, o = {}, body) {
    return this.q(`movie/${movie_id}/rating`, o, body)
  }
  // Delete Rating
  movieDeleteRating(o = {}) {
    return this.q(`movie/${movie_id}/rating`, o)
  }
  // Create Guest Session
  authenticationCreateGuestSession(o = {}) {
    return this.q(`authentication/guest_session/new`, o)
  }
  // Create Request Token
  authenticationCreateRequestToken(o = {}) {
    return this.q(`authentication/token/new`, o)
  }
  // Create Session
  authenticationCreateSession(body, o = {}) {
    return this.q(`authentication/session/new`, o, body)
  }
  // Delete Session
  authenticationDeleteSession(o = {}) {
    return this.q(`authentication/session`, o)
  }
  // Find By ID
  findById(external_id, external_source, o = {}) {
    return this.q(`find/${external_id}`, { external_source, ...o })
  }
  // Details
  personDetails(person_id, o = {}) {
    return this.q(`person/${person_id}`, o)
  }
  // Changes
  personChanges(person_id, o = {}) {
    return this.q(`person/${person_id}/changes`, o)
  }
  // Changes
  tvSeriesChanges(series_id, o = {}) {
    return this.q(`tv/${series_id}/changes`, o)
  }
  // Images
  personImages(person_id, o = {}) {
    return this.q(`person/${person_id}/images`, o)
  }
  // Movie Credits
  personMovieCredits(person_id, o = {}) {
    return this.q(`person/${person_id}/movie_credits`, o)
  }
  // TV Credits
  personTvCredits(person_id, o = {}) {
    return this.q(`person/${person_id}/tv_credits`, o)
  }
  // Combined Credits
  personCombinedCredits(person_id, o = {}) {
    return this.q(`person/${person_id}/combined_credits`, o)
  }
  // External IDs
  personExternalIds(person_id, o = {}) {
    return this.q(`person/${person_id}/external_ids`, o)
  }
  // Tagged Images
  personTaggedImages(person_id, o = {}) {
    return this.q(`person/${person_id}/tagged_images`, o)
  }
  // Translations
  translations(person_id, o = {}) {
    return this.q(`person/${person_id}/translations`, o)
  }
  // Popular
  personPopularList(o = {}) {
    return this.q(`person/popular`, o)
  }
  // Popular
  moviePopularList(o = {}) {
    return this.q(`movie/popular`, o)
  }
  // Top Rated
  movieTopRatedList(o = {}) {
    return this.q(`movie/top_rated`, o)
  }
  // Upcoming
  movieUpcomingList(o = {}) {
    return this.q(`movie/upcoming`, o)
  }
  // Now Playing
  movieNowPlayingList(o = {}) {
    return this.q(`movie/now_playing`, o)
  }
  // Airing Today
  tvSeriesAiringTodayList(o = {}) {
    return this.q(`tv/airing_today`, o)
  }
  // On The Air
  tvSeriesOnTheAirList(o = {}) {
    return this.q(`tv/on_the_air`, o)
  }
  // Popular
  tvSeriesPopularList(o = {}) {
    return this.q(`tv/popular`, o)
  }
  // Top Rated
  tvSeriesTopRatedList(o = {}) {
    return this.q(`tv/top_rated`, o)
  }
  // Latest
  movieLatestId() {
    return this.q(`movie/latest`, {})
  }
  // Latest
  tvSeriesLatestId() {
    return this.q(`tv/latest`, {})
  }
  // Aggregate Credits
  tvSeriesAggregateCredits(series_id, o = {}) {
    return this.q(`tv/${series_id}/aggregate_credits`, o)
  }
  // Alternative Titles
  tvSeriesAlternativeTitles(series_id, o = {}) {
    return this.q(`tv/${series_id}/alternative_titles`, o)
  }
  // Content Ratings
  tvSeriesContentRatings(series_id, o = {}) {
    return this.q(`tv/${series_id}/content_ratings`, o)
  }
  // Credits
  tvSeriesCredits(series_id, o = {}) {
    return this.q(`tv/${series_id}/credits`, o)
  }
  // Episode Groups
  tvSeriesEpisodeGroups(series_id, o = {}) {
    return this.q(`tv/${series_id}/episode_groups`, o)
  }
  // External IDs
  tvSeriesExternalIds(series_id, o = {}) {
    return this.q(`tv/${series_id}/external_ids`, o)
  }
  // Keywords
  tvSeriesKeywords(series_id, o = {}) {
    return this.q(`tv/${series_id}/keywords`, o)
  }
  // Recommendations
  tvSeriesRecommendations(series_id, o = {}) {
    return this.q(`tv/${series_id}/recommendations`, o)
  }
  // Reviews
  tvSeriesReviews(series_id, o = {}) {
    return this.q(`tv/${series_id}/reviews`, o)
  }
  // Screened Theatrically
  tvSeriesScreenedTheatrically(series_id, o = {}) {
    return this.q(`tv/${series_id}/screened_theatrically`, o)
  }
  // Similar
  tvSeriesSimilar(series_id, o = {}) {
    return this.q(`tv/${series_id}/similar`, o)
  }
  // Translations
  tvSeriesTranslations(series_id, o = {}) {
    return this.q(`tv/${series_id}/translations`, o)
  }
  // Videos
  tvSeriesVideos(series_id, o = {}) {
    return this.q(`tv/${series_id}/videos`, o)
  }
  // Watch Providers
  tvSeriesWatchProviders(series_id, o = {}) {
    return this.q(`tv/${series_id}/watch/providers`, o)
  }
  // Add Rating
  tvSeriesAddRating(series_id, o = {}, body = {}) {
    return this.q(`tv/${series_id}/rating`, o, body)
  }
  // Delete Rating
  tvSeriesDeleteRating(series_id, o = {}) {
    return this.q(`tv/${series_id}/rating`, o)
  }
  // Account States
  tvSeasonAccountStates(series_id, season_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/account_states`, o)
  }
  // Aggregate Credits
  tvSeasonAggregateCredits(series_id, season_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/aggregate_credits`, o)
  }
  // Changes
  tvSeasonChangesById(season_id, o = {}) {
    return this.q(`tv/season/${season_id}/changes`, o)
  }
  // Credits
  tvSeasonCredits(series_id, season_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/credits`, o)
  }
  // External IDs
  tvSeasonExternalIds(series_id, season_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/external_ids`, o)
  }
  // Translations
  tvSeasonTranslations(series_id, season_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/translations`, o)
  }
  // Videos
  tvSeasonVideos(series_id, season_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/videos`, o)
  }
  // Credits
  tvEpisodeCredits(series_id, season_number, episode_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/episode/${episode_number}/credits`, o)
  }
  // External IDs
  tvEpisodeExternalIds(series_id, season_number, episode_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/episode/${episode_number}/external_ids`, o)
  }
  // Translations
  tvEpisodeTranslations(series_id, season_number, episode_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/episode/${episode_number}/translations`, o)
  }
  // Videos
  tvEpisodeVideos(series_id, season_number, episode_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/episode/${episode_number}/videos`, o)
  }
  // Add Rating
  tvEpisodeAddRating(series_id, season_number, episode_number, o = {}, body) {
    return this.q(`tv/${series_id}/season/${season_number}/episode/${episode_number}/rating`, o, body)
  }
  // Delete Rating
  tvEpisodeDeleteRating(series_id, season_number, episode_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/episode/${episode_number}/rating`, o)
  }
  // Details
  accountDetails(account_id, o = {}) {
    return this.q(`account/${account_id}`, o)
  }
  // Lists
  accountLists(account_id, o = {}) {
    return this.q(`account/${account_id}/lists`, o)
  }
  // Favorite Movies
  accountGetFavorites(account_id, o = {}) {
    return this.q(`account/${account_id}/favorite/movies`, o)
  }
  // Favorite TV
  accountFavoriteTv(account_id, o = {}) {
    return this.q(`account/${account_id}/favorite/tv`, o)
  }
  // Rated Movies
  accountRatedMovies(account_id, o = {}) {
    return this.q(`account/${account_id}/rated/movies`, o)
  }
  // Rated TV
  accountRatedTv(account_id, o = {}) {
    return this.q(`account/${account_id}/rated/tv`, o)
  }
  // Rated TV Episodes
  accountRatedTvEpisodes(account_id, o = {}) {
    return this.q(`account/${account_id}/rated/tv/episodes`, o)
  }
  // Watchlist Movies
  accountWatchlistMovies(account_id, o = {}) {
    return this.q(`account/${account_id}/watchlist/movies`, o)
  }
  // Watchlist TV
  accountWatchlistTv(account_id, o = {}) {
    return this.q(`account/${account_id}/watchlist/tv`, o)
  }
  // Add Favorite
  accountAddFavorite(account_id, o = {}, body) {
    return this.q(`account/${account_id}/favorite`, o, body)
  }
  // Add To Watchlist
  accountAddToWatchlist(account_id, o = {}, body) {
    return this.q(`account/${account_id}/watchlist`, o, body)
  }
  // Movie Certifications
  certificationMovieList(o = {}) {
    return this.q(`certification/movie/list`, o)
  }
  // TV Certifications
  certificationsTvList(o = {}) {
    return this.q(`certification/tv/list`, o)
  }
  // Movie List
  changesMovieList(o = {}) {
    return this.q(`movie/changes`, o)
  }
  // TV List
  changesTvList(o = {}) {
    return this.q(`tv/changes`, o)
  }
  // People List
  changesPeopleList(o = {}) {
    return this.q(`person/changes`, o)
  }
  // Details
  collectionDetails(collection_id, o = {}) {
    return this.q(`collection/${collection_id}`, o)
  }
  // Images
  collectionImages(collection_id, o = {}) {
    return this.q(`collection/${collection_id}/images`, o)
  }
  // Translations
  collectionTranslations(collection_id, o = {}) {
    return this.q(`collection/${collection_id}/translations`, o)
  }
  // Details
  companyDetails(company_id, o = {}) {
    return this.q(`company/${company_id}`, o)
  }
  // Alternative Names
  companyAlternativeNames(company_id, o = {}) {
    return this.q(`company/${company_id}/alternative_names`, o)
  }
  // Images
  companyImages(company_id, o = {}) {
    return this.q(`company/${company_id}/images`, o)
  }
  // Details
  creditDetails(credit_id, o = {}) {
    return this.q(`credit/${credit_id}`, o)
  }
  // Movie List
  genreMovieList(o = {}) {
    return this.q(`genre/movie/list`, o)
  }
  // TV List
  genreTvList(o = {}) {
    return this.q(`genre/tv/list`, o)
  }
  // Rated Movies
  guestSessionRatedMovies(guest_session_id, o = {}) {
    return this.q(`guest_session/${guest_session_id}/rated/movies`, o)
  }
  // Rated TV
  guestSessionRatedTv(guest_session_id, o = {}) {
    return this.q(`guest_session/${guest_session_id}/rated/tv`, o)
  }
  // Rated TV Episodes
  guestSessionRatedTvEpisodes(guest_session_id, o = {}) {
    return this.q(`guest_session/${guest_session_id}/rated/tv/episodes`, o)
  }
  // Available Regions
  watchProvidersAvailableRegions(o = {}) {
    return this.q(`watch/providers/regions`, o)
  }
  // Movie Providers
  watchProvidersMovieList(o = {}) {
    return this.q(`watch/providers/movie`, o)
  }
  // TV Providers
  watchProviderTvList(o = {}) {
    return this.q(`watch/providers/tv`, o)
  }
  // Details
  keywordDetails(keyword_id, o = {}) {
    return this.q(`keyword/${keyword_id}`, o)
  }
  // Movies
  keywordMovies(keyword_id, o = {}) {
    return this.q(`keyword/${keyword_id}/movies`, o)
  }
  // Details
  listDetails(list_id, o = {}) {
    return this.q(`list/${list_id}`, o)
  }
  // Delete
  listDelete(session_id, list_id) {
    return this.q(`list/${list_id}`, { session_id })
  }
  // Check Item Status
  listCheckItemStatus(list_id, o = {}) {
    return this.q(`list/${list_id}/item_status`, o)
  }
  // Create
  listCreate(session_id, body) {
    return this.q(`list`, { session_id }, body)
  }
  // Add Movie
  listAddMovie(session_id, list_id, body, o = {}) {
    return this.q(`list/${list_id}/add_item`, { session_id, ...o }, body)
  }
  // Remove Movie
  listRemoveMovie(session_id, list_id, o = {}, body) {
    return this.q(`list/${list_id}/remove_item`, { session_id, ...o }, body)
  }
  // Clear
  listClear(session_id, list_id, confirm, o = {}) {
    return this.q(`list/${list_id}/clear`, { session_id, confirm, ...o })
  }
  // Details
  networkDetails(network_id, o = {}) {
    return this.q(`network/${network_id}`, o)
  }
  // Alternative Names
  detailsCopy(network_id, o = {}) {
    return this.q(`network/${network_id}/alternative_names`, o)
  }
  // Images
  alternativeNamesCopy(network_id, o = {}) {
    return this.q(`network/${network_id}/images`, o)
  }
  // Details
  reviewDetails(review_id, o = {}) {
    return this.q(`review/${review_id}`, o)
  }
  // Validate Key
  authenticationValidateKey(o = {}) {
    return this.q(`authentication`, o)
  }
  // Watch Providers
  tvSeasonWatchProviders(series_id, season_number, o = {}) {
    return this.q(`tv/${series_id}/season/${season_number}/watch/providers`, o)
  }
  // Countries
  configurationCountries(o = {}) {
    return this.q(`configuration/countries`, o)
  }
  // Jobs
  configurationJobs(o = {}) {
    return this.q(`configuration/jobs`, o)
  }
  // Languages
  configurationLanguages(o = {}) {
    return this.q(`configuration/languages`, o)
  }
  // Primary Translations
  configurationPrimaryTranslations(o = {}) {
    return this.q(`configuration/primary_translations`, o)
  }
  // Timezones
  configurationTimezones(o = {}) {
    return this.q(`configuration/timezones`, o)
  }
  // Create Session (with login)
  authenticationCreateSessionFromLogin(body, o = {}) {
    return this.q(`authentication/token/validate_with_login`, o, body)
  }
  // Latest
  personLatestId(o = {}) {
    return this.q(`person/latest`, o)
  }
  // Changes
  tvEpisodeChangesById(episode_id, o = {}) {
    return this.q(`tv/episode/${episode_id}/changes`, o)
  }
  // Details
  tvEpisodeGroupDetails(tv_episode_group_id, o = {}) {
    return this.q(`tv/episode_group/${tv_episode_group_id}`, o)
  }
  // Company
  searchCompany(query, o = {}) {
    return this.q(`search/company`, { query, ...o })
  }
  // Collection
  searchCollection(query, o = {}) {
    return this.q(`search/collection`, { query, ...o })
  }
  // Keyword
  searchKeyword(query, o = {}) {
    return this.q(`search/keyword`, { query, ...o })
  }
  // Lists
  listsCopy(series_id, o = {}) {
    return this.q(`tv/${series_id}/lists`, o)
  }
}
