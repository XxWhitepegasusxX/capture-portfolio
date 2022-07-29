/* eslint-disable @next/next/no-img-element */
import React from "react";


export default function ServicesSection(){
    return (
        <>
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services.</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src='/images/clock.svg' alt="" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit ament.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src='/images/teamwork.svg' alt="" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit ament.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src='/images/diaphragm.svg' alt="" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit ament.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src='/images/money.svg' alt="" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit ament.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src="/images/home2" alt="" />
            </div>
        </div>
        </>
    )
}