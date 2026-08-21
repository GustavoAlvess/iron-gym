import { Formulario } from '../components/Formulario';

export const Contato = ({ planoSelecionado }) => {
  return (
    <div className="py-6">
      <Formulario planoSelecionado={planoSelecionado} />
    </div>
  );
};