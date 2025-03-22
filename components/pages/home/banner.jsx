import Link from "next/link";
import bannerBg from "../../../public/assets/img/banner/banner-four-bg.webp";
import banner1 from "../../../public/assets/img/banner/banner-four.webp";

const BannerFour = () => {
    return (
        <>
            <div className="banner__four" style={{backgroundImage: `url(${bannerBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center gy-4 justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="banner__four-content">
                                <span className="subtitle-two">Professionnel du BTP</span>
                                <h2>Votre partenaire expert en matériaux de construction et études de projets</h2>
                                <p>Des solutions sur mesure pour vos projets de construction, de la conception à la maintenance.</p>
                                <div className="banner__four-content-bottom">
                                    <Link href="/contact" className="btn-two">Découvrez nos services<i className="fas fa-arrow-right"></i></Link>
                                    <div className="banner__four-content-call">
                                        <i className="flaticon-telephone-call"></i>
                                        <div className="banner__four-content-call-right">
                                            <span>Demandez un devis gratuit</span>
                                            <Link href="tel:(+242)%040039796">+242040039796</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-9">
                            <div className="banner__four-image">
                                <div className="banner__four-image-wrapper">
                                <img src={banner1.src} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerFour;