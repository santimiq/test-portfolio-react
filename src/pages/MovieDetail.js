import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import  { MovieState } from '../movieState'

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;

    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    //UseEffect

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0])
    }, [movies,url]);


    return (
        <>
        {movie && ( //Because it takes a fraction to load if not breaks, thats why we add this
            <StyledDetails>
                <StyledHeadline>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="movie" />
                </StyledHeadline>
                <StyledAwards>
                    {movie.awards.map((award)=> (
                        <Award title={award.title} description={award.description} key={award.title} />
                    ))}
                </StyledAwards>
                <StyledImageDisplay>
                    <img src={movie.secondaryImg} alt="movie"/>
                </StyledImageDisplay>
            </StyledDetails>
        )};
        </>
    )
};

const StyledDetails = styled.div`
    color: white;
`;

const StyledHeadline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%)
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const StyledAwards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const StyledAward = styled.div`
    padding: 5rem;
    h3{
        font-size: 1.5rem;
    }
    p{
        font-size: 1rem;
        padding: 2rem 0rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        margin: 1rem 0rem;
        height: 0.5rem;
    }
`

const StyledImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

//Award Component
const Award = ({title, description}) => {
    return(
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    );
}

export default MovieDetail
