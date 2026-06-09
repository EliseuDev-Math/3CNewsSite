import React from "react";
import { TrendingUp, MapPin, Info, Tag } from "lucide-react";
import { Noticia } from "../data/noticias";

interface SidebarProps {
  topicos: string[];
  noticiasRecentes: Noticia[];
  onNoticiaClick: (n: Noticia) => void;
  onTopicoClick: (topico: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  topicos,
  noticiasRecentes,
  onNoticiaClick,
  onTopicoClick,
}) => {
  return (
    <aside className="space-y-6">
      {/* Tópicos Relevantes */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-[#0d2044] px-4 py-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#4a9eda]" />
          <h3 className="text-white font-bold text-sm uppercase tracking-wide">
            Tópicos Relevantes
          </h3>
        </div>
        <div className="p-3 flex flex-wrap gap-2">
          {topicos.map((topico, i) => (
            <button
              key={i}
              onClick={() => onTopicoClick(topico)}
              className="group flex items-center gap-1 bg-[#f0f4fa] hover:bg-[#1a56a0] text-[#0d2044] hover:text-white text-xs font-medium px-3 py-1.5 rounded-full border border-[#c8d8ee] hover:border-[#1a56a0] transition-all duration-200"
            >
              <Tag className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
              {topico}
            </button>
          ))}
        </div>
      </div>

      {/* Mais lidas */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-[#0d2044] px-4 py-3">
          <h3 className="text-white font-bold text-sm uppercase tracking-wide">
            Últimas Notícias
          </h3>
        </div>
        <div className="divide-y divide-gray-100">
          {noticiasRecentes.slice(0, 5).map((noticia, i) => (
            <button
              key={noticia.id}
              onClick={() => onNoticiaClick(noticia)}
              className="w-full text-left p-3 hover:bg-[#f0f4fa] transition-colors group flex gap-3 items-start"
            >
              <span className="font-black text-2xl text-[#c8d8ee] group-hover:text-[#1a56a0] transition-colors leading-none mt-0.5 flex-shrink-0 w-6">
                {i + 1}
              </span>
              <div>
                <p className="text-[#0d2044] font-semibold text-xs leading-tight group-hover:text-[#1a56a0] transition-colors line-clamp-3">
                  {noticia.titulo}
                </p>
                <p className="text-gray-400 text-[10px] mt-1">
                  {noticia.data.split("-").reverse().join("/")} — {noticia.autor}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Sobre o portal */}
      <div className="bg-[#0d2044] rounded-lg overflow-hidden shadow-sm">
        <div className="px-4 py-3 border-b border-[#1a3a6e] flex items-center gap-2">
          <Info className="w-4 h-4 text-[#4a9eda]" />
          <h3 className="text-white font-bold text-sm uppercase tracking-wide">
            Sobre o Portal
          </h3>
        </div>
        <div className="p-4">
          <p className="text-gray-300 text-xs leading-relaxed mb-3">
            O <strong className="text-[#4a9eda]">3C News</strong> é o portal de notícias da Turma do 3ºC de Informática, criado para cobrir o Debate Escolar 2025 e os principais acontecimentos da turma.
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <MapPin className="w-3 h-3 text-[#4a9eda] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#7ab3d8] font-semibold">IFMT Campus</p>
                <p className="text-gray-400">CEL. Octayde Jorge da Silva</p>
                <p className="text-gray-400">Cuiabá – MT</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box de destaque do debate */}
      <div className="bg-gradient-to-br from-[#1a56a0] to-[#0d2044] rounded-lg p-4 shadow-lg border border-[#2166c0]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🎙️</span>
          <h3 className="text-white font-black text-sm">Debate Escolar 2025</h3>
        </div>
        <p className="text-[#a8c7e8] text-xs leading-relaxed">
          Acompanhe a cobertura completa do grande debate promovido pela Turma do 3ºC de Informática do IFMT.
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#e63946] rounded-full animate-pulse" />
          <span className="text-[#e63946] text-[10px] font-bold uppercase tracking-wide">
            Cobertura em tempo real
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
