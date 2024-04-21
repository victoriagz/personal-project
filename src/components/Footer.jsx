import React from "react";
import MetodosDePago from "../images/metodos-pago.png";

function Footer() {
  return (
    <div className="footer">
      <ul className="ul-footer">
        <li className="li-footer">Política de Privacidad</li>
        <li className="li-footer">Aviso Legal</li>
        <li className="li-footer">Política de Cookies</li>
        <li className="li-footer"> Consentimiento de Cookies</li>
      </ul>
      <img className="payments" src={MetodosDePago} alt="" />
      <div className="footer-end">
        <p> © 2024, Hecho con amor. VickyG </p>
        <p className="credits"> Adalab. </p>
      </div>
    </div>
  );
}

export default Footer;
