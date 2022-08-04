/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Services, Description, Image, Cards, Card } from "./styles";


export default function ServicesSection(){
    return (
        <>
        <Services>
            <Description>
                <h2>High <span>quality</span> services.</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src='/images/clock.svg' alt="" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit ament.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src='/images/teamwork.svg' alt="" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit ament.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src='/images/diaphragm.svg' alt="" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit ament.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src='/images/money.svg' alt="" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit ament.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src="/images/home2.png" alt="" />
            </Image>
        </Services>
        </>
    )
}