const Blogs = () => {
    const blogs = [
        { id: 1, title: "10 Simple Practices That Will Help You Get 1% Better Every Day", date: { day: 30, month: 'AUG' } }
    ]
    return (<><section className="blog-two" id="blogs">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="sec-title text-center wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
                        <h6 className="sec-title__tagline">Latest Articles</h6>
                        <h3 className="sec-title__title">Latest News & Articles from <br /> the Blog Posts</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="blog-card-three  wow fadeInUp" data-wow-delay='300ms'>
                        <div className="blog-card-three__thumb">
                            <img src="/images/blog/blog-1-1.png" alt="10 Simple Practices that Will Help You Get 1% Better Every Day" />
                            <a href="blog-details.html" className="blog-card-three__thumb__link"></a>
                        </div>
                        <div className="blog-card-three__content">
                            <div className="blog-card-three__meta">
                                <div className="blog-card-three__date"><span className="blog-card-three__date__day">30</span>AUG</div>
                                <a href="blog-details.html" className="blog-card-three__meta__comment"><i className="icon-bubble-chat-1"></i>2 Comments</a>
                            </div>
                            <h3 className="blog-card-three__title"><a href="blog-details-right.html">10 Simple Practices that Will Help You Get 1% Better Every Day</a></h3>
                            <div className="blog-card-three__content__btn">
                                <a href="blog-details-right.html" className="blog-card-three__content__btn__link">Read More<i className="icon-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="blog-card-three  wow fadeInUp" data-wow-delay='300ms'>
                        <div className="blog-card-three__thumb">
                            <img src="/images/blog/blog-1-2.png" alt="10 Simple Practices that Will Help You Get 1% Better Every Day" />
                            <a href="blog-details.html" className="blog-card-three__thumb__link"></a>
                        </div>
                        <div className="blog-card-three__content">
                            <div className="blog-card-three__meta">
                                <div className="blog-card-three__date"><span className="blog-card-three__date__day">30</span>AUG</div>
                                <a href="blog-details.html" className="blog-card-three__meta__comment"><i className="icon-bubble-chat-1"></i>2 Comments</a>
                            </div>
                            <h3 className="blog-card-three__title"><a href="blog-details-right.html">10 Simple Practices that Will Help You Get 1% Better Every Day</a></h3>
                            <div className="blog-card-three__content__btn">
                                <a href="blog-details-right.html" className="blog-card-three__content__btn__link">Read More<i className="icon-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>);
}

export default Blogs;