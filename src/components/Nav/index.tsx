/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react"
import { NavSection } from "./styles"

export default function Nav(){
    return(
        <NavSection>
            <h1 id="logo"><a href="#">Capture</a></h1>
            <ul>
                <li>
                    <a href="/">1. About Us</a>
                </li>
                <li>
                    <a href="/OurWork">2. Our Work</a>
                </li>
                <li>
                    <a href="/ContactUs">3. Contact Us</a>
                </li>
            </ul>
        </NavSection>
    )
}