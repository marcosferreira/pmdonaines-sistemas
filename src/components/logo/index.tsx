import logoHeaderPNG from './assets/logo-header.png';
import logoFooterPNG from './assets/logo-footer.png';

import './styles.css'

export function LogoHeader() {
  return <img className='logo-header' src={logoHeaderPNG} alt="Logo do Cabeçalho" />
}

export function LogoFooter() {
  return <img className='logo-footer' src={logoFooterPNG} alt="Logo do Rodapé" />
}