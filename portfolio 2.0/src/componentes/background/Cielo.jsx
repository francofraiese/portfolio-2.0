import React from "react";
import MakeStars from "../../utils/MakeStars";
import './Cielo.scss'

const Cielo = () => {
  //con un set state y un event listener de resize puedo hacer la cantidad de estrellas responsive constantemente pero eso reiniciaria animacion.
  /* const [currentWidth, setCurrentWidth] = useState(window.innerWidth) */
  const startQuantity = window.innerWidth > 1200 ? 350 : window.innerWidth > 1000 ? 300 : 150
  const nullArray = Array.from({ length: startQuantity }).fill(null);

  return <div className="cielo">{nullArray.map(() => MakeStars())}</div>;
};

export default Cielo;
