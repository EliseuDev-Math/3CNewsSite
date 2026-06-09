import React from "react";
import { Clock, User } from "lucide-react";
import { Noticia } from "../data/noticias";

const categoriaCores: Record<string, string> = {
  Debate: "bg-[#e63946] text-white",
  Tecnologia: "bg-[#1a56a0] text-white",
  Educação: "bg-[#2a7d4f] text-white",
  Entrevista: "bg-[#7b2d8b] text-white",
  Esportes: "bg-[#d97706] text-white",
  Política: "bg-[#374151] text-white",
  Cultura: "bg-[#0891b2] text-white",
  Geral: "bg-[#6b7280] text-white",
};

interface NoticiaCardProps {
  noticia: Noticia;
  variante?: "grande" | "medio" | "pequeno" | "lista";
  onClick: (noticia: Noticia) => void;
}

const NoticiaCard: React.FC<NoticiaCardProps> = ({
  noticia,
  variante = "medio",
  onClick,
}) => {
  const formatarData = (data: string, hora: string) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano} às ${hora}`;
  };

  const corCategoria = categoriaCores[noticia.categoria] || "bg-gray-600 text-white";

  if (variante === "grande") {
    return (
      <article
        className="relative cursor-pointer group overflow-hidden rounded-lg shadow-xl"
        onClick={() => onClick(noticia)}
      >
        <div className="relative h-80 md:h-[440px] overflow-hidden bg-[#0d2044]">
          {noticia.imagemUrl && (
            <img
              src={noticia.imagemUrl}
              alt={noticia.titulo}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-[#060d1a]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className={`inline-block px-2 py-0.5 text-xs font-bold rounded mb-3 ${corCategoria}`}>
              {noticia.categoria.toUpperCase()}
            </span>
            <h2 className="text-white font-black text-xl md:text-3xl leading-tight font-serif mb-2 group-hover:text-[#a8c7e8] transition-colors">
              {noticia.titulo}
            </h2>
            <p className="text-gray-300 text-sm md:text-base line-clamp-2 font-light">
              {noticia.subtitulo}
            </p>
            <div className="flex items-center gap-4 mt-3 text-gray-400 text-xs">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {noticia.autor}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatarData(noticia.data, noticia.hora)}
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variante === "medio") {
    return (
      <article
        className="cursor-pointer group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
        onClick={() => onClick(noticia)}
      >
        {noticia.imagemUrl && (
          <div className="h-44 overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src={noticia.imagemUrl}
              alt={noticia.titulo}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-4 flex flex-col flex-1">
          <span className={`inline-block self-start px-2 py-0.5 text-[10px] font-bold rounded mb-2 ${corCategoria}`}>
            {noticia.categoria.toUpperCase()}
          </span>
          <h3 className="text-[#0d2044] font-bold text-base leading-tight font-serif group-hover:text-[#1a56a0] transition-colors flex-1">
            {noticia.titulo}
          </h3>
          <p className="text-gray-500 text-xs mt-2 line-clamp-2">
            {noticia.subtitulo}
          </p>
          <div className="flex items-center gap-3 mt-3 text-gray-400 text-[11px] pt-3 border-t border-gray-100">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {noticia.autor}
            </span>
            <span className="flex items-center gap-1 ml-auto">
              <Clock className="w-3 h-3" />
              {formatarData(noticia.data, noticia.hora)}
            </span>
          </div>
        </div>
      </article>
    );
  }

  if (variante === "pequeno") {
    return (
      <article
        className="cursor-pointer group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex gap-3 p-3"
        onClick={() => onClick(noticia)}
      >
        {noticia.imagemUrl && (
          <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded bg-gray-100">
            <img
              src={noticia.imagemUrl}
              alt={noticia.titulo}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <span className={`inline-block px-1.5 py-0.5 text-[9px] font-bold rounded mb-1 ${corCategoria}`}>
            {noticia.categoria.toUpperCase()}
          </span>
          <h4 className="text-[#0d2044] font-bold text-xs leading-tight font-serif group-hover:text-[#1a56a0] transition-colors line-clamp-3">
            {noticia.titulo}
          </h4>
          <span className="text-gray-400 text-[10px] mt-1 flex items-center gap-1">
            <Clock className="w-2.5 h-2.5" />
            {formatarData(noticia.data, noticia.hora)}
          </span>
        </div>
      </article>
    );
  }

  // Lista
  return (
    <article
      className="cursor-pointer group flex gap-4 py-4 border-b border-gray-200 last:border-0 hover:bg-blue-50 -mx-2 px-2 rounded transition-colors"
      onClick={() => onClick(noticia)}
    >
      {noticia.imagemUrl && (
        <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded bg-gray-100">
          <img
            src={noticia.imagemUrl}
            alt={noticia.titulo}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`inline-block px-1.5 py-0.5 text-[9px] font-bold rounded ${corCategoria}`}>
            {noticia.categoria.toUpperCase()}
          </span>
          <span className="text-gray-400 text-[10px] flex items-center gap-1">
            <Clock className="w-2.5 h-2.5" />
            {formatarData(noticia.data, noticia.hora)}
          </span>
        </div>
        <h4 className="text-[#0d2044] font-bold text-sm leading-tight font-serif group-hover:text-[#1a56a0] transition-colors">
          {noticia.titulo}
        </h4>
        <p className="text-gray-500 text-xs mt-1 line-clamp-1">{noticia.subtitulo}</p>
        <span className="text-gray-400 text-[10px] flex items-center gap-1 mt-1">
          <User className="w-2.5 h-2.5" />
          {noticia.autor}
        </span>
      </div>
    </article>
  );
};

export default NoticiaCard;
