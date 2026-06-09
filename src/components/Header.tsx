import { useState, useEffect } from "react";
import { Search, Menu, X, Newspaper } from "lucide-react";
import { Categoria } from "../data/noticias";

const categorias: Categoria[] = [
  "Debate",
  "Tecnologia",
  "Educação",
  "Entrevista",
  "Esportes",
  "Política",
  "Cultura",
  "Geral",
];

interface HeaderProps {
  onCategoriaSelect: (cat: Categoria | null) => void;
  categoriaAtiva: Categoria | null;
  onSearch: (q: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  onCategoriaSelect,
  categoriaAtiva,
  onSearch,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataHora, setDataHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDataHora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatarData = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatarHora = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchOpen(false);
  };

  return (
    <header className="w-full">
      {/* Barra superior */}
      <div className="bg-[#0a1628] text-gray-300 py-1.5 px-4 text-xs border-b border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="capitalize">{formatarData(dataHora)}</span>
          <span className="font-mono tracking-wider text-[#4a9eda]">
            {formatarHora(dataHora)}
          </span>
        </div>
      </div>

      {/* Logo e busca */}
      <div className="bg-[#0d2044] py-4 px-4 border-b-4 border-[#1a56a0]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => {
              onCategoriaSelect(null);
              onSearch("");
              setSearchQuery("");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-16 h-16 bg-[#1a56a0] rounded-lg flex items-center justify-center shadow-lg group-hover:bg-[#2166c0] transition-colors border border-[#2e6fbb]">
                <span className="text-white font-black text-2xl tracking-tight leading-none">
                  3C
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#e63946] rounded-full flex items-center justify-center">
                <Newspaper className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div className="text-left">
              <div className="text-white font-black text-3xl tracking-tight leading-none font-serif">
                3C <span className="text-[#4a9eda]">News</span>
              </div>
              <div className="text-[#7ab3d8] text-[10px] tracking-widest uppercase font-medium">
                Jornal do 3º C de Informática
              </div>
            </div>
          </button>

          {/* Slogan central */}
          <div className="hidden lg:block text-center flex-1 mx-8">
            <p className="text-[#7ab3d8] text-sm italic font-serif">
              "Informar é um ato de responsabilidade"
            </p>
            <p className="text-[#4a7db0] text-xs mt-0.5">
              IFMT Campus CEL. Octayde Jorge da Silva — Cuiabá, MT
            </p>
          </div>

          {/* Ações */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center gap-1.5 bg-[#1a56a0] hover:bg-[#2166c0] text-white px-3 py-2 rounded text-sm transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Buscar</span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-1.5 bg-[#1a3a6e] hover:bg-[#1a56a0] text-white px-3 py-2 rounded text-sm transition-colors md:hidden"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Barra de busca expansível */}
        {searchOpen && (
          <div className="max-w-7xl mx-auto mt-3">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar notícias, categorias, autores..."
                className="flex-1 bg-[#0a1628] text-white border border-[#1a56a0] rounded px-4 py-2 text-sm focus:outline-none focus:border-[#4a9eda] placeholder-[#4a7db0]"
              />
              <button
                type="submit"
                className="bg-[#1a56a0] hover:bg-[#2166c0] text-white px-5 py-2 rounded text-sm transition-colors flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Buscar
              </button>
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                  onSearch("");
                }}
                className="bg-[#1a3a6e] hover:bg-[#1a56a0] text-white px-3 py-2 rounded text-sm transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Navegação de categorias */}
      <nav className="bg-[#1a3a6e] border-b border-[#1a56a0]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop */}
          <ul className="hidden md:flex items-center overflow-x-auto">
            <li>
              <button
                onClick={() => onCategoriaSelect(null)}
                className={`px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                  categoriaAtiva === null
                    ? "border-[#4a9eda] text-white bg-[#0d2044]"
                    : "border-transparent text-[#a8c7e8] hover:text-white hover:bg-[#0d2044]"
                }`}
              >
                Início
              </button>
            </li>
            {categorias.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => onCategoriaSelect(cat)}
                  className={`px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                    categoriaAtiva === cat
                      ? "border-[#4a9eda] text-white bg-[#0d2044]"
                      : "border-transparent text-[#a8c7e8] hover:text-white hover:bg-[#0d2044]"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile */}
          {menuOpen && (
            <ul className="md:hidden py-2 space-y-1">
              <li>
                <button
                  onClick={() => { onCategoriaSelect(null); setMenuOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-sm font-semibold rounded transition-colors ${
                    categoriaAtiva === null
                      ? "bg-[#0d2044] text-white"
                      : "text-[#a8c7e8] hover:bg-[#0d2044] hover:text-white"
                  }`}
                >
                  Início
                </button>
              </li>
              {categorias.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => { onCategoriaSelect(cat); setMenuOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-sm font-semibold rounded transition-colors ${
                      categoriaAtiva === cat
                        ? "bg-[#0d2044] text-white"
                        : "text-[#a8c7e8] hover:bg-[#0d2044] hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Breaking news ticker */}
      <div className="bg-[#e63946] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center">
          <div className="bg-[#c1121f] text-white text-xs font-bold px-3 py-1.5 whitespace-nowrap flex-shrink-0 flex items-center gap-1.5">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse inline-block"></span>
            URGENTE
          </div>
          <div className="overflow-hidden ml-2">
            <p className="text-white text-xs py-1.5 whitespace-nowrap animate-marquee font-medium">
              🎙️ Debate Escolar 2025 — 3ºC de Informática do IFMT se prepara para o grande evento &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              📡 Novo portal de notícias da turma está no ar &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              🏆 Alunos do IFMT conquistam destaque em maratona de programação &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              💻 Mercado de TI cresce 35% em Mato Grosso &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              🤖 Inteligência Artificial: tema central do debate escolar 2025
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
