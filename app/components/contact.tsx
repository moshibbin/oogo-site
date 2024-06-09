const Contact = () => {
    return (<><section className="contact-three" id="contacts">
        <div className="contact-three__bg" style={{ backgroundImage: 'url(/images/shapes/contact-bg-shape1.png)' }}>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="contact-three__image wow fadeInLeft" data-wow-duration="1500ms">
                        <img src="/images/resources/contact-1-1.png" alt="contact-three__image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact-three__top">
                        <div className="sec-title text-start wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
                            <h6 className="sec-title__tagline">Contact with Us</h6>
                            <h3 className="sec-title__title">Feel Free to Write us</h3>
                        </div>
                    </div>
                    <form className="contact-three__form form-one contact-form-validated wow fadeInUp" data-wow-duration="1500ms" >
                        <div className="form-one__group">
                            <div className="form-one__control">
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-one__control">
                                <input type="email" placeholder="Email Address" />
                            </div>
                            <div className="form-one__control form-one__control--full">
                                <textarea placeholder="Write a Message"></textarea>
                            </div>
                            <div className="form-one__control form-one__control--full">
                                <button type="submit" className="nionx-btn nionx-btn--black">Send a Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section></>);
}

export default Contact;