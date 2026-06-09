import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import CategoriaPage from "./components/CategoriaPage";
import NoticiaDetalhe from "./components/NoticiaDetalhe";
import SecaoVideos from "./components/SecaoVideos";
import BuscaPage from "./components/BuscaPage";
import { noticias, topicos, videosEntrevistas, Noticia, Categoria } from "./data/noticias";

type View =
  | { tipo: "home" }
  | { tipo: "categoria"; categoria: Categoria }
  | { tipo: "noticia"; noticia: Noticia }
  | { tipo: "busca"; query: string };

function App() {
  const [view, setView] = useState<View>({ tipo: "home" });

  // Scroll para o topo ao trocar de view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  const handleCategoriaSelect = (cat: Categoria | null) => {
    if (cat === null) {
      setView({ tipo: "home" });
    } else {
      setView({ tipo: "categoria", categoria: cat });
    }
  };

  const handleNoticiaClick = (noticia: Noticia) => {
    setView({ tipo: "noticia", noticia });
  };

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setView({ tipo: "home" });
      return;
    }
    setView({ tipo: "busca", query: query.trim() });
  };

  const categoriaAtiva =
    view.tipo === "categoria" ? view.categoria : null;

  // Filtragem para busca
  const buscarNoticias = (query: string): Noticia[] => {
    const q = query.toLowerCase();
    return noticias.filter(
      (n) =>
        n.titulo.toLowerCase().includes(q) ||
        n.subtitulo.toLowerCase().includes(q) ||
        n.conteudo.some((p) => p.toLowerCase().includes(q)) ||
        n.autor.toLowerCase().includes(q) ||
        n.categoria.toLowerCase().includes(q)
    );
  };

  // Notícias relacionadas para o detalhe
  const getNoticiasRelacionadas = (noticia: Noticia): Noticia[] => {
    return noticias
      .filter(
        (n) =>
          n.id !== noticia.id &&
          (n.categoria === noticia.categoria ||
            n.titulo.split(" ").some((w) =>
              w.length > 4 && noticia.titulo.toLowerCase().includes(w.toLowerCase())
            ))
      )
      .slice(0, 4);
  };

  const renderContent = () => {
    switch (view.tipo) {
      case "home":
        return (
          <>
            <HomePage
              noticias={noticias}
              topicos={topicos}
              onNoticiaClick={handleNoticiaClick}
              onCategoriaSelect={handleCategoriaSelect}
            />
            <SecaoVideos videos={videosEntrevistas} />
          </>
        );

      case "categoria":
        return (
          <>
            <CategoriaPage
              categoria={view.categoria}
              noticias={noticias.filter((n) => n.categoria === view.categoria)}
              topicos={topicos}
              onNoticiaClick={handleNoticiaClick}
              todasNoticias={noticias}
            />
            <SecaoVideos videos={videosEntrevistas} />
          </>
        );

      case "noticia":
        return (
          <NoticiaDetalhe
            noticia={view.noticia}
            onVoltar={() => setView({ tipo: "home" })}
            noticiasRelacionadas={getNoticiasRelacionadas(view.noticia)}
            onNoticiaClick={handleNoticiaClick}
          />
        );

      case "busca":
        return (
          <BuscaPage
            query={view.query}
            noticias={buscarNoticias(view.query)}
            onNoticiaClick={handleNoticiaClick}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans flex flex-col">
      <Header
        onCategoriaSelect={handleCategoriaSelect}
        categoriaAtiva={categoriaAtiva}
        onSearch={handleSearch}
      />

      <div className="flex-1">
        {renderContent()}
      </div>

      <Footer onCategoriaSelect={handleCategoriaSelect} />
    </div>
  );
}

export default App;
