import React from "react";
import Shoe from "../img/Shoe.png";
import Wild from "../img/Wild.png";
import Olentzero from "../img/Olentzero.png";
import Portfoliov1 from "../img/portfolio.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        className="portfolio__carousel"
      >
        <a href="https://jarod79.github.io/Shoe-Shepherd-Site/" target="blank">
          <img src={Shoe} alt="Shoe Shepherd" />
          <p className="legend" style={{ fontSize: "2vw" }}>
            Premier projet de la formation, un site pour la sauvegarde des
            chaussures abandonnées. Javascript, HTML, CSS, Github.
          </p>
        </a>
        <a href="https://jarod79.github.io/wild-heroes/#/" target="blank">
          <img src={Wild} alt="Wild heroes" />
          <p className="legend" style={{ fontSize: "2vw" }}>
            Deuxième projet de la formation, basé sur une API de super-héros.
            Javascript, React, CSS, Api rest, Github.
          </p>
        </a>
        <a href="https://jarod79.github.io/olentzero-music/" target="blank">
          <img src={Olentzero} alt="Olentzero" />
          <p className="legend" style={{ fontSize: "2vw" }}>
            Projet de calendrier de l'avent, lors d'un hackaton de 30 heures.
            Javascript, React, CSS, Github.
          </p>
        </a>
        <a href="https://jarod79.github.io/portfolio/" target="blank">
          <img src={Portfoliov1} alt="Portfolio" />
          <p className="legend" style={{ fontSize: "2vw" }}>
            Mon premier portfolio créé sous react avec un back pour les envois
            d'émail.
          </p>
        </a>
      </Carousel>
    </div>
  );
};
export default Portfolio;
