import Link from "next/link";
import about1 from "../../../../public/assets/img/about/about-four-1.webp";
import about2 from "../../../../public/assets/img/about/about-four-2.webp";

const AboutFour = () => {
    return (
        <>
            <div className="about__four section-padding">
                <div className="container">
                    <div className="row align-items-center flex-wrap-reverse gy-4">
                        <div className="col-xl-6 col-lg-8">
                            <div className="about__four-image">
                                <div className="experience-bar animate-y-axis-slider">
                                    <div className="experience-bar-right">
                                        <div className="experience-bar-counter">
                                            <span>+ </span>
                                            <h4 className="counter">10</h4>
                                        </div>
                                        <span>Années d'expérience</span>
                                    </div>
                                </div>
                                <div className="about__four-image-wrapper">
                                    <img className="image-1" src={about1.src} alt="image" />
                                    <img className="image-2" src={about2.src} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-9">
                            <div className="about__four-content">
                                <span className="subtitle-one">À propos de nous ?</span>
                                <h2>Qui sommes-nous ?</h2>
                                <p>Afrip est une entreprise spécialisée dans l’achat et la vente de matériaux de construction, ainsi que dans l’accompagnement technique de vos projets. Depuis notre création, nous nous engageons à fournir des solutions innovantes et durables pour répondre aux besoins de nos clients.</p>
                                <p>Notre équipe d’experts en construction, en études techniques et en maintenance travaille avec rigueur et passion pour garantir la réussite de vos projets.</p>
                                <div className="about__four-content-service">
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Qualité :Des matériaux certifiés et des services professionnels.</span>
                                    </div>
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Innovation : Des solutions techniques adaptées aux défis modernes.</span>
                                    </div>
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Engagement : Un accompagnement personnalisé de A à Z.</span>
                                    </div>
                                </div>
                                <Link href="/about" className="btn-one">En savoir plus<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutFour;