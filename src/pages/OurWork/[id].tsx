/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { MovieState } from "../../../movieState";

type Movie = {
    title: string;
    mainImg: string;
    secondaryImg: string;
    url: string;
    awards: {
        title: string;
        description: string;
    }[];
}



export async function getServerSideProps(context: { query: { id: any; }; }){
    const id = context.query.id;
    
    return {
        props: {
            id,
        }
    }
}

export default function MovieDetail(props: any){
    const url = props.id
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState<Movie>()

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return(
        <>
        {movie && (
            <Details>
                <HeadLine>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="movie"/>
                </HeadLine>
                <Awards>
                    {movie.awards.map(award => (
                        <Award title={award.title} description={award.description} key={award.title} />
                    ))}
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="secondary image" />
                </ImageDisplay>
            </Details>
        )}
        </>
    )

}

const Details = styled.div`
    color: white;
`
const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, 10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    `
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`
const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    P{
        padding: 2rem 0rem;
    }
`
const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`
//Award Component

interface AwardProps {
    title: string,
    description: string
}

const Award = ({title, description}: AwardProps) => {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}