import servicesData from '@/components/data/services-data';
import Link from 'next/link';

const ServicesFour = () => {
    return (
        <>
            <div className="services__five section-padding">
                <div className="container">
                    <div className="row justify-content-center text-center mb-50">
                        <div className="col-xl-7 col-lg-7 col-md-9">
                            <span className="subtitle-one">Our Services</span>
                            <h2>Nos services</h2>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        {servicesData?.slice(0, 8).map((data, id) => {
							const words = data.nom.split(' ');
							const firstAndSecondWord = words.slice(0, 5).join(' ');
                            return (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                                    <div className="services__five-single-service">
                                         <img src={data.image.src} alt="image" />
                                        <div className="services__five-single-service-content">
                                        
                                            <h4>{firstAndSecondWord}</h4>
                                            <p>{data.description}</p>
                                            <Link href={`/services/${data.id}`} className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>       
        </>
    );
};

export default ServicesFour;