// Import Fetcher Module
import { fetcher } from '../../utils'

// Next Wrapper
export const next = (url) => fetch(url).then((res) => res.json())

// Get Games { standart, byGenre, byPlatform }
export const games = (ordering = 'added', platforms = '4') =>
	fetcher(`/games?ordering=${ordering}&platforms=${platforms}`)

export const getGamesByGenre = (genre) => fetcher(`/games?genres=${genre}`)

export const getGamesByPlatform = (platform) =>
	fetcher(`/games?platforms=${platform}`)

// Get Game { screenshots, bySearch, bySlug }
export const getGameScreenshotsBySlug = (slug) =>
	fetcher(`/games/${slug}/screenshots`)
export const getGameBySearch = (query) => fetcher(`/games?search=${query}`)
export const getGameBySlug = (slug) => fetcher(`/games/${slug}`)

// Discover { genres, platforms }
export const getGenres = () => fetcher('/genres')
export const getPlatforms = () => fetcher('/platforms')
