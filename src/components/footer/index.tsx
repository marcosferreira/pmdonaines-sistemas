import { LogoFooter } from "../logo";

import './styles.css'

export function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-justify-between">
          <address>
            <b>Av. Major Augusto Bezerra, 02, Centro CEP: 58.228-000 - Dona Inês - PB</b> <br />
            <b> E-mail:</b> <a href="mailto:gabinete@pmdonaines.pb.gov.br">gabinete@pmdonaines.pb.gov.br </a> <br />
            <b> Telefone:</b> <a href="tel:+558333771025"> (83) 3377-1025</a> / <a href="tel:+558333771110"> 3377-1110 </a> <br />
            <b> Exp.:</b> Segunda a Sexta: 07:30h à 11:30h - 13:30h às 17:00 <br />
            <b> CNPJ:</b> 08.782.146/0001-48
          </address>

          <a className="logo-link" href="#">
            <LogoFooter />
          </a>
        </div>
      </div>
    </div>
  )
}