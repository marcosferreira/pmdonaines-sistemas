import './styles.css'

export function TransparencyBar() {
  return (
    <div className="transparency-bar">
      <div className="container">
        <nav className="transparency-nav">
          <ul>
            <li><a href="https://transparencia.pmdonaines.pb.gov.br/" target="_blank">TRANSPARÊNCIA</a></li>
            <li><a href="http://webmail.pmdonaines.pb.gov.br/" target="_blank">WEBMAIL</a></li>
            <li><a href="https://pmdonaines.pb.gov.br">VOLTAR</a></li>
          </ul>

          <ul>
            <li><a href="#"> +A</a></li>
            <li><a href="#"> -A</a></li>
            <li><a href="#">AUTO CONTRASTE</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}