import TopHeader from "@/app/components/topHeader";

const Pagee = () => {
    return (<><TopHeader />
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