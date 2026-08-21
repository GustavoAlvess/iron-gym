import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { FaSearch, FaFire, FaDumbbell, FaUsers, FaClock, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';
import heroBg from '../assets/hero-bg.jpg';

export const Home = ({ onSelectPlano, setPaginaAtual }) => {
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Todos');
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Efeito Parallax com o movimento do mouse na Hero Section
  const handleHeroMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 45;
    const moveY = (clientY - window.innerHeight / 2) / 45;
    setParallax({ x: moveX, y: moveY });
  };

  const planos = [
    {
      id: 1,
      titulo: 'Plano Basic',
      preco: 99.9,
      descricao: 'Ideal para quem está começando agora sua jornada no fitness.',
      destaques: ['Acesso à musculação', 'Avaliador físico no app', 'Armário individual'],
      recomendado: false,
      categoria: 'Mensal',
    },
    {
      id: 2,
      titulo: 'Plano Pro',
      preco: 149.9,
      descricao: 'A experiência completa para resultados acelerados.',
      destaques: ['Acesso total 24h', 'Aulas coletivas inclusas', 'Leve 1 amigo por mês', 'Área VIP de cardio'],
      recomendado: true,
      categoria: 'Anual',
    },
    {
      id: 3,
      titulo: 'Plano Black VIP',
      preco: 219.9,
      descricao: 'Treino exclusivo com suporte personalizado e benefícios premium.',
      destaques: ['Todos os benefícios Pro', 'Personal Trainer exclusivo (1x/sem)', 'Cadeira de massagem', 'Suplementação semanal'],
      recomendado: false,
      categoria: 'Anual',
    },
  ];

  const beneficios = [
    {
      icon: <FaDumbbell />,
      titulo: 'Equipamentos Premium',
      descricao: 'Maquinário de nível olímpico importado para máxima biomecânica e eficiência.'
    },
    {
      icon: <FaChalkboardTeacher />,
      titulo: 'Trainers Certificados',
      descricao: 'Acompanhamento focado nos seus objetivos individuais com bioimpedância.'
    },
    {
      icon: <FaClock />,
      titulo: 'Acesso 24 Horas',
      descricao: 'Sua rotina não é desculpa. Unidades abertas dia e noite com segurança total.'
    },
    {
      icon: <FaUsers />,
      titulo: 'Comunidade Forte',
      descricao: 'Ambiente motivador projetado para superar seus limites diariamente.'
    },
  ];

  const planosFiltrados = planos.filter((plano) => {
    const bateTexto = plano.titulo.toLowerCase().includes(busca.toLowerCase());
    const bateCategoria = categoria === 'Todos' || plano.categoria === categoria;
    return bateTexto && bateCategoria;
  });

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      {/* ================= HERO INTERATIVA ================= */}
      <section 
        onMouseMove={handleHeroMouseMove}
        className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-zinc-800"
      >
        {/* Imagem de Fundo com Parallax e Zoom */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out scale-105"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            transform: `scale(1.08) translate(${parallax.x}px, ${parallax.y}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/40" />

        <div className="relative z-10 text-center space-y-6 max-w-5xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-950/90 border border-red-600/50 text-red-500 rounded-full text-xs font-black uppercase tracking-widest shadow-xl glow-red">
            <FaFire className="animate-pulse text-red-500" /> Transforme Seu Corpo
          </span>
          
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-none font-heading">
            SUPERE SEUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-amber-500">LIMITES</span>
          </h1>
          
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Esqueça o comum. A Iron Gym oferece estrutura de alta performance para quem busca transformação real e resultados de elite.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              variant="primary" 
              className="text-base py-4 px-10 rounded-xl font-heading uppercase tracking-wider glow-red-lg hover:scale-105 transition-all group"
              onClick={() => document.getElementById('planos').scrollIntoView({ behavior: 'smooth' })}
            >
              Escolher Meu Plano <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="secondary" 
              className="text-base py-4 px-10 rounded-xl font-heading uppercase tracking-wider hover:bg-zinc-800 hover:border-zinc-600 transition-all"
              onClick={() => setPaginaAtual('sobre')}
            >
              Conhecer a Unidade
            </Button>
          </div>
        </div>
      </section>

      {/* ================= BENEFÍCIOS COM INTERAÇÃO ================= */}
      <section className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-black text-red-500 uppercase tracking-widest">Diferenciais Exclusivos</h2>
          <p className="text-4xl md:text-5xl font-black text-white uppercase font-heading">Por que escolher a <span className="text-red-600">Iron Gym</span>?</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((ben, index) => (
            <div 
              key={index} 
              className="group bg-zinc-900/50 border border-zinc-800/80 p-8 rounded-2xl space-y-4 hover:border-red-600/50 hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-red-950/20"
            >
              <div className="text-3xl text-red-500 bg-red-950/40 border border-red-900/50 p-4 inline-block rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {ben.icon}
              </div>
              <h3 className="text-xl font-bold text-white uppercase font-heading tracking-wide group-hover:text-red-500 transition-colors">{ben.titulo}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{ben.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SEÇÃO DE PLANOS ================= */}
      <section id="planos" className="max-w-6xl mx-auto px-4 space-y-12 scroll-mt-28">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-black text-red-500 uppercase tracking-widest">Matrícula Online</h2>
          <p className="text-4xl md:text-5xl font-black text-white uppercase font-heading">Planos de <span className="text-red-600">Treino</span></p>
        </div>

        <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between shadow-2xl backdrop-blur-md">
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-4 top-3.5 text-zinc-500" />
            <input
              type="text"
              placeholder="Buscar plano ex: VIP, Pro..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-11 pr-4 py-2.5 text-white text-xs focus:border-red-600 focus:outline-none transition-all"
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto bg-zinc-950 p-1.5 rounded-xl border border-zinc-800">
            {['Todos', 'Mensal', 'Anual'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoria(cat)}
                className={`text-xs font-bold font-heading uppercase px-6 py-2 rounded-lg transition-all cursor-pointer ${
                  categoria === cat 
                    ? 'bg-red-600 text-white shadow-lg glow-red' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {planosFiltrados.length > 0 ? (
            planosFiltrados.map((plano) => (
              <Card
                key={plano.id}
                titulo={plano.titulo}
                preco={plano.preco}
                descricao={plano.descricao}
                destaques={plano.destaques}
                recomendado={plano.recomendado}
                onSelect={() => onSelectPlano(plano.titulo)}
              />
            ))
          ) : (
            <div className="col-span-full text-center bg-zinc-900/40 border border-zinc-800 rounded-2xl py-16 px-6">
              <FaSearch className="text-4xl text-zinc-700 mx-auto mb-3" />
              <p className="text-lg font-bold text-zinc-300 uppercase font-heading">Nenhum plano encontrado</p>
              <p className="text-zinc-500 text-xs mt-1">Tente pesquisar por outro termo ou selecione a opção "Todos".</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};