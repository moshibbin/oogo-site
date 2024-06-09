interface Props {
    currentPage: string,
    nextPage: string,
}
const SecondHeader = ({ currentPage, nextPage }: Props) => {
    const menu = [
        { id: 1, lebel: "Home", href: "/" },
        { id: 2, lebel: "About", href: "#about" },
        { id: 3, lebel: "Services", href: "#services" },
        { id: 4, lebel: "FAQs", href: "#faqs" },
        { id: 5, lebel: "Blog", href: "#blogs" },
        { id: 6, lebel: "Contact", href: "#contacts" },
    ]
    return (<><section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: 'url(/images/backgrounds/page-header-bg-1-1.jpg)' }}></div>

        <div className="container">
            <h2 className="page-header__title">{nextPage}</h2>
            <ul className="nionx-breadcrumb list-unstyled">
                <li><a href="/">{currentPage}</a></li>
                <li><span>{nextPage}</span></li>
            </ul>
        </div>
    </section></>);
}

export default SecondHeader;