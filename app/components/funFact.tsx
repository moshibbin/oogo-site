'use client'
import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js/dist/countUp';
import { faArrowUpShortWide, faBriefcase, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FanFact = () => {
    const countTextRef = useRef<HTMLSpanElement>(null);
    const countTextRef2 = useRef<HTMLSpanElement>(null);
    const countTextRef3 = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const countTextElement = countTextRef.current;
        const countTextElement2 = countTextRef2.current;
        const countTextElement3 = countTextRef3.current;

        if (countTextElement && countTextElement2 && countTextElement3) {
            const countUp = new CountUp(countTextElement, 120);
            const countUp2 = new CountUp(countTextElement2, 300);
            const countUp3 = new CountUp(countTextElement3, 5);
            if (!countUp.error) {
                countUp.start();
                countUp2.start();
                countUp3.start();
            } else {
                console.error(countUp.error);
            }
        }
    }, []);
    return (<>
        <section className="funfact-one">
            <div className="funfact-one__bg jarallax"  ></div>
            <div className="container">
                <ul className="list-unstyled funfact-one__list">
                    <li className="funfact-one__left__content  wow fadeInUp" >
                        <span className="funfact-one__left__content__subtitle"> <img src="/images/logo2.png" alt="Are You Ready to Learn" />Are You Ready to Get Service?</span>
                        <h2 className="funfact-one__left__content__title">The Proof is The Best Our Authentic</h2>
                        <div className="funfact-one__left__content__link">
                            <a href="#contacts" className="funfact-one__left__content__link__btn nionx-btn nionx-btn--base"><span>Discover More</span></a>
                        </div>
                    </li>

                    <li className="funfact-one__item count-box  wow fadeInUp" data-wow-delay='500ms'>
                        <div className="funfact-one__icon">
                            <div className="funfact-one__item__hover"></div>
                            <FontAwesomeIcon icon={faHeart} fontSize={'40px'} />
                        </div>
                        <div className="funfact-one__content">
                            <h3 className="funfact-one__count">
                                <span>+</span>
                                <span ref={countTextRef} className="count-text"></span>
                                <span></span>
                            </h3>
                            <p className="funfact-one__text">Happy Customer</p>
                        </div>
                    </li>

                    <li className="funfact-one__item count-box  wow fadeInUp" data-wow-delay='700ms'>
                        <div className="funfact-one__icon">
                            <div className="funfact-one__item__hover"></div>
                            <FontAwesomeIcon icon={faBriefcase} fontSize={'40px'} />
                        </div>
                        <div className="funfact-one__content">
                            <h3 className="funfact-one__count">
                                <span>+</span>
                                <span ref={countTextRef2} className="count-text"></span>
                                <span></span>
                            </h3>
                            <p className="funfact-one__text">Project Completed </p>
                        </div>
                    </li>

                    <li className="funfact-one__item count-box  wow fadeInUp" data-wow-delay='900ms'>
                        <div className="funfact-one__icon">
                            <div className="funfact-one__item__hover"></div>
                            <FontAwesomeIcon icon={faArrowUpShortWide} fontSize={'40px'} />
                        </div>
                        <div className="funfact-one__content">
                            <h3 className="funfact-one__count">
                                <span>+</span>
                                <span ref={countTextRef3} className="count-text"></span>
                                <span></span>
                            </h3>
                            <p className="funfact-one__text">Expreainces </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </>);
}

export default FanFact;