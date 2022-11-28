import React, { useEffect, useState } from 'react'
import { Container, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { PaginatedDto, MovieDto } from '../types/dto';
import MovieCard from '../components/MovieCard';
import { MoviesApiInstance } from '../resources/movies-api-client';
import { defaultPageLimit } from '../resources/api-constants';

const MoviesPage: React.FC = () => {
    const [movies, setMovies] = useState<PaginatedDto<MovieDto[]> | null>(null);
    const [page, setPage] = useState(1)

    useEffect(() => {
        MoviesApiInstance.getMoviesPage(page).then(res => {
            setMovies(res.data)
        })
    }, [page])

    return (
        <Container>
            <h1 >Theses are the previously imported Ghibli Studio movies.</h1>
            <Container>
                {movies != null && movies.data.length > 0 ? movies?.data.map(movie => (<MovieCard key={movie.id} movie={movie} />)) : ''}
            </Container>

            <Pagination
                aria-label="Page navigation example"
                size="sm"
            >
                <PaginationItem>
                    <PaginationLink
                        first
                        href="#"
                        onClick={() => setPage(1)}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        previous
                        onClick={() => setPage(old => old - 1)}
                    />
                </PaginationItem>

                {movies != null
                    ? Array
                        .from(Array(Math.ceil(movies.total / defaultPageLimit)).keys())
                        .map((movie, idx) => (
                            <PaginationItem key={idx + 1}>
                                <PaginationLink href="#" onClick={() => setPage(idx + 1)}>
                                    {idx + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))
                    : ''}
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        next
                        onClick={() => setPage(old => old + 1)}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        last
                        onClick={() => setPage(Math.ceil(movies != null ? movies.total / defaultPageLimit : 1))}
                    />
                </PaginationItem>
            </Pagination>
        </Container>
    )
}

export default MoviesPage
