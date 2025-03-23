import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/logo-2.png";
import ctaBg from "../../../public/assets/img/subscribe/subscribe-two-shape-2.png";
import footerBg from "../../../public/assets/img/shape/footer-bg.png";
import servicesData from "@/components/data/services-data";

const FooterTwo = () => {
    return (
        <>
        <div className="subscribe__one two">
            <div className="container">
                <div className="row justify-content-center text-center subscribe__one-content" style={{backgroundImage: `url(${ctaBg.src})`}}>
                    <div className="col-xl-7 col-lg-8">
                        <div className="subscribe__one-title">
                            <h3>Parlons de votre projet</h3>
                        </div>
                        <div className="subscribe-bottom">
                            <Link href="/request-quote" className="btn-two">Échangez avec nos experts<i className="fas fa-arrow-right"></i></Link>
                            <div className="call-box">
                                <div className="call-box-item">
                                    <div className="call-box-item-icon">
                                        <i className="flaticon-telephone-call"></i>
                                    </div>
                                    <div className="call-box-item-info">
                                        <span>Appelez-nous</span>
                                        <Link href="tel:+242040039796">+242 04 003 97 96</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__one">
            <img className="footer__one-shape" src={footerBg.src} alt="image" />
            <div className="container">
                <div className="row gy-4 justify-content-between">
                    <div className="col-xl-4 col-md-6 col-sm-7 xl-mb-30">
                        <div className="footer__one-widget">
                            <div className="footer__one-widget-about">
                                <Link href="/"><img src={logo.src} alt="Logo-image" /></Link>
                                <p>Afrip Consulting est votre partenaire pour la conception architecturale, l'étude de projets et la gestion immobilière. Nous mettons notre expertise à votre service pour réussir vos projets.</p>
                                <div className="footer__one-widget-about-social">
                                    <h4>Suivez-nous</h4>	
                                    <Social />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-sm-5 sm-mb-30">
                        <div className="footer__one-widget border-one">
                            <h4>Services</h4>
                            <div className="footer__one-widget-solution">
                                <ul>
                                    {servicesData.slice(0, 4).map((data, id) => {
                                        const words = data.nom.split(' ');
                                        const firstAndSecondWord = words.slice(0, 5).join(' ');
                                        return (
                                            <li key={id}><Link href={`/services/${data.id}`}>{firstAndSecondWord}</Link></li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-sm-6 sm-mb-30">
                        <div className="footer__one-widget border-one">
                            <h4 className="">Liens utile</h4>
                            <div className="footer__one-widget-solution">
                                <ul>
                                    {servicesData.slice(5, 8).map((data, id) => {
                                        const words = data.nom.split(' ');
                                        const firstAndSecondWord = words.slice(0, 5).join(' ');
                                        return (
                                            <li key={id}><Link href={`/services/${data.id}`}>{firstAndSecondWord}</Link></li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-6">
                        <div className="footer__one-widget border-one">
                                <h4>Contact</h4>
                                <div className="footer__one-widget-location">
                                    <div className="footer__one-widget-location-item">
                                        <div className="footer__one-widget-location-item-icon">
                                            <i className="flaticon-mail"></i>
                                        </div>
                                        <div className="footer__one-widget-location-item-info email">
                                            <span>Email</span>
                                            <Link href="mailto:contact@afripconsulting.com">contact@afripconsulting.com</Link>
                                        </div>
                                    </div>
                                    <div className="footer__one-widget-location-item">
                                        <div className="footer__one-widget-location-item-icon">
                                            <i className="flaticon-location"></i>
                                        </div>
                                        <div className="footer__one-widget-location-item-info">
                                            <span>Adresse</span>
                                            <Link href="https://google.com/maps">1148 Avenue Charles de GAULES Centre-ville Pointe-Noire</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="copyright__one">
                <div className="container">
                    <div className="row justify-content-between copyright__one-container-area">
                        <div className="col-xl-5 col-lg-6"> 
                            <div className="copyright__one-left">
                                <p>© 2024 | www.afripconsulting.com</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="copyright__one-right">
                                <Link href="/about">A propos</Link>
                                <Link href="/contact">Contactez-nous</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default FooterTwo;