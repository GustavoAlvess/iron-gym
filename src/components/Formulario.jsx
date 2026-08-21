import { useState } from 'react';
import { FaUser, FaEnvelope, FaCalendarAlt, FaBullseye, FaCheckCircle } from 'react-icons/fa';
import { matriculaSchema } from '../schema/matriculaSchema';
import { Button } from './Button';

export const Formulario = ({ planoSelecionado }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: '',
    plano: planoSelecionado || 'Plano Pro',
    objetivo: 'Hipertrofia',
  });

  const [erros, setErros] = useState({});
  const [sucesso, setSucesso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = matriculaSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setErros(fieldErrors);
      setSucesso(false);
    } else {
      setErros({});
      setSucesso(true);
      setFormData({ nome: '', email: '', idade: '', plano: 'Plano Pro', objetivo: 'Hipertrofia' });
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 max-w-xl mx-auto shadow-2xl">
      <h2 className="text-2xl font-black text-white mb-2 uppercase">Pré-Matrícula Iron Gym</h2>
      <p className="text-zinc-400 mb-6 text-sm">Preencha os dados abaixo para garantir suas condições especiais.</p>

      {sucesso && (
        <div className="mb-6 p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-lg flex items-center gap-3 text-emerald-400">
          <FaCheckCircle className="text-xl shrink-0" />
          <p className="text-sm font-medium">Matrícula enviada com sucesso! Entraremos em contato em breve.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">Nome Completo</label>
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-zinc-500" />
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-white text-sm focus:border-red-600 focus:outline-none"
            />
          </div>
          {erros.nome && <p className="text-red-500 text-xs mt-1">{erros.nome}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">E-mail</label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-zinc-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-white text-sm focus:border-red-600 focus:outline-none"
            />
          </div>
          {erros.email && <p className="text-red-500 text-xs mt-1">{erros.email}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">Idade</label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3.5 text-zinc-500" />
              <input
                type="number"
                name="idade"
                value={formData.idade}
                onChange={handleChange}
                placeholder="Ex: 22"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-white text-sm focus:border-red-600 focus:outline-none"
              />
            </div>
            {erros.idade && <p className="text-red-500 text-xs mt-1">{erros.idade}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">Plano Desejado</label>
            <select
              name="plano"
              value={formData.plano}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-white text-sm focus:border-red-600 focus:outline-none"
            >
              <option value="Plano Basic">Plano Basic</option>
              <option value="Plano Pro">Plano Pro</option>
              <option value="Plano Black VIP">Plano Black VIP</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">Objetivo Principal</label>
          <div className="relative">
            <FaBullseye className="absolute left-3 top-3.5 text-zinc-500" />
            <select
              name="objetivo"
              value={formData.objetivo}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-white text-sm focus:border-red-600 focus:outline-none"
            >
              <option value="Hipertrofia">Ganho de Massa (Hipertrofia)</option>
              <option value="Emagrecimento">Perda de Peso / Definição</option>
              <option value="Condicionamento">Condicionamento Físico</option>
              <option value="Saude">Saúde e Bem-estar</option>
            </select>
          </div>
        </div>

        <Button type="submit" variant="primary" className="w-full mt-4">
          Concluir Matrícula
        </Button>
      </form>
    </div>
  );
};