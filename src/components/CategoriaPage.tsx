import React from "react";
import { Noticia, Categoria } from "../data/noticias";
import NoticiaCard from "./NoticiaCard";
import Sidebar from "./Sidebar";

interface CategoriaPageProps {
  categoria: Categoria;
  noticias: Noticia[];
  topicos: string[];
  onNoticiaClick: (n: Noticia) => void;
  todasNoticias: Noticia[];
}

const CategoriaPage: React.FC<CategoriaPageProps> = ({
  categoria,
  noticias,
  topicos,
  onNoticiaClick,
  todasNoticias,
}) => {
  const noticiasOrdenadas = [...noticias].sort(
    (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
  );
  const todasOrdenadas = [...todasNoticias].sort(
    (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
  );

  const handleTopicoClick = (_topico: string) => {};

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Header da categoria */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#1a56a0]">
        <div className="w-2 h-8 bg-[#1a56a0] rounded-full" />
        <div>
          <h1 className="text-[#0d2044] font-black text-2xl font-serif">{categoria}</h1>
          <p className="text-gray-500 text-sm">
            {noticiasOrdenadas.length} {noticiasOrdenadas.length === 1 ? "notícia" : "notícias"} encontrada{noticiasOrdenadas.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {noticiasOrdenadas.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-6xl mb-4">📰</p>
          <h2 className="text-[#0d2044] font-bold text-xl mb-2">
            Nenhuma notícia encontrada
          </h2>
          <p className="text-gray-500">
            Não há notícias publicadas nesta categoria ainda.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Primeira notícia em destaque */}
            {noticiasOrdenadas.length > 0 && (
              <div className="mb-6">
                <NoticiaCard
                  noticia={noticiasOrdenadas[0]}
                  variante="grande"
                  onClick={onNoticiaClick}
                />
              </div>
            )}

            {/* Demais notícias */}
            {noticiasOrdenadas.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {noticiasOrdenadas.slice(1).map((n) => (
                  <NoticiaCard
                    key={n.id}
                    noticia={n}
                    variante="medio"
                    onClick={onNoticiaClick}
                  />
                ))}
              </div>
            )}
          </div>

          <Sidebar
            topicos={topicos}
            noticiasRecentes={todasOrdenadas}
            onNoticiaClick={onNoticiaClick}
            onTopicoClick={handleTopicoClick}
          />
        </div>
      )}
    </main>
  );
};

export default CategoriaPage;
