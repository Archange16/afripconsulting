"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FormArea from "./form";
import FooterTwo from "@/components/layout/footers/footer-two";
import HeaderFour from "@/components/layout/headers/header/header-four";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contact Us" />        
            <HeaderFour />
            <BreadCrumb title="Contact Us" innerTitle="Contact Us" />
            <div className="contact__two section-padding">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-6">
                            <div className="contact__two-content">
                                <div className="contact__two-title">
                                    <span className="subtitle-one">Contactez Afrip</span>
                                    <h2>Nous sommes à votre écoute ! </h2>
                                    <p>Que vous ayez une question, un projet à discuter ou besoin d’un devis, notre équipe est là pour vous aider.</p>
                                </div>
                                <div className="contact__two-form">
                                    <FormArea />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact__two-contact-info">
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-1.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Email</h4>
                                        <span>contact@afripconsulting.com</span>
                                        <span>afripconsulting1@gmail.com</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-2.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Contacts</h4>
                                        <span>+242 04 003 97 96</span>
                                        <span>+242 04 003 97 96</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-3.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Date</h4>
                                        <span>Samedi de 7h à 14h</span>
                                        <span>Dimanche de 07h à 12h</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon/service-4.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Adresse</h4>
                                        <span>1148 Avenue Charles de GAULES Centre-ville Pointe-Noire</span>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default ContactUs;