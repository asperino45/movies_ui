export const baseUrl = 'http://localhost:4000/api'

export const defaultPageLimit = 10

export const getMovies = (offset: number, limit = defaultPageLimit): string => {
    const params = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
    })
    const url = '/movies'
    return offset != null || limit != null ? `${url}?${params}` : `${url}`
}

export const getMoviesPage = (page = 1): string => {
    return getMovies(page * defaultPageLimit - 1)
}

export const postSeed = (): string => {
    return `/movies/seed`
}
