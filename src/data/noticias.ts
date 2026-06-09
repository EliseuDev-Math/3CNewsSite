// ============================================================
// 📰 ARQUIVO DE NOTÍCIAS - 3C NEWS
// Para publicar uma nova notícia, adicione um objeto ao array
// correspondente seguindo o modelo abaixo.
// ============================================================

export type Categoria =
  | "Debate"
  | "Tecnologia"
  | "Educação"
  | "Entrevista"
  | "Esportes"
  | "Política"
  | "Cultura"
  | "Geral";

export interface Noticia {
  id: number;
  titulo: string;
  subtitulo: string;
  conteudo: string[]; // Cada string é um parágrafo
  autor: string;
  data: string; // Formato: "YYYY-MM-DD"
  hora: string; // Formato: "HH:MM"
  categoria: Categoria;
  imagemUrl?: string;
  destaque: boolean; // true = aparece na manchete principal
  topico?: boolean;  // true = aparece na seção de tópicos relevantes
}

export interface VideoEntrevista {
  id: number;
  titulo: string;
  descricao: string;
  youtubeId: string; // ID do vídeo do YouTube (parte após ?v=)
  data: string;
  entrevistado: string;
  entrevistador: string;
}

// ============================================================
// 🎥 VÍDEOS DE ENTREVISTAS
// Para adicionar um vídeo do YouTube, copie o ID do vídeo
// Ex.: https://www.youtube.com/watch?v=XXXXXXXXXXX → "XXXXXXXXXXX"
// ============================================================
export const videosEntrevistas: VideoEntrevista[] = [
  {
    id: 1,
    titulo: "Entrevista: O Futuro da Tecnologia na Educação",
    descricao:
      "Debate sobre como a tecnologia está transformando o ambiente escolar e as perspectivas para os alunos de informática.",
    youtubeId: "dQw4w9WgXcQ", // ← Substitua pelo ID real do seu vídeo
    data: "2025-06-10",
    entrevistado: "Prof. Carlos Mendes",
    entrevistador: "Turma 3ºC",
  },
  {
    id: 2,
    titulo: "Debate: Inteligência Artificial nas Escolas",
    descricao:
      "Alunos e professores debatem o impacto da IA no cotidiano escolar e no mercado de trabalho.",
    youtubeId: "dQw4w9WgXcQ", // ← Substitua pelo ID real do seu vídeo
    data: "2025-06-08",
    entrevistado: "Alunos do 3ºC",
    entrevistador: "Comissão de Imprensa",
  },
  {
    id: 3,
    titulo: "Painel: Mercado de Trabalho em TI",
    descricao:
      "Profissionais da área de TI falam sobre oportunidades e desafios para jovens que estão entrando no mercado.",
    youtubeId: "dQw4w9WgXcQ", // ← Substitua pelo ID real do seu vídeo
    data: "2025-06-05",
    entrevistado: "Especialistas em TI",
    entrevistador: "Turma 3ºC",
  },
];

// ============================================================
// 📋 TÓPICOS RELEVANTES (Aparecem na barra lateral)
// ============================================================
export const topicos: string[] = [
  "Debate Escolar 2025",
  "Inteligência Artificial",
  "Mercado de TI",
  "IFMT Cuiabá",
  "Programação",
  "Redes de Computadores",
  "Segurança Digital",
  "Inovação",
  "Carreira em Tech",
  "3ºC Informa",
];

// ============================================================
// 📰 NOTÍCIAS PRINCIPAIS
// Para adicionar uma nova notícia, copie o modelo abaixo e
// cole no início do array. Incremente o ID.
//
// MODELO:
// {
//   id: 99,
//   titulo: "Título da Notícia",
//   subtitulo: "Subtítulo complementar",
//   conteudo: [
//     "Primeiro parágrafo da notícia.",
//     "Segundo parágrafo com mais detalhes.",
//     "Terceiro parágrafo com conclusão.",
//   ],
//   autor: "Nome do Repórter",
//   data: "2025-06-10",
//   hora: "14:30",
//   categoria: "Debate",
//   imagemUrl: "https://url-da-imagem.com/foto.jpg",
//   destaque: false,
//   topico: false,
// },
// ============================================================
export const noticias: Noticia[] = [
  // ── NOTÍCIA EM DESTAQUE (manchete principal) ──────────────
  {
    id: 1,
    titulo: "Grande Debate Escolar 2025: 3ºC de Informática Enfrenta os Maiores Temas da Atualidade",
    subtitulo:
      "Alunos do IFMT apresentam argumentos sólidos sobre tecnologia, educação e futuro profissional em debate histórico",
    conteudo: [
      "O aguardado Debate Escolar 2025 do IFMT Campus CEL. Octayde Jorge da Silva está marcado para reunir os melhores debatedores das turmas de informática. O 3ºC se prepara intensamente para o evento, com pesquisas aprofundadas e treinamentos diários.",
      "A turma está dividida em grupos temáticos: tecnologia e sociedade, mercado de trabalho, inteligência artificial e ética digital. Cada grupo ficou responsável por levantar dados, preparar argumentos e contra-argumentos para o debate.",
      "O professor orientador destacou a importância do evento: 'Esse debate é uma oportunidade única para os alunos exercitarem o pensamento crítico, a argumentação e a capacidade de pesquisa — habilidades fundamentais para qualquer profissional de TI.'",
      "A comissão de imprensa do 3ºC, responsável por este portal de notícias, cobrirá todos os momentos do debate ao vivo, com entrevistas exclusivas com os participantes antes e após o evento.",
    ],
    autor: "Comissão de Imprensa - 3ºC",
    data: "2025-06-12",
    hora: "08:00",
    categoria: "Debate",
    imagemUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    destaque: true,
    topico: true,
  },

  // ── NOTÍCIAS SECUNDÁRIAS ──────────────────────────────────
  {
    id: 2,
    titulo: "Inteligência Artificial: Como os Alunos do 3ºC Estão se Preparando para o Futuro",
    subtitulo: "Turma desenvolve projetos inovadores usando IA e machine learning",
    conteudo: [
      "Os alunos do 3º C do curso de Informática do IFMT estão na vanguarda do aprendizado de Inteligência Artificial. Durante o semestre, a turma desenvolveu projetos práticos usando Python, TensorFlow e ferramentas de IA generativa.",
      "Entre os projetos desenvolvidos, destaca-se um chatbot de auxílio estudantil criado por um grupo de cinco alunos, que já está sendo testado como ferramenta de apoio à aprendizagem dentro da própria instituição.",
      "A iniciativa demonstra como o ensino técnico de qualidade prepara os jovens não apenas para o mercado de trabalho, mas também para inovar e criar soluções reais para problemas do cotidiano.",
    ],
    autor: "Ana Lima",
    data: "2025-06-11",
    hora: "10:30",
    categoria: "Tecnologia",
    imagemUrl:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    destaque: false,
    topico: true,
  },
  {
    id: 3,
    titulo: "IFMT Investe em Laboratórios de Última Geração para Cursos Técnicos",
    subtitulo: "Novos equipamentos beneficiam alunos de Informática e Eletrônica",
    conteudo: [
      "O IFMT Campus CEL. Octayde Jorge da Silva anunciou a renovação completa dos laboratórios de informática, com a aquisição de novos computadores, servidores e equipamentos de rede. A iniciativa faz parte do programa de modernização da infraestrutura escolar.",
      "Os novos laboratórios contam com máquinas de alto desempenho, redes de fibra ótica e softwares profissionais licenciados. Os alunos do curso técnico de Informática serão os primeiros a utilizar a nova estrutura.",
      "A direção da instituição reforça o compromisso com a qualidade do ensino técnico: 'Queremos que nossos alunos tenham acesso às mesmas ferramentas que encontrarão no mercado de trabalho.'",
    ],
    autor: "Pedro Souza",
    data: "2025-06-10",
    hora: "14:00",
    categoria: "Educação",
    imagemUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    destaque: false,
    topico: false,
  },
  {
    id: 4,
    titulo: "Mercado de TI em Mato Grosso: Oportunidades para Recém-Formados",
    subtitulo: "Relatório aponta crescimento de 35% nas vagas para técnicos de informática no estado",
    conteudo: [
      "Um levantamento recente aponta que o mercado de tecnologia da informação em Mato Grosso cresceu significativamente nos últimos dois anos, com um aumento de 35% nas vagas disponíveis para profissionais de TI, especialmente para técnicos recém-formados.",
      "As áreas com maior demanda incluem desenvolvimento de software, redes de computadores, suporte técnico e segurança da informação — exatamente as áreas abordadas no curso técnico do IFMT.",
      "Empresas de Cuiabá e do interior do estado têm buscado ativamente parcerias com o IFMT para contratação de estagiários e recém-formados, demonstrando a valorização do ensino técnico de qualidade.",
    ],
    autor: "Mariana Costa",
    data: "2025-06-09",
    hora: "09:15",
    categoria: "Tecnologia",
    imagemUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    destaque: false,
    topico: true,
  },
  {
    id: 5,
    titulo: "Ética na Era Digital: Debate Aquece os Corredores do IFMT",
    subtitulo: "Alunos discutem privacidade, fake news e responsabilidade no ambiente online",
    conteudo: [
      "Nas semanas que antecedem o grande debate escolar, os corredores e salas do IFMT vivem uma atmosfera de reflexão e discussão. Temas como privacidade de dados, fake news e ética no uso da tecnologia estão em pauta.",
      "A turma do 3ºC organizou rodas de conversa abertas à comunidade escolar, onde qualquer aluno pode participar e expor seu ponto de vista sobre questões digitais contemporâneas.",
      "A iniciativa tem sido amplamente elogiada pela coordenação pedagógica, que vê no engajamento dos alunos um sinal de maturidade intelectual e comprometimento com o aprendizado.",
    ],
    autor: "Lucas Ferreira",
    data: "2025-06-08",
    hora: "16:45",
    categoria: "Debate",
    imagemUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    destaque: false,
    topico: false,
  },
  {
    id: 6,
    titulo: "Alunos do 3ºC Lançam Portal de Notícias para Cobrir Debate Escolar",
    subtitulo: "Comissão de Imprensa da turma cria veículo jornalístico para registrar evento histórico",
    conteudo: [
      "A comissão de imprensa do 3ºC de Informática do IFMT lançou oficialmente o portal 3C News, um veículo jornalístico criado pelos próprios alunos para cobrir o debate escolar e outros acontecimentos relevantes da turma e da instituição.",
      "O portal foi desenvolvido com tecnologias modernas de desenvolvimento web, incluindo React, TypeScript e Tailwind CSS, demonstrando na prática as habilidades técnicas adquiridas ao longo do curso.",
      "Além das notícias em texto, o 3C News contará com entrevistas em vídeo, seção de tópicos relevantes e cobertura em tempo real dos eventos escolares. A iniciativa é inédita na história do campus.",
    ],
    autor: "Redação 3C News",
    data: "2025-06-07",
    hora: "11:00",
    categoria: "Geral",
    imagemUrl:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    destaque: false,
    topico: false,
  },
  {
    id: 7,
    titulo: "Programação Competitiva: Alunos do IFMT se Destacam em Maratona de Código",
    subtitulo: "Equipe do campus conquista posição de destaque em competição regional",
    conteudo: [
      "A equipe de programação competitiva do IFMT Campus CEL. Octayde Jorge da Silva se destacou na última edição da Maratona Regional de Programação, conquistando uma posição de destaque entre dezenas de equipes participantes.",
      "Os alunos do 3ºC foram parte fundamental da equipe, demonstrando habilidades em algoritmos, estruturas de dados e resolução de problemas complexos sob pressão de tempo.",
      "O resultado reforça a qualidade do ensino técnico oferecido pelo instituto e motiva os alunos a continuarem investindo no aprendizado de programação além da sala de aula.",
    ],
    autor: "Gabriel Alves",
    data: "2025-06-06",
    hora: "13:20",
    categoria: "Educação",
    imagemUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    destaque: false,
    topico: false,
  },
  {
    id: 8,
    titulo: "Segurança Cibernética: Por Que Todo Profissional de TI Precisa Saber Se Proteger",
    subtitulo: "Especialistas alertam para o crescimento de ataques digitais e a importância da formação em cibersegurança",
    conteudo: [
      "Com o aumento exponencial de ataques cibernéticos em todo o mundo, a cibersegurança se tornou uma das habilidades mais valorizadas no mercado de TI. Profissionais com conhecimento em segurança digital estão entre os mais bem remunerados da área.",
      "O currículo do curso técnico de Informática do IFMT já contempla disciplinas de segurança de redes e proteção de dados, preparando os alunos para os desafios do mercado moderno.",
      "A turma do 3ºC abordará o tema da cibersegurança como um dos pilares do debate escolar, discutindo questões como proteção de dados pessoais, legislação digital (LGPD) e responsabilidade corporativa.",
    ],
    autor: "Isabela Ramos",
    data: "2025-06-05",
    hora: "08:30",
    categoria: "Tecnologia",
    imagemUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    destaque: false,
    topico: true,
  },
];
