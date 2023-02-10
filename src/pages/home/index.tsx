import './styles.css'

export function Home() {
  return (
    <div className="home">
      <h2>SISTEMAS DE CONTROLES INTERNOS</h2>

      <div className="btn-group">
        <a href="https://donaines-sistemas.online/siscontrole" className="btn-panel" target="_blank">
          <small className='text-details'>Cadastro de Processos</small>
          <p className='text-content'>sisCONTROLE</p>
          <p className='text-description'>Sistema de tecnologia da informação para a organização de processos administrativos através de tramites.</p>
        </a>
        <a href="https://donaines-sistemas.online/sisexames" className="btn-panel" target="_blank">
          <small className='text-details'>Cadastro de Resultados de Exames</small>
          <p className='text-content'>sisEXAMES</p>
          <p className='text-description'>Sistema de tecnologia da informação para cadastro de resultados de exames médicos.</p>
        </a>
        <a href="https://donaines-sistemas.online/sismarp" className="btn-panel" target="_blank">
          <small className='text-details'>Monitoramento da Rede de Proteção</small>
          <p className='text-content'>sisMARP</p>
          <p className='text-description'>Sistema de tecnologia da informação para Monitoramento da Articulação da Rede de Proteção.</p>
        </a>
        <a href="https://pmdonaines.pb.gov.br/sistemas/infraestrutura" className="btn-panel" target="_blank">
          <small className='text-details'>Chamado Infraestrutura</small>
          <p className='text-content'>onINFRA</p>
          <p className='text-description'>Sistema de chamado para auxiliar na organização das demandas da Secretaria Municipal de Infraestrutura.</p>
        </a>
      </div>
    </div>
  );
}
