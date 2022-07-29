import React from 'react';

export default function AboutSection(){
    return(
        <>
        <div className="description">
            <div className="title">
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>your <span>dreams</span></h2>
                </div>
                <div className="hide">
                    <h2>come true.</h2>
                </div>
            </div>
            <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
            <button>Contact Us</button>
        </div>
        <div className="image">
            <img src="/images/home1.png" alt="" />
        </div>
        </>
    )
}