import React from "react";

const MakeStars = () => {
  var estrellas = ["verde", "azul", "violeta", "naranja", "amarilla"];
  var animation = Math.floor(Math.random() * 100) / 10;
  var delay = Math.floor(Math.random() * 10);
  var color = Math.floor(Math.random() * 5);
  var posX = Math.floor(Math.random() * 100 + 1);
  var alfa = Math.random();
  var size = Math.floor(Math.random() * 5 + 2);

  return (
    <div
      className={`estrella estrella-${estrellas[color]} animacion-estrella-${delay}`}
      style={{
        width: size,
        height: size,
        left: `${posX}%`,
        opacity: alfa,
        zIndex: "-2",
        animationDelay: `${animation}s`,
      }}
    />
  );
};

export default MakeStars;
