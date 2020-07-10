const BASE_URL = 'https://api.rawg.io/api'

export const fetcher = query => fetch(BASE_URL + query).then(res => res.json())

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}