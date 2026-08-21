import { FaCheckCircle, FaUsers, FaTrophy, FaHeartbeat } from 'react-icons/fa';

export const Sobre = () => {
  const estatisticas = [
    { icon: <FaUsers />, valor: '+2.500', rotulo: 'Alunos Ativos' },
    { icon: <FaTrophy />, valor: '100%', rotulo: 'Equipamentos Importados' },
    { icon: <FaHeartbeat />, valor: '15', rotulo: 'Profissionais Certificados' },
  ];

  return (
    <div className="space-y-12 py-6 max-w-4xl mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-black text-white uppercase">A Matriz da <span className="text-red-600">Força</span></h1>
        <p className="text-zinc-400">
          Fundada para ser uma referência em treinamento de alta performance e bem-estar físico.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {estatisticas.map((stat, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl text-center space-y-2">
            <div className="text-red-600 text-3xl flex justify-center">{stat.icon}</div>
            <div className="text-3xl font-black text-white">{stat.valor}</div>
            <div className="text-xs text-zinc-400 uppercase font-bold">{stat.rotulo}</div>
          </div>
        ))}
      </div>

      <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl space-y-4">
        <h2 className="text-2xl font-bold text-white">Nossa Filosofia</h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Na Iron Gym, não acreditamos em atalhos. Acreditamos na consistência, no ambiente certo e no acompanhamento direcionado. Toda a nossa estrutura foi projetada para minimizar distrações e focar na sua evolução individual.
        </p>
      </section>
    </div>
  );
};