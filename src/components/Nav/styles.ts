import styled from "styled-components"

export const NavSection = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem;
    background: #282828;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
`