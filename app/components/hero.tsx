import "../globals.css";
const Hero = () => {
    return (
        <section className="hero-two">
            <div className="hero-two__bg" style={{ backgroundImage: 'url(/images/backgrounds/hero-2-1.png)' }}></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-two__left">
                            <div className="hero-two__content wow fadeInLeft" data-wow-delay="1200ms">
                                <h2 className="hero-two__title wow fadeInLeft" data-wow-delay="1000ms">Elevate Online Presence Expert Digital Solutions</h2>
                                <p className="hero-two__text">Unlock your brand&apos;s digital potential. Partner with us for strategic digital marketing that drives results in today&apos;s competitive landscape.</p>
                                <div className="hero-two__btn wow fadeInLeft" data-wow-delay="1300ms">
                                    <a href="#services" className="nionx-btn">Get In Touch</a>
                                </div>
                            </div>
                            <div className="hero-two__left__element wow fadeInLeft" data-wow-delay="1300ms">
                                <img src="/images/shapes/hero-shape-2-5.png" alt="hero-two__left__element" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-two__right wow fadeInRight" data-wow-delay="1500ms">
                            <div className="hero-two__image">
                                {/* <div className="hero-two__image__item">
                                    <img src="/images/resources/hero-2-4.png" alt="hero-two__image__item" />
                                </div>
                                <div className="hero-two__image__item">
                                    <img src="/images/resources/hero-2-1.png" alt="hero-two__image__item" />
                                </div>
                                <div className="hero-two__image__item">
                                    <img src="/images/resources/hero-2-3.png" alt="hero-two__image__item" />
                                </div> */}
                                <div className="hero-two__image__item">
                                    <img src="/images/resources/hero.png" alt="hero-two__image__item" />
                                </div>
                            </div>
                            {/* <div className="hero-two__right__element">
                                <img src="/images/shapes/hero-shape-2-1.png" alt="hero-two__elenent" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;