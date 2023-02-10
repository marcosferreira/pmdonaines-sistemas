import { Dispatch, SetStateAction } from 'react';

import './styles.css';

type PropsType = {
  menuShow: boolean,
  setMenuShow: Dispatch<SetStateAction<boolean>>
}

export function Menu({ menuShow, setMenuShow }: PropsType) {

  function handleShow() {
    setMenuShow(menuShow ? false : true);
  }

  return menuShow ? (
    <div className="menu" onClick={() => handleShow()}>
      <div className="menu-container">
        <section>
          <h4>Acesso à Informação</h4>
          <ul>
            <li><a href="https://transparencia.pmdonaines.pb.gov.br/" target="_blank">Portal da Transparência</a></li>
            <li><a href="https://esic.pmdonaines.pb.gov.br/" target="_blank">e-SIC - Informação ao Cidadão</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/carta-de-servicos/" target="_blank">Carta de Serviços</a></li>
            <li><a href="https://transparencia.pmdonaines.pb.gov.br/category/diario-oficial/" target="_blank">Diário Oficial do Município</a></li>
          </ul>
        </section>
        <section>
          <h4>Coronavírus</h4>
          <ul>
            <li><a href="https://transparencia.pmdonaines.pb.gov.br/covid-19/" target="_blank">Transparência Covid-19</a></li>
            <li><a href="https://transparencia.pmdonaines.pb.gov.br/covid-19/relatorios-covid-19/" target="_blank">Relatórios Covid-19</a></li>
          </ul>
        </section>
        <section>
          <h4>Município</h4>
          <ul>
            <li><a href="https://pmdonaines.pb.gov.br/historia-do-municipio/" target="_blank">História do Município</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/hino/" target="_blank">Hino do Município</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/feriados-municipais/" target="_blank">Feriados Municipais</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/links-uteis/" target="_blank">Links Úteis</a></li>
          </ul>
        </section>
        <section>
          <h4>Governo</h4>
          <ul>
            <li><a href="https://pmdonaines.pb.gov.br/a-prefeitura/" target="_blank">Prefeitura</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/o-prefeito/" target="_blank">Prefeito</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/o-vice-prefeito/" target="_blank">Vice-prefeito</a></li>
            <li><a href="#" target="_blank">Secretários e Diretores</a></li>
          </ul>
        </section>
        <section>
          <h4>Secretarias e Órgãos</h4>
          <ul>
            <li><a href="https://pmdonaines.pb.gov.br/secretarias-e-orgaos/gabinete-do-prefeito/" target="_blank">Gabinete do Prefeito</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/secretarias-e-orgaos/secretaria-municipal-de-administracao-e-financas/" target="_blank">Administração e Finanças</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/secretarias-e-orgaos/secretaria-municipal-de-assistencia-social-e-habitacao/" target="_blank">Assistência Social e Habitação</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/secretarias-e-orgaos/secretaria-municipal-de-cultura-e-turismo/" target="_blank">Cultura e Turismo</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/secretarias-e-orgaos/secretaria-municipal-de-educacao-e-desporto/" target="_blank">Educação e Desporto</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/secretarias-e-orgaos/secretaria-de-infraestrutura-agricultura-e-meio-ambiente/" target="_blank">Infraestrutura e Meio Ambiente</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/secretarias-e-orgaos/secretaria-municipal-de-saude/" target="_blank">Saúde</a></li>
            <li><a href="#">Impresp</a></li>
          </ul>
        </section>
        <section>
          <h4>Departamentos</h4>
          <ul>
            <li><a href="#">Agricultura</a></li>
            <li><a href="#">Obras</a></li>
            <li><a href="#">Limpeza Pública</a></li>
            <li><a href="#">Tecnologia da Informação</a></li>
          </ul>
        </section>
        <section>
          <h4>Setores</h4>
          <ul>
            <li><a href="#">Sala do Empreendedor</a></li>
            <li><a href="#">Tecnologia</a></li>
          </ul>
        </section>
        <section>
          <h4>Legislação</h4>
          <ul>
            <li><a href="https://transparencia.pmdonaines.pb.gov.br/category/leis/" target="_blank">Leis Municipais</a></li>
            <li><a href="https://transparencia.pmdonaines.pb.gov.br/decretos/" target="_blank">Decretos Municipais</a></li>
            <li><a href="https://transparencia.pmdonaines.pb.gov.br/leis/lei-organica-do-municipio-de-dona-ines-pb/" target="_blank">Lei Orgânica do Município</a></li>
            <li><a href="http://www.acessoainformacao.gov.br/assuntos/conheca-seu-direito/a-lei-de-acesso-a-informacao" target="_blank">Regulamento da LAI</a></li>
            <li><a href="https://transparencia.pmdonaines.pb.gov.br/planejamento-e-orcamento/ldo/" target="_blank">LDO</a></li>
            <li><a href="https://transparencia.pmdonaines.pb.gov.br/planejamento-e-orcamento/loa-lei-orcamentaria-anual/" target="_blank">LOA</a></li>
            <li><a href="https://transparencia.pmdonaines.pb.gov.br/planejamento-e-orcamento/ppa-plano-plurianual/" target="_blank">PPA</a></li>
            <li><a href="https://pmdonaines.pb.gov.br/lc-01-codigo-tributario/" target="_blank">Código Tributário</a></li>
          </ul>
        </section>
      </div>
    </div>

 ) : <span></span>;
}
