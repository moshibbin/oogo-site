'use client'
import Link from "next/link";
import "../globals.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faLocationDot, faPhoneVolume, faX } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


interface Props {
    menu: { id: number, lebel: string, href: string }[]
}


const TopHeader = ({ menu }: Props) => {
    const [closed, setClosed] = useState(false)
    const [visible, setVisible] = useState(false)


    return (<>

        <div className="topbar">
            <div className="topbar-one--two " id="home" >
                <div className="container-fluid">
                    <div className="topbar-one__inner">
                        <ul className="list-unstyled topbar-one__info">
                            <li className="topbar-one__info__item" style={{ display: "flex", gap: "10px" }}>
                                <FontAwesomeIcon icon={faLocationDot} color="#fec321" />
                                <span className="topbar-one__info__item__location">Centeral Bank Area ,Hargeisa,Somaliland </span>
                            </li>
                            <li className="topbar-one__info__item" style={{ display: "flex", gap: "10px" }}>
                                <FontAwesomeIcon icon={faEnvelope} color="#fec321" />
                                {" "}
                                <a href="mailto:info@Oogomedia.com">info@Oogomedia.com</a>
                            </li>
                        </ul>
                        <div className="topbar-one__right">
                            <p className="topbar-one__text" style={{ display: "flex", gap: "10px" }}>
                                <FontAwesomeIcon icon={faClock} color="#fec321" />
                                <span> Sat to Thur: 7.00 am - 3.00 pm</span>
                            </p>
                            <div className="topbar-one__social">
                                <a href="https://www.facebook.com/profile.php?id=61551806713900"> <FontAwesomeIcon icon={faFacebook} color="#fff" /></a>
                                <a href="https://www.facebook.com/profile.php?id=61551806713900"><FontAwesomeIcon icon={faInstagram} color="#fff" /><span className="sr-only">Twitter</span></a>
                                <a href="https://www.facebook.com/profile.php?id=61551806713900"> <FontAwesomeIcon icon={faX} color="#fff" /> <span className="sr-only">Pinterest</span></a>
                                <a href="https://www.facebook.com/profile.php?id=61551806713900"> <FontAwesomeIcon icon={faLinkedinIn} color="#fff" /> <span className="sr-only">Instagram</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <header className="main-header main-header--two sticky-header sticky-header--normal">
                <div className={!visible ? "hidden " : "mobile-menu"}  >

                    <div className="m-container">


                        <div className="mobile-menu__logo">
                            <a href="index.html">
                                <img src="/images/logo-light.png" alt="Nionx HTML" width="150" />
                            </a>
                        </div>
                        <ul className=" list-unstyled">
                            {
                                menu.map((item) => (

                                    <li key={item.id} ><Link href={item.href}>{item.lebel}</Link></li>

                                ))
                            }
                        </ul>
                        <div>
                            <ul className="mobile-nav__contact list-unstyled">
                                <li>
                                    <i className="fa fa-envelope" ></i>
                                    <a href="mailto:info@oogomedia.com">info@oogomedia.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-phone-alt"></i>
                                    <a href="tel:+252637744448">(252) 63-7744448</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mobile-nav__social">
                            <a href="https://facebook.com"> <i className="icon-facebook" aria-hidden="true"></i> <span className="sr-only">Facebook</span></a>
                            <a href="https://twitter.com"><i className="icon-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a>
                            <a href="https://instagram.com"> <i className="icon-instagram" aria-hidden="true"></i> <span className="sr-only">Instagram</span></a>
                        </div>
                    </div>
                    <div className="close-icon" onClick={() => setVisible(false)} style={{ cursor: "pointer" }} >X</div>
                </div>
                <div className="container-fluid">
                    <div className="main-header__inner " >
                        <div className="main-header__logo">
                            <a href="index.html">
                                <img src="/images/logo-dark.png" alt="Nionx HTML" width="150" />
                            </a>
                        </div>
                        <nav className="main-header__nav main-menu">
                            <ul className="main-menu__list">
                                {
                                    menu.map((item) => (

                                        <li key={item.id} className="megamenu megamenu-clickable megamenu-clickable--toggler" ><Link href={item.href}>{item.lebel}</Link></li>

                                    ))
                                }

                                {/* More list items */}
                            </ul>
                        </nav>
                        <div className="main-header__right">
                            <a href="contact.html" className="main-header__contact__btn nionx-btn">Contact Us</a>
                            <div className="main-header__right__info">
                                <a href="tel:+8801775-338747" className="info__item--call">
                                    <div className="info__item__icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div className="info__item__content">
                                        <span className="info__item__content__text">Call Anytime</span>
                                        <h6 className="info__item__content__call">(252) 63-7744448</h6>
                                    </div>
                                </a>
                                <a href="#" className="search-toggler info__item">
                                    <i ></i>
                                    <span className="sr-only"></span>
                                </a>
                                <a href="login.html" className="info__item">
                                    <i ></i>
                                    <span className="sr-only"></span>
                                </a>
                            </div>
                            <div className="mobile-nav__btn mobile-nav__toggler" onClick={() => setVisible(true)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                        </div>

                    </div>
                </div>
            </header>
        </div>







    </>);
}

export default TopHeader;