import React from 'react';
import workBg from "../../../public/assets/img/shape/workprocess-four-shape.webp";
import Link from 'next/link';

const Work = () => {
    return (
        <>
            <div className="work-process__four" style={{backgroundImage: `url(${workBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-xl-6 col-lg-7">
                            <div className="work-process__four-title">
                                <span className="subtitle-one">Processus de travail</span>
                                <h2>Notre processus de travail : clair, efficace et transparent</h2>
                                <p>Chez Afrip, nous avons mis en place un processus de travail rigoureux pour garantir la réussite de vos projets de construction. Voici les étapes clés de notre collaboration :</p>
                            </div>
                            <Link href="/contact" className="btn-one">Contactez-nous
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            <div className="call-us-box">
                                <div className="call-us-box-icon">
                                    <i className="flaticon-telephone-call"></i>
                                </div>
                                <div className="call-us-box-right">
                                    <span>CALL US ANYTIME</span>
                                    <Link href="tel:+242040039796">+242 04 003 97 96</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="row gy-5">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                    <div className="work-process__four-single-item">
                                        <i className="flaticon-instagram"></i>
                                        <h3 className="work-process__four-single-item-number">01</h3>
                                        <h4>Consultation et étude de faisabilité</h4>
                                        <p>Comprendre vos besoins et évaluer la viabilité de votre projet.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                    <div className="work-process__four-single-item">
                                        <i className="flaticon-imac-computer"></i>
                                        <h3 className="work-process__four-single-item-number">02</h3>
                                        <h4>Conception et planification</h4>
                                        <p>Transformer votre vision en plans détaillés et en un calendrier réaliste.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                    <div className="work-process__four-single-item">
                                        <i className="flaticon-email"></i>
                                        <h3 className="work-process__four-single-item-number">03</h3>
                                        <h4>Exécution et suivi du projet</h4>
                                        <p>Réaliser votre projet dans les délais et le budget prévus.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                    <div className="work-process__four-single-item">
                                        <i className="flaticon-computer-mouse"></i>
                                        <h3 className="work-process__four-single-item-number">04</h3>
                                        <h4>Livraison et maintenance</h4>
                                        <p>Vous garantir une construction durable et bien entretenue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;