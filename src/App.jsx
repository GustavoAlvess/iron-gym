import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Contato } from './pages/Contato';

export default function App() {
  const [paginaAtual, setPaginaAtual] = useState('home');
  const [planoSelecionado, setPlanoSelecionado] = useState('Plano Pro');

  const handleSelectPlano = (nomePlano) => {
    setPlanoSelecionado(nomePlano);
    setPaginaAtual('contato');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col justify-between selection:bg-red-600 selection:text-white">
      <Header paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />

      <main className="flex-1 w-full">
        {paginaAtual === 'home' && (
          <Home 
            onSelectPlano={handleSelectPlano} 
            setPaginaAtual={setPaginaAtual} 
          />
        )}
        
        {paginaAtual === 'sobre' && (
          <div className="max-w-6xl mx-auto px-4">
            <Sobre />
          </div>
        )}
        
        {paginaAtual === 'contato' && (
          <div className="max-w-6xl mx-auto px-4">
            <Contato planoSelecionado={planoSelecionado} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}