import { faHandshakeSimple, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyChooseUs = () => {
    return (<><section className="why-choose-two">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="why-choose-two__left">
                        <div className="why-choose-two__top  wow fadeInUp" data-wow-duration="1500ms">
                            <div className="sec-title text-start wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='800ms'>
                                <h6 className="sec-title__tagline">Why Choose Us</h6>
                                <h3 className="sec-title__title">Why Should Choose Our Company</h3>
                            </div>
                            <p className="why-choose-two__top__text wow fadeInUp" data-wow-delay="500ms">In an era where digital presence is paramount, selecting the right partner for your online marketing efforts can be pivotal to your success.</p>
                        </div>
                        <div className="why-choose-two__feature">
                            <div className="why-choose-two__feature__item wow fadeInUp" data-wow-duration="1000ms">
                                <div className="why-choose-two__feature__item__icon">
                                    <FontAwesomeIcon icon={faHandshakeSimple} style={{ fontSize: "25px" }} />
                                </div>
                                <div className="why-choose-two__feature__item__content">
                                    <h4 className="why-choose-two__feature__item__content__title"><a href="services.html">100% Transparency</a></h4>
                                    <p className="why-choose-two__feature__item__content__text"> Clear communication, reporting for full client visibility and understanding</p>
                                </div>
                            </div>
                            <div className="why-choose-two__feature__item wow fadeInUp" data-wow-duration="1500ms">
                                <div className="why-choose-two__feature__item__icon">
                                    <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: "25px" }} />
                                </div>
                                <div className="why-choose-two__feature__item__content">
                                    <h4 className="why-choose-two__feature__item__content__title">Innovation</h4>
                                    <p className="why-choose-two__feature__item__content__text">Ahead with cutting-edge digital marketing strategies, fostering growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="why-choose-two__right wow fadeInRight" data-wow-delay="2000ms">
                        <div className="why-choose-two__right__thumb nionx-stretch-element-inside-column">
                            <img src="/images/resources/choose-2-1.jpg" alt="why-choose-two__right__thumb" style={{ border: "1px solid black" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="why-choose-two__element">
            <img src="/images/shapes/texture__bg.png" alt="" />
        </div>
    </section>
    </>);
}

export default WhyChooseUs;