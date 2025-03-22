import React, { useState } from 'react';
import Count from '../common/count';

const FaqFour = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const faqs = [
        {
          "question": "Quels types de matériaux proposez-vous ?",
          "answer": {
            "introduction": "Nous proposons une large gamme de matériaux de construction pour répondre à tous vos besoins :",
            "description": [
              "Béton : Pour des fondations solides et durables.",
              "Acier : Idéal pour les structures résistantes.",
              "Bois : Pour des constructions écologiques et esthétiques.",
              "Briques et parpaings : Pour des murs robustes et isolants.",
              "Isolants : Pour améliorer l’efficacité énergétique de vos bâtiments."
            ]
          },
          "description2": "Vous ne trouvez pas ce que vous cherchez ? Contactez-nous pour une solution sur mesure !"
        },
        {
          "question": "Combien de temps prend une étude de structure ?",
          "answer": {
            "introduction": "Le temps nécessaire pour une étude de structure dépend de la complexité de votre projet. En général :",
            "description": [
              "Petits projets (maisons individuelles) : 1 à 2 semaines.",
              "Projets moyens (bâtiments commerciaux) : 2 à 4 semaines.",
              "Grands projets (immeubles, infrastructures) : 4 à 8 semaines."
            ]
          },
          "description2": "Nous nous engageons à respecter les délais tout en garantissant la précision de nos calculs."
        },
        {
          "question": "Proposez-vous des services de maintenance pour les bâtiments existants ?",
          "answer": {
            "introduction": "Oui, nous proposons des services de maintenance complets pour les bâtiments existants, notamment :",
            "description": [
              "Entretien de la toiture : Réparations et étanchéité.",
              "Plomberie et électricité : Dépannage et modernisation.",
              "Revêtements muraux et sols : Rénovation et remplacement.",
              "Contrats de maintenance annuels : Pour une gestion proactive de vos biens immobiliers."
            ]
          },
          "description2": "Demandez-nous un devis personnalisé pour vos besoins de maintenance !"
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
        <div className="faq__two section-padding">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-xl-6">
                        <div className="faq__two-title">
                            <span className="subtitle-one">Poser une question</span>
                            <h2>Vous avez une question ? <span className="highlighted-two">Nous avons </span>la réponse !</h2>
                            <p>Chez Afrip, nous croyons en la transparence et en la communication. Si vous avez des questions sur nos services, nos matériaux ou votre projet, notre équipe est là pour vous aider. Voici quelques-unes des questions que nous recevons fréquemment :</p>
                        </div>
                        <div className="award">
                            <div className="award-wrapper">
                                <div className="award-icon">
                                    <i className="fas fa-award"></i>
                                </div>
                                <div className="award-count">
                                    <h3>+ </h3>
                                    <h3 className="counter"><Count number={200}/></h3>
                                </div>
                                <span>Clients satisfaits</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="faq-collapse">
                            {faqs.map((faq, index) => (
                                <div className="faq-collapse-item" key={index}>
                                    <div className={`faq-collapse-item-card ${activeIndex === index ? 'active' : ''}`}>
                                        <div className="faq-collapse-item-card-header" onClick={() => toggleFaq(index)}>
                                            <h6>{faq.question}</h6>
                                            <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </div>
                                        <div className={`faq-collapse-item-card-header-content ${activeIndex === index ? 'active' : 'display-none'}`}>
                                            <p>{faq.answer.introduction}</p>
                                            <ul>
                                              {faq.answer.description.map((desc, idx) => (
                                                <li key={idx}>{desc}</li>
                                              ))}
                                            </ul>
                                            <p>{faq.description2}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>	
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default FaqFour;
