import card from "../images/icons/cards.png";
import mail from "../images/icons/buzon.png";
import devolution from "../images/icons/devolution.png";
import open from "../images/icons/open.png";
import "../styles/Icons.scss";

function SectionHomeTwo() {
  return (
    <div className="icons-container">
      <div className="div-icon">
        <img className="icon" src={card} alt="" />
        <h2 className="title-icon">Pagos Seguros</h2>
        <p className="subtitle-icon">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <div className="div-icon">
        <img className="icon" src={mail} alt="" />
        <h2 className="title-icon">Recogida en Oficina de Correos</h2>
        <p className="subtitle-icon">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <div className="div-icon">
        <img className="icon" src={devolution} alt="" />
        <h2 className="title-icon">Cambio y devoluciones </h2>
        <p className="subtitle-icon">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <div className="div-icon">
        <img className="icon" src={open} alt="" />
        <h2 className="title-icon">Recogida y devolución en tienda </h2>
        <p className="subtitle-icon">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
    </div>
  );
}

export default SectionHomeTwo;
