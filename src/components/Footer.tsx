import React from "react";
import { MapPin, Mail, Newspaper } from "lucide-react";
import { Categoria } from "../data/noticias";

const categorias: Categoria[] = [
  "Debate", "Tecnologia", "Educação", "Entrevista",
  "Esportes", "Política", "Cultura", "Geral",
];

interface FooterProps {
  onCategoriaSelect: (cat: Categoria | null) => void;
}

const Footer: React.FC<FooterProps> = ({ onCategoriaSelect }) => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-[#060d1a] text-gray-300 mt-12">
      {/* Faixa superior */}
      <div className="border-t-4 border-[#1a56a0]" />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#1a56a0] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">3C</span>
              </div>
              <div>
                <div className="text-white font-black text-xl font-serif">
                  3C <span className="text-[#4a9eda]">News</span>
                </div>
                <div className="text-[#4a7db0] text-[9px] tracking-widest uppercase">
                  Jornal do 3ºC de Informática
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Portal de notícias criado pelos alunos da Turma do 3ºC do curso técnico de Informática do IFMT, para cobrir o Debate Escolar 2025 e outros acontecimentos relevantes.
            </p>
          </div>

          {/* Seções */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-[#4a9eda]" />
              Editorias
            </h4>
            <ul className="space-y-2">
              {categorias.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onCategoriaSelect(cat)}
                    className="text-gray-400 hover:text-[#4a9eda] text-xs transition-colors text-left"
                  >
                    → {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#4a9eda]" />
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#4a9eda] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-gray-400 leading-relaxed">
                  <p className="text-[#7ab3d8] font-semibold">IFMT Campus</p>
                  <p>CEL. Octayde Jorge da Silva</p>
                  <p>Av. Senador Filinto Müller, 953</p>
                  <p>Cuiabá – MT, CEP 78.043-400</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#4a9eda] flex-shrink-0" />
                <span className="text-xs text-gray-400">imprensa@3cnews.ifmt</span>
              </div>
            </div>
          </div>

          {/* Expediente */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Expediente</h4>
            <div className="space-y-2 text-xs text-gray-400">
              <div>
                <p className="text-[#7ab3d8] font-semibold">Diretora de Redação</p>
                <p>Comissão de Imprensa — 3ºC</p>
              </div>
              <div>
                <p className="text-[#7ab3d8] font-semibold">Repórteres</p>
                <p>Alunos do 3ºC de Informática</p>
              </div>
              <div>
                <p className="text-[#7ab3d8] font-semibold">Desenvolvimento</p>
                <p>Turma 3ºC — IFMT {anoAtual}</p>
              </div>
              <div>
                <p className="text-[#7ab3d8] font-semibold">Orientação Pedagógica</p>
                <p>IFMT Campus CEL. Octayde</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#1a3a6e] bg-[#030710]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © {anoAtual}{" "}
              <span className="text-[#4a9eda] font-semibold">3C News</span> —
              Todos os direitos reservados à Turma do 3ºC de Informática
            </p>
            <p className="text-gray-600 text-xs text-center md:text-right">
              IFMT Campus CEL. Octayde Jorge da Silva — Cuiabá, Mato Grosso, Brasil
            </p>
          </div>
          <div className="mt-2 text-center">
            <p className="text-gray-600 text-[10px]">
              Desenvolvido com ❤️ pelos alunos do 3ºC — React • TypeScript • Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
