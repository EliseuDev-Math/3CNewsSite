import React from "react";
import { ArrowLeft, Clock, User, Link, Printer } from "lucide-react";
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

interface NoticiaDetalheProps {
  noticia: Noticia;
  onVoltar: () => void;
  noticiasRelacionadas: Noticia[];
  onNoticiaClick: (n: Noticia) => void;
}

const NoticiaDetalhe: React.FC<NoticiaDetalheProps> = ({
  noticia,
  onVoltar,
  noticiasRelacionadas,
  onNoticiaClick,
}) => {
  const formatarData = (data: string, hora: string) => {
    const [ano, mes, dia] = data.split("-");
    const meses = [
      "janeiro","fevereiro","março","abril","maio","junho",
      "julho","agosto","setembro","outubro","novembro","dezembro",
    ];
    return `${dia} de ${meses[parseInt(mes) - 1]} de ${ano}, às ${hora}`;
  };

  const corCategoria = categoriaCores[noticia.categoria] || "bg-gray-600 text-white";

  const handleShare = (plataforma: string) => {
    const url = window.location.href;
    const texto = encodeURIComponent(noticia.titulo);
    if (plataforma === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
    } else if (plataforma === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${texto}&url=${encodeURIComponent(url)}`, "_blank");
    } else if (plataforma === "copiar") {
      navigator.clipboard.writeText(url);
      alert("Link copiado!");
    } else if (plataforma === "imprimir") {
      window.print();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Botão voltar */}
      <button
        onClick={onVoltar}
        className="flex items-center gap-2 text-[#1a56a0] hover:text-[#0d2044] font-semibold text-sm mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Voltar para todas as notícias
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Artigo principal */}
        <article className="lg:col-span-2">
          {/* Categoria */}
          <span className={`inline-block px-3 py-1 text-xs font-bold rounded mb-4 ${corCategoria}`}>
            {noticia.categoria.toUpperCase()}
          </span>

          {/* Título */}
          <h1 className="text-[#0d2044] font-black text-2xl md:text-4xl leading-tight font-serif mb-4">
            {noticia.titulo}
          </h1>

          {/* Subtítulo */}
          <p className="text-[#1a3a6e] text-lg font-light border-l-4 border-[#1a56a0] pl-4 mb-6 italic">
            {noticia.subtitulo}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 py-4 border-t border-b border-gray-200 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-8 h-8 bg-[#1a56a0] rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Por</p>
                <p className="font-semibold text-sm text-[#0d2044]">{noticia.autor}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Publicado</p>
                <p className="text-sm text-gray-600">{formatarData(noticia.data, noticia.hora)}</p>
              </div>
            </div>

            {/* Compartilhar */}
            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs text-gray-400 uppercase tracking-wide mr-1">Compartilhar:</span>
              <button
                onClick={() => handleShare("facebook")}
                className="w-8 h-8 bg-[#1877f2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity font-bold text-xs"
                title="Compartilhar no Facebook"
              >
                f
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="w-8 h-8 bg-[#1da1f2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity font-bold text-xs"
                title="Compartilhar no Twitter/X"
              >
                X
              </button>
              <button
                onClick={() => handleShare("copiar")}
                className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                title="Copiar link"
              >
                <Link className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare("imprimir")}
                className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                title="Imprimir"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Imagem */}
          {noticia.imagemUrl && (
            <figure className="mb-8 rounded-lg overflow-hidden">
              <img
                src={noticia.imagemUrl}
                alt={noticia.titulo}
                className="w-full h-64 md:h-96 object-cover"
              />
              <figcaption className="text-gray-400 text-xs text-center mt-2 italic">
                Foto ilustrativa — {noticia.autor} / 3C News
              </figcaption>
            </figure>
          )}

          {/* Conteúdo */}
          <div className="prose prose-lg max-w-none">
            {noticia.conteudo.map((paragrafo, i) => (
              <p
                key={i}
                className={`text-gray-700 leading-relaxed mb-6 text-base ${
                  i === 0 ? "text-xl font-medium text-[#1a3a6e] first-letter:text-5xl first-letter:font-black first-letter:text-[#1a56a0] first-letter:float-left first-letter:mr-3 first-letter:leading-none" : ""
                }`}
              >
                {paragrafo}
              </p>
            ))}
          </div>

          {/* Linha de assinatura */}
          <div className="mt-8 pt-6 border-t-2 border-[#1a56a0] bg-[#f0f4fa] rounded-lg p-4">
            <p className="text-[#0d2044] font-bold text-sm">
              📰 Reportagem: <span className="font-normal">{noticia.autor}</span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Turma do 3ºC de Informática — IFMT Campus CEL. Octayde Jorge da Silva, Cuiabá - MT
            </p>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Notícias relacionadas */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-[#0d2044] px-4 py-3">
              <h3 className="text-white font-bold text-sm uppercase tracking-wide">
                Veja Também
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {noticiasRelacionadas.slice(0, 4).map((n) => (
                <button
                  key={n.id}
                  onClick={() => onNoticiaClick(n)}
                  className="w-full text-left p-3 hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex gap-3">
                    {n.imagemUrl && (
                      <img
                        src={n.imagemUrl}
                        alt={n.titulo}
                        className="w-16 h-12 object-cover rounded flex-shrink-0"
                      />
                    )}
                    <div>
                      <p className="text-[#0d2044] font-semibold text-xs leading-tight group-hover:text-[#1a56a0] transition-colors line-clamp-3">
                        {n.titulo}
                      </p>
                      <p className="text-gray-400 text-[10px] mt-1 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {n.data.split("-").reverse().join("/")}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Box turma */}
          <div className="bg-[#0d2044] rounded-lg p-4 text-white">
            <h3 className="font-bold text-sm mb-2 text-[#4a9eda]">Sobre o 3C News</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              O 3C News é o portal de notícias oficial da Turma do 3ºC do curso técnico de Informática do IFMT Campus CEL. Octayde Jorge da Silva. Produzido pelos próprios alunos para cobrir o Debate Escolar 2025 e demais eventos relevantes.
            </p>
            <div className="mt-3 pt-3 border-t border-[#1a3a6e]">
              <p className="text-[#7ab3d8] text-[10px]">
                📍 Av. Senador Filinto Müller, 953 — Cuiabá, MT
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NoticiaDetalhe;
