// Main API Base URL
const BASE_URL = 'https://api.rawg.io/api'

// Main Fetcher function
export const fetcher = (query) =>
	fetch(BASE_URL + query).then((res) => res.json())

// For generating number with separators ex : 1000 => 1,000
export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
