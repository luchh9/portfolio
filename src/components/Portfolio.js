import React from "react";
import Proyect from "./Proyect";
import proyectImg from "../assets/statics/Group_1.png";

export default function Portfolio() {
  const proyects = [
    {
      id: 1,
      title: "SuperheroApp",
      description:
        "Aplicacion que puedes buscar cualquier superheroe! Puedes ver sus stats individualmente y formar equipos a tu gusto!",
      code: "https://github.com/luchh9/superheroapp",
      img: proyectImg,
      tecnologies: ["CSS/Bootstrap", "React js"],
    },
    {
      id: 2,
      title: "pokeApp",
      description:
        "Aplicacion que puedes buscar cualquier superheroe! Puedes ver sus stats individualmente y formar equipos a tu gusto!",
      code: "https://github.com/luchh9/superheroapp",
      img: proyectImg,
      tecnologies: ["CSS/Bootstrap", "React js"],
    },
    {
      id: 3,
      title: "StickStore",
      description:
        "Aplicacion que puedes buscar cualquier superheroe! Puedes ver sus stats individualmente y formar equipos a tu gusto!",
      code: "https://github.com/luchh9/superheroapp",
      img: proyectImg,
      tecnologies: ["CSS/Bootstrap", "React js"],
    },
  ];
  return (
    <section id="proyects" className="portfolio">
      <h1 className="centrar">Proyects</h1>
      <div className="container caca">
        {proyects.map((item) => (
          <Proyect item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
