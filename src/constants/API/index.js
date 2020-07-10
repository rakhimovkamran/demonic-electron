import { fetcher } from '../../utils'

// NEXT UTIL
export const next = url =>
    fetch(url).then( res => res.json())


// GET GAMES

export const games = (ordering = 'added', platforms = '4') => 
    fetcher(`/games?ordering=${ordering}&platforms=${platforms}`)

export const getGamesByGenre = genre =>
    fetcher(`/games?genres=${genre}`)

export const getGamesByPlatform = platform =>
    fetcher(`/games?platforms=${platform}`)


// GET GAME
export const getGameScreenshotsBySlug = slug =>
    fetcher(`/games/${slug}/screenshots`)

export const getGameBySearch = query =>
    fetcher(`/games?search=${query}`)

export const getGameBySlug = slug =>
    fetcher(`/games/${slug}`)


// DISCOVER
export const getGenres = () =>
    fetcher('/genres')

export const getPlatforms = () =>
    fetcher('/platforms')