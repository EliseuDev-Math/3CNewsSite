import React, { useState } from "react";
import { Play, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { VideoEntrevista } from "../data/noticias";

interface SecaoVideosProps {
  videos: VideoEntrevista[];
}

const SecaoVideos: React.FC<SecaoVideosProps> = ({ videos }) => {
  const [videoSelecionado, setVideoSelecionado] = useState<VideoEntrevista>(videos[0]);
  const [pagina, setPagina] = useState(0);

  const formatarData = (data: string) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  const videoPorPagina = 3;
  const totalPaginas = Math.ceil(videos.length / videoPorPagina);
  const videosVisiveis = videos.slice(
    pagina * videoPorPagina,
    pagina * videoPorPagina + videoPorPagina
  );

  return (
    <section className="bg-[#060d1a] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header da seção */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-7 bg-[#e63946] rounded-full" />
          <h2 className="text-white font-black text-xl font-serif">
            Entrevistas em Vídeo
          </h2>
          <div className="flex-1 h-px bg-[#1a3a6e]" />
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#e63946] rounded-full animate-pulse" />
            <span className="text-[#e63946] text-xs font-bold uppercase tracking-wide">
              3C News TV
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Player principal */}
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden bg-black shadow-2xl">
              <div className="aspect-video w-full">
                <iframe
                  key={videoSelecionado.id}
                  src={`https://www.youtube.com/embed/${videoSelecionado.youtubeId}?rel=0&modestbranding=1`}
                  title={videoSelecionado.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="bg-[#0d2044] rounded-b-xl p-4">
              <h3 className="text-white font-bold text-lg font-serif leading-tight">
                {videoSelecionado.titulo}
              </h3>
              <p className="text-[#7ab3d8] text-sm mt-2 leading-relaxed">
                {videoSelecionado.descricao}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3 text-[#4a9eda]" />
                  <span className="text-[#a8c7e8]">Entrevistado:</span>{" "}
                  {videoSelecionado.entrevistado}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3 text-[#4a9eda]" />
                  <span className="text-[#a8c7e8]">Entrevistador:</span>{" "}
                  {videoSelecionado.entrevistador}
                </span>
                <span className="flex items-center gap-1 ml-auto">
                  <Calendar className="w-3 h-3 text-[#4a9eda]" />
                  {formatarData(videoSelecionado.data)}
                </span>
              </div>
            </div>
          </div>

          {/* Lista de vídeos */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h4 className="text-[#7ab3d8] text-xs font-bold uppercase tracking-wide">
                Mais entrevistas
              </h4>
              {totalPaginas > 1 && (
                <div className="flex gap-1">
                  <button
                    onClick={() => setPagina((p) => Math.max(0, p - 1))}
                    disabled={pagina === 0}
                    className="w-6 h-6 rounded bg-[#1a3a6e] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#1a56a0] transition-colors"
                  >
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => setPagina((p) => Math.min(totalPaginas - 1, p + 1))}
                    disabled={pagina === totalPaginas - 1}
                    className="w-6 h-6 rounded bg-[#1a3a6e] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#1a56a0] transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>

            {videosVisiveis.map((video) => (
              <button
                key={video.id}
                onClick={() => setVideoSelecionado(video)}
                className={`text-left rounded-lg overflow-hidden border-2 transition-all duration-200 group ${
                  videoSelecionado.id === video.id
                    ? "border-[#4a9eda] shadow-lg shadow-[#1a56a0]/30"
                    : "border-[#1a3a6e] hover:border-[#1a56a0]"
                }`}
              >
                <div className="relative bg-black">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.titulo}
                    className="w-full h-28 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                      videoSelecionado.id === video.id ? "bg-[#e63946]" : "bg-black/60 group-hover:bg-[#1a56a0]"
                    }`}>
                      <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  {videoSelecionado.id === video.id && (
                    <div className="absolute top-2 left-2 bg-[#e63946] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
                      Reproduzindo
                    </div>
                  )}
                </div>
                <div className="bg-[#0d2044] p-3">
                  <p className="text-white font-semibold text-xs leading-tight line-clamp-2">
                    {video.titulo}
                  </p>
                  <p className="text-[#4a9eda] text-[10px] mt-1 flex items-center gap-1">
                    <Calendar className="w-2.5 h-2.5" />
                    {formatarData(video.data)}
                  </p>
                </div>
              </button>
            ))}

            {/* Instrução para adicionar vídeos */}
            <div className="mt-auto bg-[#1a3a6e]/30 border border-dashed border-[#1a56a0]/50 rounded-lg p-3">
              <p className="text-[#4a7db0] text-[10px] leading-relaxed">
                💡 <strong className="text-[#7ab3d8]">Para adicionar vídeos:</strong> edite{" "}
                <code className="bg-[#0d2044] px-1 rounded text-[#4a9eda]">
                  src/data/noticias.ts
                </code>{" "}
                e insira o ID do YouTube em{" "}
                <code className="bg-[#0d2044] px-1 rounded text-[#4a9eda]">
                  videosEntrevistas
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecaoVideos;
