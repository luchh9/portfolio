import React from "react";

export default function Proyect(props) {
  const { title, description, code, img, tecnologies } = props.item;

  return (
    <div className="row single-proyect">
      <div className="col-md-6 ">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul className="proyect-links">
          <a href={code}>source code</a>
        </ul>
        <ul className="proyect-tecnologies">
          {tecnologies.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
