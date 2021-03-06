import React, { Fragment } from "react";
import Header from "./Header";
import Congratulations from "./Congratulations";
import Guests from "./Guests";
import Countdown from "./CountDown";
import Footer from "./Footer";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Countdown />
      <section className="marry-section">
        <div className="marry-img"></div>
        <div className="marry-text">
          <h2>¡Nos casamos!</h2>
          <p>
            Y queremos que formes parte de este día tan especial para nosotros,
            porque los mejores momentos en la vida siempre hay que compartirlos.
          </p>
        </div>
      </section>
      <Guests />
      <Congratulations />
      <section className="wedding-state-section">
        <div className="wedding-state-img"></div>
        <div className="wedding-state-text">
          <h2>Nos vemos en La Estación</h2>
          <div>
            <p>
              Dirección: <span>40422 Otero de Herreros, Segovia</span>
            </p>
            <a
              className="wedding-state-link"
              target="blank"
              href="https://www.google.es/maps/place/Finca+La+Estaci%C3%B3n/@40.7997184,-4.2086465,16.42z/data=!4m5!3m4!1s0xd4110cb518df2d5:0x15b3ad6552e8e2cf!8m2!3d40.7994051!4d-4.20524?hl=es"
            >
              Ver en el mapa
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
