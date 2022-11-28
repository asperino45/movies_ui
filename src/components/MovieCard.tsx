import React, { useEffect } from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { MovieDto } from '../types/dto'

interface Props {
    movie: MovieDto
}

const MovieCard: React.FC<Props> = (props: Props) => {

    const movie = props.movie

    useEffect(() => {
    }, [])

    return (
        // <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Card>
            <img
                alt={movie.title}
                src={movie.movieBanner}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {movie.title}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    <p>Director: {movie.director}</p>
                    <p>Producer: {movie.producer}</p>
                </CardSubtitle>
                <CardText>
                    {movie.description}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default MovieCard

