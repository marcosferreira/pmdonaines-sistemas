import { Home } from "./pages/home"
import { Footer } from './components/footer';

import './App.css';
import { LogoHeader } from "./components/logo";
import { Header } from "./components/header";
import { TransparencyBar } from "./components/transparency-bar";

function App() {
  return (
    <div className="App">
      <TransparencyBar />
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
