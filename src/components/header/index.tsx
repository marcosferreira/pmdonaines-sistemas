import { LogoHeader } from "../logo";

import './styles.css';

export function Header() {
  return (
    <header className="header menubar">
      <div className="container">
        <div className="header-container">
          <div className="header-content">
            <button className="btn btn-menu" >
              <i id="button-menu-icon" className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <LogoHeader />
          </div>
          <div className="header-content header-right">
            <ul>
              <li><a href="http://esic.pmdonaines.pb.gov.br/" target="_blank">Acesso à Informação</a></li>
              <li><a href="https://pmdonaines.pb.gov.br/carta-de-servicos/" target="_blank">Carta de Serviços</a></li>
              <li><a className="btn btn-emphasis" href="https://transparencia.pmdonaines.pb.gov.br" target="_blank">Portal da Transparência</a></li>
            </ul>

            <a className="btn" href="https://pmdonaines.pb.gov.br/?s" target="_blank">
              <span className="material-icons-outlined">search</span>
            </a>
          </div>
        </div>
      </div >
    </header >
  );
}