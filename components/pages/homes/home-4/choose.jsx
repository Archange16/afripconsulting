import image1 from "../../../../public/assets/img/why-choose-us/why-choose-2.webp";
import image2 from "../../../../public/assets/img/why-choose-us/why-choose.webp";
import Count from "../../common/count";

const ChooseFour = () => {
    return (
        <>
        <div className="why-choose-us__three section-padding">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="why-choose-us__three-left">
                            <div className="why-choose-us__three-title">
                                <span className="subtitle-one">Pourquoi nous choisir ?</span>
                                <h2>Pourquoi choisir Afrip pour vos projets de construction ?</h2>
                                <p>Chez Afrip, nous mettons tout en œuvre pour répondre à vos besoins en matière de construction, d’études techniques et de maintenance. Voici ce qui nous distingue :</p>
                            </div>
                            <div className="why-choose-us__three-bottom">
                                <div className="why-choose-us__three-bottom-card">
                                    <div className="why-choose-us__three-bottom-card-content">
                                        <h4>Projet </h4>
                                    </div>
                                    <div className="why-choose-us__three-bottom-card-counter">
                                        <h4 className="counter"><Count number={143}/></h4>
                                        <h4>k</h4>
                                    </div>
                                </div>
                                <div className="why-choose-us__three-bottom-card">
                                    <div className="why-choose-us__three-bottom-card-content">
                                        <h4>Clients qui</h4>
                                    </div>
                                    <div className="why-choose-us__three-bottom-card-counter">
                                        <h4 className="counter"><Count number={230}/></h4>
                                        <h4>+</h4>
                                    </div>
                                </div>
                                <div className="why-choose-us__three-bottom-card">
                                    <div className="why-choose-us__three-bottom-card-content">
                                        <h4>Clients qui</h4>
                                    </div>
                                    <div className="why-choose-us__three-bottom-card-counter">
                                        <h4 className="counter"><Count number={230}/></h4>
                                        <h4>+</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
                        <div className="why-choose-us__three-image">
                            <img src={image1.src} alt="image" className="why-choose-us__three-floating-image animate-y-axis-slider" />
                            <img src={image2.src} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>         
        </>
    );
};

export default ChooseFour;