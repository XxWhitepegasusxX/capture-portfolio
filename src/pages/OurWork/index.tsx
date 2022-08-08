import React from "react";
import styled from 'styled-components'

export default function OurWork(){
    return(
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link href={"/OurWork/the-athlete"}>
                    <img src="/images/athlete-small.png" alt="" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link href={"/OurWork/the-racer"}>
                    <img src="/images/theracer-small.png" alt="" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link href={"/OurWork/good-times"}>
                    <img src="/images/goodtimes-small.png" alt="" />
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0;
    }
`
const Movie =styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const Link = styled.a`

`