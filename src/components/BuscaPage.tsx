import React from "react";
import { Search } from "lucide-react";
import { Noticia } from "../data/noticias";
import NoticiaCard from "./NoticiaCard";

interface BuscaPageProps {
  query: string;
  noticias: Noticia[];
  onNoticiaClick: (n: Noticia) => void;
}

const BuscaPage: React.FC<BuscaPageProps> = ({ query, noticias, onNoticiaClick }) => {
  const noticiasOrdenadas = [...noticias].sort(
    (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#1a56a0]">
        <Search className="w-6 h-6 text-[#1a56a0]" />
        <div>
          <h1 className="text-[#0d2044] font-black text-2xl font-serif">
            Resultados para "{query}"
          </h1>
          <p className="text-gray-500 text-sm">
            {noticiasOrdenadas.length} resultado{noticiasOrdenadas.length !== 1 ? "s" : ""} encontrado{noticiasOrdenadas.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {noticiasOrdenadas.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-6xl mb-4">🔍</p>
          <h2 className="text-[#0d2044] font-bold text-xl mb-2">
            Nenhum resultado encontrado
          </h2>
          <p className="text-gray-500">
            Tente buscar por outros termos, categorias ou nomes de autores.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {noticiasOrdenadas.map((n) => (
            <NoticiaCard
              key={n.id}
              noticia={n}
              variante="medio"
              onClick={onNoticiaClick}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default BuscaPage;
