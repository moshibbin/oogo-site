
const Benefit = () => {


    return (<>  <section className="benefit-one">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="benefit-one__left wow fadeInUp" data-wow-duration="1500ms">
                        <div className="benefit-one__left__image">
                            <img src="/images/resources/benefit-1-1.jpg" alt="benefit-one__left__image" />
                        </div>
                        <div className="benefit-one__left__card count-box">

                            <div className="benefit-one__left__card__count">
                                <span className="count-text" data-stop={85} data-speed={1000}></span>
                                {/* <span>%</span> */}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="benefit-one__right">
                        <div className="sec-title text-start wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                            <h6 className="sec-title__tagline">Our Benefit</h6>
                            <h3 className="sec-title__title">Get the Service to Get More Traffic in Your Website</h3>
                        </div>
                        <div className="tabs-box">
                            <div className="benefit-one__right__tab wow fadeInUp" data-wow-duration="1500ms">
                                <div className="benefit-one__right__tab__link tab-link">
                                    <button data-tab="#research" className="benefit-one__right__tab__link__item tab-btn active-btn">Web design</button>
                                    <button data-tab="#marketing" className="benefit-one__right__tab__link__item tab-btn">Social Marketing</button>
                                    <button data-tab="#planning" className="benefit-one__right__tab__link__item tab-btn">Content Planning</button>
                                </div>
                            </div>
                            <div className="tabs-content">
                                <div className="item fadeInUp animated tab active-tab" id="research">
                                    <div className="benefit-one__features">
                                        <div className="benefit-one__features__item">
                                            <div className="benefit-one__features__item__icon">
                                                <i className="icon-social-media"></i>
                                            </div>
                                            <div className="benefit-one__features__item__content">
                                                <h3 className="benefit-one__features__item__title">Social Media Marketing</h3>
                                            </div>
                                        </div>
                                        <div className="benefit-one__features__item">
                                            <div className="benefit-one__features__item__icon">
                                                <i className="icon-user-engagement-2"></i>
                                            </div>
                                            <div className="benefit-one__features__item__content">
                                                <h3 className="benefit-one__features__item__title">Lead Generation Process</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="benefit-one__list list-unstyled">
                                        <li className="benefit-one__list__item">Many variations of passages of Lorem Ipsum</li>
                                        <li className="benefit-one__list__item">Many variations of passages of Lorem</li>
                                        <li className="benefit-one__list__item">Expert Many variations Teacher</li>
                                    </ul>
                                </div>
                                <div className="item fadeInUp animated tab" id="marketing">
                                    <div className="benefit-one__features">
                                        <div className="benefit-one__features__item">
                                            <div className="benefit-one__features__item__icon">
                                                <i className="icon-social-media"></i>
                                            </div>
                                            <div className="benefit-one__features__item__content">
                                                <h3 className="benefit-one__features__item__title">Social Media Marketing</h3>
                                            </div>
                                        </div>
                                        <div className="benefit-one__features__item">
                                            <div className="benefit-one__features__item__icon">
                                                <i className="icon-user-engagement-2"></i>
                                            </div>
                                            <div className="benefit-one__features__item__content">
                                                <h3 className="benefit-one__features__item__title">Lead Generation Process</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="benefit-one__list list-unstyled">
                                        <li className="benefit-one__list__item">Many variations of passages of Lorem Ipsum</li>
                                        <li className="benefit-one__list__item">Many variations of passages of Lorem</li>
                                        <li className="benefit-one__list__item">Expert Many variations Teacher</li>
                                    </ul>
                                </div>
                                <div className="item fadeInUp animated tab" id="planning">
                                    <div className="benefit-one__features">
                                        <div className="benefit-one__features__item">
                                            <div className="benefit-one__features__item__icon">
                                                <i className="icon-social-media"></i>
                                            </div>
                                            <div className="benefit-one__features__item__content">
                                                <h3 className="benefit-one__features__item__title">Social Media Marketing</h3>
                                            </div>
                                        </div>
                                        <div className="benefit-one__features__item">
                                            <div className="benefit-one__features__item__icon">
                                                <i className="icon-user-engagement-2"></i>
                                            </div>
                                            <div className="benefit-one__features__item__content">
                                                <h3 className="benefit-one__features__item__title">Lead Generation Process</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="benefit-one__list list-unstyled">
                                        <li className="benefit-one__list__item">Many variations of passages of Lorem Ipsum</li>
                                        <li className="benefit-one__list__item">Many variations of passages of Lorem</li>
                                        <li className="benefit-one__list__item">Expert Many variations Teacher</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="benefit-one__element">
            <img src="/images/shapes/benefit-1-2.png" alt="" />
        </div>
        <div className="benefit-one__element-two">
            <img src="/images/shapes/benefit-1-1.png" alt="" />
        </div>
    </section></>);
}

export default Benefit;