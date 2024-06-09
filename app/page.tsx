import Image from "next/image";
import TopHeader from "./components/topHeader";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import WhyChooseUs from "./components/whyChooseUs";
import Footer from "./components/footer";
import Testimonial from "./components/testimonial";
import FanFact from "./components/funFact";
import Faq from "./components/Faq";
import Benefit from "./components/benefit";
import Contact from "./components/contact";
import Brands from "./components/brands";
import Link from "next/link";
import Blogs from "./blogs/page";


export default function Home() {

  const menu = [
    { id: 1, lebel: "Home", href: "/" },
    { id: 2, lebel: "About", href: "#about" },
    { id: 3, lebel: "Services", href: "#services" },
    { id: 4, lebel: "FAQs", href: "#faqs" },
    // { id: 5, lebel: "Blog", href: "#blogs" },
    { id: 6, lebel: "Contact", href: "#contacts" },
  ]
  return (
    <div className="page-wrapper">

      <TopHeader menu={menu} />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      {/* <Testimonial /> */}
      <FanFact />
      <Faq />
      {/* <Benefit /> */}
      <Contact />
      {/* <Blogs /> */}
      {/* <Brands /> */}
      <Footer />
    </div>

  );
}
