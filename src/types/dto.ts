export type PaginatedDto<T> = {
    total: number
    data: T
}

export type MovieDto = {
    id: string
    title: string
    description: string
    director: string
    producer: string
    movieBanner: string
}
