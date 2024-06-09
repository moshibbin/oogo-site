import { faFacebook, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMap, faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (<>
        <footer className="main-footer @@extraClassName">
            <div className="main-footer__bg" style={{ backgroundImage: "url(/images/backgrounds/footer-bg-1-1.png)" }}></div>
            <div className="main-footer__top">
                <div className="container">
                    <div className="main-footer__inner">
                        <a href="index.html" className="main-footer__inner-logo">
                            <img src="/images/logo-light.png" width="149" alt="Nionx HTML Template" />
                        </a>
                        <div className="main-footer__inner-social">
                            <a href="https://www.facebook.com/profile.php?id=61551806713900"> <FontAwesomeIcon icon={faFacebook} color="#fec321" /> <span className="sr-only">Facebook</span></a>
                            <a href="https://www.facebook.com/profile.php?id=61551806713900"><FontAwesomeIcon icon={faLinkedinIn} color="#fec321" /> <span className="sr-only">Linkedin</span></a>
                            <a href="https://www.facebook.com/profile.php?id=61551806713900"><FontAwesomeIcon icon={faX} color="#fec321" /><span className="sr-only">X</span></a>
                            <a href="https://www.facebook.com/profile.php?id=61551806713900"> <FontAwesomeIcon icon={faYoutube} color="#fec321" /> <span className="sr-only">Youtube</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-footer__middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-2">
                            <div className="footer-widget">
                                <div className="footer-widget--links">
                                    <h4 className="footer-widget__title">Company</h4>
                                    <ul className="list-unstyled footer-widget__links">
                                        <li className="footer-widget__links__item"><a href="#about">About Us</a></li>
                                        <li className="footer-widget__links__item"><a href="#services">Services</a></li>
                                        <li className="footer-widget__links__item"><a href="#blogs">Blog</a></li>
                                        <li className="footer-widget__links__item"><a href="+contact">Contact Now</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-2">
                            <div className="footer-widget">
                                <div className="footer-widget--links">
                                    <h4 className="footer-widget__title">Links</h4>
                                    <ul className="list-unstyled footer-widget__links">
                                        <li className="footer-widget__links__item"><a href="https://www.facebook.com/profile.php?id=61551806713900">Social Media Link</a></li>
                                        <li className="footer-widget__links__item"><a href="#faqs">Faqs</a></li>
                                        <li className="footer-widget__links__item"><a href="#contacts">Help</a></li>
                                        <li className="footer-widget__links__item"><a href="/">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-4">
                            <div className="footer-widget">
                                <div className="footer-widget--about">
                                    <h4 className="footer-widget__title">Contact</h4>
                                    <ul className="list-unstyled footer-widget__info">
                                        <li className="footer-widget__info__item"> <span className="footer-widget__text"><FontAwesomeIcon icon={faMap} color="#fec321" /> Centeral Bank Area,Hargeisa,Somaliland</span></li>
                                        <li className="footer-widget__info__item"> <FontAwesomeIcon icon={faPhone} color="#fec321" /> <a href="tel:+252637744448">
                                            +252-63-7744448</a></li>
                                        <li className="footer-widget__info__item"><FontAwesomeIcon icon={faEnvelope} color="#fec321" /> <a href="mailto:michael.mitc@example.com">michael.mitc@example.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-4">
                            <div className="footer-widget footer-widget__right">
                                <h4 className="footer-widget__title">Newsletter</h4>
                                <form className="footer-widget__newsletter mc-form">
                                    <input type="email" placeholder="Email address" />
                                    <button type="submit" className="nionx-btn nionx-btn--base">Subscribe<span className="sr-only">Subscribe</span></button>
                                </form>
                                <div className="mc-form__response"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-footer__bottom">
                <div className="container">
                    <div className="main-footer__bottom__inner">
                        <p className="main-footer__copyright" style={{ color: "black" }}> Copyright &copy;  2024 <span className="dynamic-year" ></span> OOGO media. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </footer>
    </>);
}

export default Footer;