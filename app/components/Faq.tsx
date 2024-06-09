'use client'
import { useState } from 'react';

type FAQItem = {
    question: string;
    answer: string;
};

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleTabClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const faqs = [
        {
            question: 'What is a digital marketing agency?',
            answer: 'A digital marketing agency is a company that specializes in providing online marketing services to businesses. These services typically include website design, search engine optimization (SEO), social media marketing, advertising, email marketing, content content creation, and more.',
        },
        {
            question: 'Why should I hire a digital marketing agency?',
            answer: 'Hiring a digital marketing agency can offer several benefits. Firstly, they bring expertise in various online marketing channels and strategies, saving you time and resources. Secondly, they can provide fresh perspectives and innovative ideas to enhance your digital presence. Lastly, they can help you achieve measurable results and improve your return on investment (ROI) from online marketing efforts.',
        },
        {
            question: 'How Does SEO Work?',
            answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteradution in some form by injected humour, or randomised words which dont look even slightly believable. If you are going There are many variations',
        },
        {
            question: 'How Can I Find Relevant Keywords?',
            answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteradution in some form by injected humour, or randomised words which dont look even slightly believable. If you are going There are many variations',
        },
    ];

    return (<><section className="faq-two" id='faqs'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="sec-title text-center wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='200ms'>
                        <h6 className="sec-title__tagline">We’re Experienced</h6>
                        <h3 className="sec-title__title">Have Questions in Your Mind? <br /> Get the Answers Now</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="faq-two__item  wow fadeInUp" data-wow-duration="1500ms">
                        <div className="faq-two__item__img">
                            <img src="/images/resources/faq-2-1.png" alt="nionx image" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq-two__item  wow fadeInUp" data-wow-duration="1500ms">
                        <div className="faq-page__accordion nionx-accrodion" data-grp-name="nionx-accrodion">


                            <div>
                                {faqs.map((faq, index) => (
                                    <div className={activeIndex === index ? "accrodion active" : "accrodion"} key={index} onClick={() => handleTabClick(index)}>
                                        <div className="accrodion-title">
                                            <h4 className="accrodion-title__text">{faq.question}<span className="accrodion-title__icon"></span></h4>
                                        </div>


                                        {activeIndex === index && <div className="accrodion-content"> <div className="inner"><p className="inner__text">{faq.answer}</p> </div></div>}
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>);
}

export default Faq;