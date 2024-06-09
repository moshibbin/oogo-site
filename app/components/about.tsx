import "../globals.css";
const About = () => {
    return (<>
        <section className="about-us-three" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us-three__content">
                            <div className="about-us-three__top">
                                <div className="sec-title text-start wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
                                    <h6 className="sec-title__tagline">About Us</h6>
                                    <h3 className="sec-title__title">Challenges in Digital Technology are Our Specialty</h3>
                                </div>
                            </div>
                            <p className="about-us-three__top__text  wow fadeInUp" data-wow-duration="1500ms">At Oogo Digital, we are more than just a digital marketing agency; we are your partners in success. With a passion for innovation and a commitment to excellence, we specialize in providing comprehensive digital marketing solutions tailored to your unique needs. </p>
                            <blockquote className=" wow fadeInUp" data-wow-duration="1500ms">
                                <p className="about-us-three__text">We innovate for results, ensuring your digital success with our committed solutions. </p>
                            </blockquote>
                            <ul className="about-us-three__list list-unstyled  wow fadeInUp" data-wow-duration="1500ms">
                                <li className="about-us-three__list__item">Expert Teams </li>
                                <li className="about-us-three__list__item">Cutting-Edge Technology</li>
                                <li className="about-us-three__list__item">Innovative Approaches</li>
                            </ul>
                            <a href="#contacts" className="about-us-three__btn nionx-btn nionx-btn--black  wow fadeInUp" data-wow-duration="1500ms">Discover More</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-us-three__thumb  wow fadeInUp" data-wow-duration="2000ms">
                            <img src="/images/resources/about-3-1.jpg" alt="about-us-three__thumb" />
                            <div className="about-us-three__thumb__award">
                                <div className="about-us-three__thumb__award__inner">
                                    {/* <img src="/images/shapes/about-aword-2.png" alt="about-us-three__thumb__award__inner" /> */}
                                    {/* <p className="about-us-three__thumb__award__text">Award Winning <br /> Agency</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default About;