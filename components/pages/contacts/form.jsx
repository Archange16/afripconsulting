import React from 'react';

const FormArea = () => {
    return (
        <>
            <form action="#">
                <div className="row">
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="name" placeholder="Full Name" required="required" />
                        </div>
                    </div>
                    <div className="col-md-6 md-mb-30">
                        <div className="contact__form-area-item">
                            <input type="email" name="email" placeholder="Email Address" required="required" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                    <div className="contact__form-area-item">
                        <input type="tel" name="phone" placeholder="Téléphone (optionnel)" />
                    </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <select name="services" defaultValue="">
                                <option value="" disabled>Choisir un service</option>
                                <option value="conception-plans">Conception des plans architecturaux</option>
                                <option value="etude-projet">Étude du projet et calcul de structure et dimensionnement</option>
                                <option value="etude-topo">Étude topo</option>
                                <option value="evaluation-projet">Étude et évaluation des projets</option>
                                <option value="projection-plans">Projection des plans</option>
                                <option value="maintenance-biens">Maintenance des biens immobiliers</option>
                                <option value="mise-disposition-personnel">Mise à disposition du personnel</option>
                                <option value="conseil-immobilier">Conseil immobilier</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact__two-right-form-item">
                            <button className="btn-one" type="submit">Envoyez</button>
                        </div>
                    </div>
                </div>
            </form>            
        </>
    );
};

export default FormArea;