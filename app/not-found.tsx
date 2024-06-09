import Footer from "./components/footer";
import SecondHeader from "./components/secondHeader";
import TopHeader from "./components/topHeader";

const NotFound = () => {
    const menu = [
        { id: 1, lebel: "Home", href: "/" },
        { id: 2, lebel: "About", href: "/#about" },
        { id: 3, lebel: "Services", href: "/#services" },
        { id: 4, lebel: "FAQs", href: "/#faqs" },
        // { id: 5, lebel: "Blog", href: "/#blogs" },
        { id: 6, lebel: "Contact", href: "/#contacts" },
    ]
    return (<>
        <div className="page-wrapper">
            <TopHeader menu={menu} />
            <SecondHeader currentPage="Home" nextPage="404 Error" />
            <section className="error-404">
                <div className="container">
                    <div className="error-404__thumb wow fadeInUp" data-wow-duration="1500ms">
                        <div className="error-404__thumb__item">
                            <img src="/images/shapes/error-1.png" alt="error-404__thumb__item" />
                        </div>
                        {/* <div className="error-404__thumb__item__moon">
                            <img src="/images/shapes/error-1-1.png" alt="error-404__thumb__item__moon" />
                        </div>
                        <div className="error-404__thumb__item__earth">
                            <img src="/images/shapes/error-1-2.png" alt="error-404__thumb__item__earth" />
                        </div>
                        <div className="error-404__thumb__item__roket">
                            <img src="/images/shapes/error-1-3.png" alt="error-404__thumb__item__roket" />
                        </div> */}
                    </div>
                    <h3 className="error-404__sub-title  wow fadeInUp" data-wow-duration="1500ms">Oops! Page Not Found</h3>
                    <p className="error-404__text  wow fadeInUp" data-wow-duration="1500ms">The page you are looking for is not exist.</p>
                    <form action="#" className="error-404__search">
                        <input type="text" id="error-search" placeholder="Type Here" />
                        <button type="submit" className="error-404__search__btn" aria-label="search submit">
                            <span><i className="icon-search"></i></span>
                        </button>
                    </form>
                    <div className="error-404__btns">
                        <a href="/" className="nionx-btn nionx-btn--base"><span>Back to Home</span></a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    </>);
}

export default NotFound;