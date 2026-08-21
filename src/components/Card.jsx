import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Button } from './Button';

export const Card = ({ titulo, preco, descricao, destaques, recomendado, onSelect }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group bg-zinc-900/80 backdrop-blur-sm border ${
        recomendado ? 'border-red-600 glow-red' : 'border-zinc-800 hover:border-zinc-700'
      } rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl overflow-hidden`}
    >
      {/* Efeito Spotlight Segue o Cursor do Mouse */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 38, 38, 0.15), transparent 40%)`,
          }}
        />
      )}

      {recomendado && (
        <span className="absolute -top-0 right-8 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-b-lg shadow-lg">
          Mais Popular
        </span>
      )}

      <div className="relative z-10">
        <h3 className="text-3xl font-black text-white uppercase tracking-wider font-heading">{titulo}</h3>
        <p className="text-zinc-400 text-xs mt-2 mb-6 leading-relaxed">{descricao}</p>

        <div className="flex items-baseline gap-1 my-4">
          <span className="text-sm font-semibold text-red-500">R$</span>
          <span className="text-5xl font-black text-white font-heading">{preco.toFixed(2)}</span>
          <span className="text-zinc-500 text-xs font-medium">/mês</span>
        </div>

        <ul className="space-y-3 my-8 border-t border-zinc-800/80 pt-6">
          {destaques.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-zinc-300 text-xs font-medium">
              <div className="p-1 rounded-full bg-red-950 text-red-500 border border-red-800/40">
                <FaCheck className="text-[10px]" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 pt-4">
        <Button
          variant={recomendado ? 'primary' : 'secondary'}
          onClick={onSelect}
          className="w-full group-hover:scale-[1.02] transition-transform"
        >
          Matricular-se
        </Button>
      </div>
    </div>
  );
};