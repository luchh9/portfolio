import React from "react";
import Proyect from "./Proyect";
// import proyectImg from "../assets/statics/Group_1.png";
import Sticker_screen from "../assets/statics/StickStore_1.png";
import Hero_screen from "../assets/statics/Superhero_1.png";
import Poke_screen from "../assets/statics/pokemario.png";

import "../assets/css/Portfolio.css";

export default function Portfolio() {
  const proyects = [
    {
      id: 1,
      title: "SuperheroApp",
      description:
        "Aplicacion que puedes buscar cualquier superheroe! Puedes ver sus stats individualmente y formar equipos a tu gusto!",
      code: "https://github.com/luchh9/superheroapp",
      demo: "",
      img: Hero_screen,
      tecnologies: ["CSS/Bootstrap", "React js"],
    },
    {
      id: 2,
      title: "Pokemario",
      description:
        "Pokedex. Contiene todos los pokemones de todas las regiones.",
      code: "https://github.com/luchh9/superheroapp",
      demo: "https://pokemario.netlify.app/",
      img: Poke_screen,
      tecnologies: ["CSS/Bootstrap", "React js"],
    },
    {
      id: 3,
      title: "StickStore",
      description:
        "Aplicacion first mobile. Un store de stickers y su carrito de compras!",
      code: "https://github.com/luchh9/superheroapp",
      demo: "https://stickstore.netlify.app",
      img: Sticker_screen,
      tecnologies: ["CSS/Bootstrap", "React js"],
    },
  ];

  return (
    <section id="proyects" className="portfolio">
      <h1 className="centrar">Proyectos</h1>
      <div className="container">
        {proyects.map((item) => (
          <Proyect item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
