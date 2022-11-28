import axios, { AxiosResponse } from 'axios'
import { MovieDto, PaginatedDto } from '../types/dto'
import { baseUrl, getMovies, postSeed } from './api-constants'

const defaultPageLimit = 10

export class MoviesApiInstance {
    static apiInstance = axios.create({
        baseURL: baseUrl,
        timeout: 3000
    })

    static getMovies(offset: number, limit = defaultPageLimit): Promise<AxiosResponse<PaginatedDto<MovieDto[]>, any>> {
        return MoviesApiInstance.apiInstance.get<PaginatedDto<MovieDto[]>>(getMovies(offset, limit))
    }

    static getMoviesPage(page = 1): Promise<AxiosResponse<PaginatedDto<MovieDto[]>, any>> {
        return MoviesApiInstance.getMovies((page - 1) * defaultPageLimit)
    }

    static postSeed(): Promise<AxiosResponse<MovieDto[], any>> {
        return MoviesApiInstance.apiInstance.post(postSeed())
    }
}
