import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faLocationDot, faPhoneVolume, faX } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from '@fortawesome/free-solid-svg-icons/faBullhorn';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons/faNoteSticky';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons/faPhotoFilm';
const Services = () => {
    return (<>
        <section className="service-two" id="services">
            <div className="service-two__bg"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-title text-center wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
                            <h6 className="sec-title__tagline">Our Service</h6>
                            <h3 className="sec-title__title">We’re Offering the Best <br /> Services to You</h3>
                        </div>
                    </div>
                </div>
                <div className="service-two__inner">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="service-two__left">
                                <ul className="list-unstyled service-two__single">
                                    <li className="service-two__single__item">
                                        <div className="service-two__single__item__icon">
                                            <FontAwesomeIcon icon={faBullhorn} color="#fdc21c" style={{ fontSize: "27px" }} />
                                        </div>
                                        <h4 className="service-two__single__item__title">Digital marketing</h4>
                                    </li>
                                    <li className="service-two__single__item">
                                        <div className="service-two__single__item__icon">
                                            <FontAwesomeIcon icon={faCode} color="#fdc21c" style={{ fontSize: "27px" }} />

                                        </div>
                                        <h4 className="service-two__single__item__title">Web Devolopment</h4>
                                    </li>
                                    <li className="service-two__single__item">
                                        <div className="service-two__single__item__icon">

                                            <FontAwesomeIcon icon={faNoteSticky} color="#fdc21c" style={{ fontSize: "27px" }} />
                                        </div>
                                        <h4 className="service-two__single__item__title">Content Creation</h4>
                                    </li>
                                    <li className="service-two__single__item">
                                        <div className="service-two__single__item__icon">
                                            <FontAwesomeIcon icon={faPhotoFilm} color="#fdc21c" style={{ fontSize: "27px" }} />

                                        </div>
                                        <h4 className="service-two__single__item__title">Media Production</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="service-two__content">
                                <div className="service-two__content__thumb">
                                    <img src="/images/resources/service-two-tab-2-1.png" alt="service-two__content__thumb" />
                                </div>
                                <ul className="service-two__content__list list-unstyled">
                                    <li className="service-two__content__list__item">Affordable Pricing </li>
                                    <li className="service-two__content__list__item">Reliable Results</li>
                                    <li className="service-two__content__list__item">Exceptional Quality</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-two__dots">
                <img src="/images/shapes/service-shape-2-2.png" alt="" />
            </div>
            <div className="service-two__shape">
                <img src="/images/shapes/service-shape-2-1.png" alt="" />
            </div>
        </section>
    </>);
}

export default Services;