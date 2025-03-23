import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import testimonialBg from "../../../public/assets/img/testimonial/testimonial-2.webp";
import quoteIcon from "../../../public/assets/img/testimonial/testimonial-quote.png";
import Link from "next/link";

const TestimonialTwo = () => {
const slideControl = {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },			
    autoplay: {
        delay: 4000,
        reverseDirection: false,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
};

    return (
        <>        
        <div className="testimonial__two section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-7 col-lg-6 col-md-7">
                        <div className="testimonial__two-title">
                            <span className="subtitle-one">Témoignages</span>
                            <h2>Ce que nos clients disent de nous</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__two-left" style={{backgroundImage: `url(${testimonialBg.src})`}}></div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__two-right">
                        <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>Jean Dupont, Promoteur immobilier</h4>
                                            <span>Construction d’un immeuble résidentiel</span>
                                        </div>
                                    </div>
									<p>Afrip a été un partenaire incroyable. Leur expertise et leur respect des délais ont fait toute la différence. Je recommande vivement !</p>
                                    <div className="single-slider-user-rating mt-30">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star not-rated"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>Marie Leroy, Propriétaire</h4>
                                            <span>Rénovation d’une maison</span>
                                        </div>
                                    </div>
									<p>Afrip a été très professionnel. Les matériaux étaient de haute qualité, et leurs conseils très utiles. Un grand merci !</p>
                                    <div className="single-slider-user-rating mt-30">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star not-rated"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>Pierre Martin, Chef de projet</h4>
                                            <span>Étude de structure pour un bâtiment commercial</span>
                                        </div>
                                    </div>
									<p>Afrip a fourni des calculs précis et détaillés, ce qui nous a permis de lancer le chantier en toute confiance. Très professionnel.</p>
                                    <div className="single-slider-user-rating mt-30">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star not-rated"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>Sophie Lambert, Gestionnaire de patrimoine</h4>
                                            <span>Maintenance d’un immeuble locatif</span>
                                        </div>
                                    </div>
									<p>Afrip gère la maintenance de notre immeuble depuis plus d’un an. Leur réactivité et leur expertise sont impeccables. Merci !</p>
                                    <div className="single-slider-user-rating mt-30">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star not-rated"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                            <div className="testimonial__two-right-bottom">
                                <div className="slider-arrow">
                                    <i className="swiper-button-prev fas fa-arrow-left"></i>
                                    <i className="swiper-button-next fas fa-arrow-right"></i>
                                </div>
							<div className="slider-quote">
								<img src={quoteIcon.src} alt="image" />
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

export default TestimonialTwo;