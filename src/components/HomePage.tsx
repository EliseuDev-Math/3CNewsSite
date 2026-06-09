import React from "react";
import { ChevronRight } from "lucide-react";
import { Noticia, Categoria } from "../data/noticias";
import NoticiaCard from "./NoticiaCard";
import Sidebar from "./Sidebar";

interface HomePageProps {
  noticias: Noticia[];
  topicos: string[];
  onNoticiaClick: (n: Noticia) => void;
  onCategoriaSelect: (cat: Categoria | null) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  noticias,
  topicos,
  onNoticiaClick,
  onCategoriaSelect,
}) => {
  const noticiasOrdenadas = [...noticias].sort(
    (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
  );
  const noticiaDestaque = noticiasOrdenadas.find((n) => n.destaque) || noticiasOrdenadas[0];
  const noticiasSecundarias = noticiasOrdenadas
    .filter((n) => n.id !== noticiaDestaque.id)
    .slice(0, 2);
  const noticiasGrade = noticiasOrdenadas
    .filter((n) => n.id !== noticiaDestaque.id && !noticiasSecundarias.find((s) => s.id === n.id))
    .slice(0, 4);
  const noticiasLista = noticiasOrdenadas
    .filter((n) => !noticiasGrade.find((g) => g.id === n.id) && n.id !== noticiaDestaque.id && !noticiasSecundarias.find((s) => s.id === n.id))
    .slice(0, 6);

  const categorias: Categoria[] = [
    "Debate", "Tecnologia", "Educação", "Entrevista",
  ];

  const handleTopicoClick = (topico: string) => {
    // Busca por tópico como categoria ou palavra-chave
    const catMatch = ["Debate","Tecnologia","Educação","Entrevista","Esportes","Política","Cultura","Geral"].find(
      (c) => c.toLowerCase() === topico.toLowerCase()
    ) as Categoria | undefined;
    if (catMatch) {
      onCategoriaSelect(catMatch);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Grade principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Manchete principal */}
        <div className="lg:col-span-2">
          <NoticiaCard
            noticia={noticiaDestaque}
            variante="grande"
            onClick={onNoticiaClick}
          />
        </div>

        {/* Secundárias */}
        <div className="flex flex-col gap-4">
          {noticiasSecundarias.map((n) => (
            <NoticiaCard
              key={n.id}
              noticia={n}
              variante="medio"
              onClick={onNoticiaClick}
            />
          ))}
        </div>
      </div>

      {/* Divisor de seção */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-[#1a56a0] rounded-full" />
        <h2 className="text-[#0d2044] font-black text-lg font-serif">Mais Notícias</h2>
        <div className="flex-1 h-px bg-gray-200" />
        <button
          onClick={() => onCategoriaSelect(null)}
          className="text-[#1a56a0] hover:text-[#0d2044] text-xs font-semibold flex items-center gap-1 transition-colors"
        >
          Ver todas <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Grade de notícias + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Grade de 4 notícias */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {noticiasGrade.map((n) => (
              <NoticiaCard
                key={n.id}
                noticia={n}
                variante="medio"
                onClick={onNoticiaClick}
              />
            ))}
          </div>

          {/* Mais notícias em lista */}
          {noticiasLista.length > 0 && (
            <>
              <div className="flex items-center gap-3 mb-0">
                <div className="w-1 h-6 bg-[#e63946] rounded-full" />
                <h2 className="text-[#0d2044] font-black text-lg font-serif">Últimas</h2>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                {noticiasLista.map((n) => (
                  <NoticiaCard
                    key={n.id}
                    noticia={n}
                    variante="lista"
                    onClick={onNoticiaClick}
                  />
                ))}
              </div>
            </>
          )}

          {/* Por categoria */}
          {categorias.map((cat) => {
            const noticiasCat = noticiasOrdenadas.filter((n) => n.categoria === cat).slice(0, 2);
            if (noticiasCat.length === 0) return null;
            return (
              <div key={cat}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-[#1a56a0] rounded-full" />
                  <h2 className="text-[#0d2044] font-black text-lg font-serif">{cat}</h2>
                  <div className="flex-1 h-px bg-gray-200" />
                  <button
                    onClick={() => onCategoriaSelect(cat)}
                    className="text-[#1a56a0] hover:text-[#0d2044] text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    Ver mais <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {noticiasCat.map((n) => (
                    <NoticiaCard
                      key={n.id}
                      noticia={n}
                      variante="medio"
                      onClick={onNoticiaClick}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sidebar */}
        <Sidebar
          topicos={topicos}
          noticiasRecentes={noticiasOrdenadas}
          onNoticiaClick={onNoticiaClick}
          onTopicoClick={handleTopicoClick}
        />
      </div>
    </main>
  );
};

export default HomePage;
