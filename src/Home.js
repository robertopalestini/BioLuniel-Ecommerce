import React from 'react';
import "./Home.css";
import Product from "./Product"
import bioAnsiedad from "./img/1-bioAnsiedadAngustia.png"
import bioDepresion from "./img/2-bioDepresion.png"
import bioEstres from "./img/3-bioEstres.png"
import bioIra from "./img/4-bioIra.png"
import bioPaz from "./img/5-bioPaz.png"
import bioResentimiento from "./img/6-bioResentimiento.png"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            
                <div className="home__row">
                    <Product
                    title="Bio Ansiedad/Angustia"
                    price={29.99}
                    imgProduct={bioAnsiedad}
                    rating={4}
                    />
                    <Product
                    title="Bio Depresión"
                    price={29.99}
                    imgProduct={bioDepresion}
                    rating={5}
                    />
                    </div>

                <div className="home__row">
                    <Product
                    title="Bio Estres"
                    price={29.99}
                    imgProduct={bioEstres}
                    rating={4}
                    />
                    <Product
                    title="Bio Ira"
                    price={29.99}
                    imgProduct={bioIra}
                    rating={5}
                    />
                    <Product
                    title="Bio Paz"
                    price={29.99}
                    imgProduct={bioPaz}
                    rating={4}
                    />
                </div>

                <div className="home__row">
                <Product
                    title="Bio Resentimiento"
                    price={29.99}
                    imgProduct={bioResentimiento}
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
