import { useState } from "react";
import { LogoHeader } from "../logo";
import { Menu } from "../menu";

import './styles.css';

export function Header() {
  const [menuShow, setMenuShow] = useState<boolean>(false);

  function handleMenuShow() {
    setMenuShow(menuShow ? false : true);
  }

  return (
    <header className="header menubar" onClick={() => handleMenuShow()}>
      <div className="menu-shadow">
        <div className="container">
          <div className="header-container">
            <div className="header-content">
              <button className="btn btn-menu" onClick={() => handleMenuShow()}>
                <i id="button-menu-icon" className="fa fa-bars" aria-hidden="true"></i>
              </button>
              <LogoHeader />
            </div>
            <div className="header-content">
              <ul>
                <li className="mobile-hidden"><a href="http://esic.pmdonaines.pb.gov.br/" target="_blank">Acesso à Informação</a></li>
                <li className="mobile-hidden"><a href="https://pmdonaines.pb.gov.br/carta-de-servicos/" target="_blank">Carta de Serviços</a></li>
                <li className="mobile-hidden"><a className="btn btn-emphasis" href="https://transparencia.pmdonaines.pb.gov.br" target="_blank">Portal da Transparência</a></li>
              </ul>

              <a className="btn" href="https://pmdonaines.pb.gov.br/?s" target="_blank">
                <span className="material-icons-outlined">search</span>
              </a>
            </div>
          </div>
        </div >
      </div>
      <Menu menuShow={menuShow} setMenuShow={setMenuShow} />
    </header >
  );
}