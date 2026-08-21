import { FaDumbbell, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-12 pb-6 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 text-red-600 font-black text-2xl tracking-wider mb-4">
            <FaDumbbell />
            <span>IRON<span className="text-white">GYM</span></span>
          </div>
          <p className="text-sm text-zinc-500">
            A estrutura de alto rendimento que você precisa para alcançar seus objetivos físicos com acompanhamento profissional.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Unidade e Horários</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-600" /> Av. dos Atletas, 1000 - Centro</li>
            <li className="flex items-center gap-2"><FaClock className="text-red-600" /> Seg - Sex: 05h às 23h</li>
            <li className="flex items-center gap-2"><FaClock className="text-red-600" /> Sáb e Dom: 08h às 14h</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Redes Sociais</h4>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-zinc-900 hover:bg-red-600 hover:text-white rounded-lg transition-colors">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="p-3 bg-zinc-900 hover:bg-red-600 hover:text-white rounded-lg transition-colors">
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-zinc-600 border-t border-zinc-900 pt-6">
        © {new Date().getFullYear()} Iron Gym. Projeto Desenvolvido para a Sprint React.
      </div>
    </footer>
  );
};