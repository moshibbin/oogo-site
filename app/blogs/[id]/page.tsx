import TopHeader from "@/app/components/topHeader";

const Pagee = () => {
    const menu = [
        { id: 1, lebel: "Home", href: "/" },
        { id: 2, lebel: "About", href: "#about" },
        { id: 3, lebel: "Services", href: "#services" },
        { id: 4, lebel: "FAQs", href: "#faqs" },
        // { id: 5, lebel: "Blog", href: "#blogs" },
        { id: 6, lebel: "Contact", href: "#contacts" },
    ]
    return (<><TopHeader menu={menu} />
        <div className="page-wrapper">
            <section className="page-header">
                <div className="page-header__bg"></div>

                <div className="container">
                    <h2 className="page-header__title">News details left sidebar</h2>
                    <ul className="nionx-breadcrumb list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><span>Our News</span></li>
                    </ul>
                </div>
            </section>
        </div></>);
}

export default Pagee;