import { useState } from 'react';
import { FaDumbbell, FaBars, FaTimes } from 'react-icons/fa';

export const Header = ({ paginaAtual, setPaginaAtual }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'contato', label: 'Matrícula & Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => setPaginaAtual('home')} className="flex items-center gap-2 text-red-600 font-black text-2xl tracking-wider cursor-pointer">
          <FaDumbbell className="text-3xl" />
          <span>IRON<span className="text-white">GYM</span></span>
        </button>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPaginaAtual(item.id)}
              className={`font-semibold transition-colors cursor-pointer ${
                paginaAtual === item.id ? 'text-red-500 border-b-2 border-red-500 pb-1' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="md:hidden text-zinc-300 text-2xl cursor-pointer" onClick={() => setMenuAberto(!menuAberto)}>
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuAberto && (
        <nav className="md:hidden bg-zinc-900 border-b border-zinc-800 px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setPaginaAtual(item.id);
                setMenuAberto(false);
              }}
              className={`text-left font-semibold py-2 ${paginaAtual === item.id ? 'text-red-500' : 'text-zinc-400'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};