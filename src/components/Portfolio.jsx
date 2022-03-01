import React from "react";
import Shoe from "../img/Shoe.png";
import Wild from "../img/Wild.png";
import Olentzero from "../img/Olentzero.png";
import Portfoliov1 from "../img/portfolio.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Portfolio = () => {
  // Array from display infos in carousel
  const carouselInfos = [
    {
      link: "https://jarod79.github.io/Shoe-Shepherd-Site/",
      name: "Shoe Shepherd",
      image: Shoe,
      text: `Premier projet de la formation, un site pour la sauvegarde des
            chaussures abandonnées. Javascript, HTML, CSS, Github.`
    },
    {
      link: "https://jarod79.github.io/wild-heroes/#/",
      name: "Wild Heroes",
      image: Wild,
      text: `Deuxième projet de la formation, basé sur une API de super-héros.
            Javascript, React, CSS, Api rest, Github.`
    },
    {
      link: "https://jarod79.github.io/olentzero-music/",
      name: "Olentzero",
      image: Olentzero,
      text: `Projet de calendrier de l'avent, lors d'un hackaton de 30 heures.
            Javascript, React, CSS, Github.`
    },
    {
      link: "https://jarod79.github.io/portfolio/",
      name: "Portfolio",
      image: Portfoliov1,
      text: `Mon premier portfolio créé sous react avec un back pour les envois
            d'émail.`
    }
  ];
  return (
    <div className="portfolio">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        className="portfolio__carousel"
      >
        {carouselInfos.map((carousel, index) => (
          <a key={index} href={carousel.link} target="blank">
            <p className="portfolio__link">{carousel.text}</p>
            <img src={carousel.image} alt={carousel.name} />
            <p className="legend" style={{ fontSize: "2vw" }}>
              {carousel.text}
            </p>
          </a>
        ))}
      </Carousel>
    </div>
  );
};
export default Portfolio;
