import { GetStaticProps } from "next"
import React from "react"
import { Faq } from './styles'

export default function FaqSection(){
    return(
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        At vitae corrupti commodi.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        At vitae corrupti commodi.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        At vitae corrupti commodi.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        At vitae corrupti commodi.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    return {
      props: {},
      revalidate: 60,
    }
}
