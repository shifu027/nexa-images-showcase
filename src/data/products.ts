import { Product } from "./types";

export const products: Product[] = [
  // === CAPIVARA COZY CLUB ===
  {
    id: "p001", slug: "sticker-capivara-lendo", name: "Sticker Capivara Lendo",
    shortDescription: "Capivara adorável mergulhada em um bom livro. Perfeita para laptops, cadernos e garrafas.",
    longDescription: "Uma das ilustrações mais queridas da Nexa Images: uma capivara aconchegante lendo seu livro favorito, envolta em uma atmosfera de paz e conforto. Impressa em vinil de alta qualidade, essa figurinha é resistente e perfeita para decorar seus objetos do dia a dia com fofura e personalidade. Ideal para quem ama livros, animais e momentos tranquilos.",
    category: "stickers", subcategory: "stickers-laptop", collection: "capivara-cozy-club",
    tags: ["capivara", "leitura", "cozy", "bookish", "laptop", "garrafa"],
    badge: "Mais Amado", featured: true, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p002", "p003", "p004"],
    active: true, optionalPriceNote: "A partir de US$ 4,15",
    usage: ["Laptop", "Garrafa d'água", "Caderno", "Planner", "Celular"],
    seoTitle: "Sticker Capivara Lendo | Nexa Images", seoDescription: "Sticker fofo de capivara lendo um livro. Vinil resistente para laptop, garrafa e caderno. Ilustração exclusiva Nexa Images."
  },
  {
    id: "p002", slug: "sticker-capivara-cafe", name: "Sticker Capivara com Café",
    shortDescription: "Capivara tomando café quentinho numa manhã tranquila. Adesivo irresistível.",
    longDescription: "Nada como começar o dia com calma — e essa capivara sabe disso. Com sua xícara de café fumegante, ela representa o momento perfeito de paz matinal. Ilustração original da coleção Capivara Cozy Club, impressa em vinil premium.",
    category: "stickers", subcategory: "stickers-garrafa", collection: "capivara-cozy-club",
    tags: ["capivara", "café", "cozy", "manhã", "garrafa"],
    badge: "Popular", featured: true, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p001", "p003", "p012"],
    active: true, optionalPriceNote: "A partir de US$ 4,15",
    usage: ["Garrafa d'água", "Laptop", "Caneca", "Caderno"],
    seoTitle: "Sticker Capivara com Café | Nexa Images", seoDescription: "Adesivo de capivara tomando café. Ilustração exclusiva, vinil resistente. Perfeito para coffee lovers."
  },
  {
    id: "p003", slug: "sticker-capivara-jardim", name: "Sticker Capivara no Jardim",
    shortDescription: "Capivara relaxando entre flores e plantas. Estética botanical perfeita.",
    longDescription: "Uma capivara em seu habitat favorito: cercada de flores, folhagens e muita paz. Essa ilustração une a fofura das capivaras com a delicadeza da estética botânica. Vinil de alta qualidade, resistente à água.",
    category: "stickers", subcategory: "stickers-botanical", collection: "capivara-cozy-club",
    tags: ["capivara", "jardim", "botanical", "flores", "natureza"],
    featured: false, newArrival: true, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p001", "p002", "p019"],
    active: true, usage: ["Laptop", "Garrafa d'água", "Planner", "Caderno"],
    seoTitle: "Sticker Capivara no Jardim | Nexa Images", seoDescription: "Adesivo de capivara no jardim com flores. Estética botanical e cozy. Vinil resistente à água."
  },
  {
    id: "p004", slug: "caneca-capivara-cozy", name: "Caneca Capivara Cozy",
    shortDescription: "Caneca de cerâmica com ilustração exclusiva de capivara. Presente perfeito.",
    longDescription: "A caneca que todo amante de capivaras precisa ter. Ilustração original da coleção Capivara Cozy Club impressa em cerâmica de alta qualidade. Perfeita para café, chá ou chocolate quente. Um presente especial para quem aprecia momentos aconchegantes.",
    category: "presentes", collection: "capivara-cozy-club",
    tags: ["caneca", "capivara", "presente", "cozy", "cerâmica"],
    badge: "Presente Ideal", featured: true, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p001", "p005", "p002"],
    active: true, optionalPriceNote: "A partir de US$ 16,85",
    usage: ["Presente", "Uso pessoal", "Decoração", "Escritório"],
    seoTitle: "Caneca Capivara Cozy | Nexa Images", seoDescription: "Caneca de cerâmica com capivara fofa. Personalizável com nome. Presente perfeito para coffee lovers."
  },
  {
    id: "p005", slug: "ima-capivara-leitora", name: "Ímã Capivara Leitora",
    shortDescription: "Ímã de geladeira com capivara lendo. Pequeno, fofo e cheio de charme.",
    longDescription: "Um ímã delicado para decorar sua geladeira ou quadro magnético com a capivara mais fofa do mundo. Ilustração exclusiva, impressão de alta qualidade e acabamento encantador.",
    category: "presentes", collection: "capivara-cozy-club",
    tags: ["ímã", "capivara", "leitura", "geladeira", "decoração"],
    featured: false, newArrival: true, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p004", "p001", "p006"],
    active: true, optionalPriceNote: "A partir de US$ 4,45",
    usage: ["Geladeira", "Quadro magnético", "Presente"],
    seoTitle: "Ímã Capivara Leitora | Nexa Images", seoDescription: "Ímã de geladeira com capivara lendo. Presente fofo e delicado. Ilustração exclusiva."
  },
  {
    id: "p006", slug: "sticker-capivara-chuva", name: "Sticker Capivara na Chuva",
    shortDescription: "Capivara com guarda-chuva florido curtindo um dia chuvoso.",
    longDescription: "Dias de chuva também podem ser encantadores — especialmente com essa capivara e seu guarda-chuva florido. Uma ilustração delicada que transforma qualquer superfície em algo especial.",
    category: "stickers", collection: "capivara-cozy-club",
    tags: ["capivara", "chuva", "fofo", "cozy"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p001", "p002", "p003"],
    active: true, usage: ["Laptop", "Caderno", "Garrafa d'água"],
    seoTitle: "Sticker Capivara na Chuva | Nexa Images", seoDescription: "Adesivo de capivara com guarda-chuva florido. Estética cozy e fofa para decorar seus objetos."
  },
  {
    id: "p007", slug: "etiqueta-escolar-capivara", name: "Etiqueta Escolar Capivara",
    shortDescription: "Kit de etiquetas escolares com capivaras fofas. Personalizável com nome.",
    longDescription: "Organize o material escolar com as etiquetas mais fofas! Kit com capivaras em diferentes poses e atividades, personalizável com o nome da criança. Adesivo resistente e de fácil aplicação.",
    category: "labels", subcategory: "kids-labels", collection: "capivara-cozy-club",
    tags: ["etiqueta", "escolar", "capivara", "infantil", "nome"],
    badge: "Personalizável", featured: false, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p027", "p028", "p004"],
    active: true, optionalPriceNote: "A partir de US$ 5,95",
    usage: ["Material escolar", "Cadernos", "Livros", "Lancheira"],
    seoTitle: "Etiqueta Escolar Capivara | Nexa Images", seoDescription: "Etiquetas escolares com capivaras fofas. Personalizáveis com nome. Perfeitas para material escolar."
  },
  {
    id: "p008", slug: "chaveiro-capivara-floral", name: "Chaveiro Capivara Floral",
    shortDescription: "Chaveiro acrílico com capivara e moldura floral. Delicado e resistente.",
    longDescription: "Um chaveiro que é praticamente uma mini obra de arte. Capivara fofa cercada de flores em acrílico de alta qualidade. Leve, resistente e perfeito como presente ou para uso pessoal.",
    category: "presentes", collection: "capivara-cozy-club",
    tags: ["chaveiro", "capivara", "floral", "presente", "acrílico"],
    featured: false, newArrival: true, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p004", "p005", "p001"],
    active: true, optionalPriceNote: "A partir de US$ 4,55",
    usage: ["Chaves", "Mochila", "Bolsa", "Presente"],
    seoTitle: "Chaveiro Capivara Floral | Nexa Images", seoDescription: "Chaveiro acrílico com capivara e flores. Presente delicado e resistente. Ilustração exclusiva."
  },

  // === BOOKISH MORNING ===
  {
    id: "p009", slug: "sticker-so-mais-um-capitulo", name: "Sticker \"Só Mais um Capítulo\"",
    shortDescription: "A frase que todo leitor conhece. Sticker perfeito para quem vive entre páginas.",
    longDescription: "\"Só mais um capítulo\" — a mentira mais bonita de quem ama ler. Esse sticker tipográfico com detalhes florais é perfeito para laptop, kindle case, caderno ou qualquer lugar que mereça um toque literário.",
    category: "stickers", subcategory: "stickers-bookish", collection: "bookish-morning",
    tags: ["bookish", "leitura", "frase", "tipografia", "laptop"],
    badge: "Bestseller", featured: true, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p010", "p011", "p012"],
    active: true, optionalPriceNote: "A partir de US$ 4,15",
    usage: ["Laptop", "Kindle case", "Caderno", "Planner"],
    seoTitle: "Sticker Só Mais um Capítulo | Nexa Images", seoDescription: "Adesivo bookish com a frase Só Mais um Capítulo. Perfeito para amantes de livros. Vinil premium."
  },
  {
    id: "p010", slug: "sticker-gatinho-cafe", name: "Sticker Gatinho com Café",
    shortDescription: "Gatinho fofo segurando uma xícara de café. Estética cozy e irresistível.",
    longDescription: "Um gatinho peludo com olhos brilhantes segurando sua xícara de café favorita. Ilustração delicada da coleção Bookish Morning. Vinil resistente à água e com cores vibrantes.",
    category: "stickers", subcategory: "stickers-cozy", collection: "bookish-morning",
    tags: ["gato", "café", "fofo", "cozy", "animal"],
    badge: "Popular", featured: true, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p009", "p002", "p012"],
    active: true, optionalPriceNote: "A partir de US$ 4,15",
    usage: ["Laptop", "Garrafa d'água", "Caderno", "Celular"],
    seoTitle: "Sticker Gatinho com Café | Nexa Images", seoDescription: "Adesivo de gatinho fofo com café. Ilustração cozy e delicada. Vinil resistente para laptop e garrafa."
  },
  {
    id: "p011", slug: "sticker-laptop-book-lover", name: "Sticker para Laptop Book Lover",
    shortDescription: "Pack com 3 stickers bookish para decorar seu laptop com estilo literário.",
    longDescription: "Um pack especial com 3 stickers temáticos de leitura: uma pilha de livros, uma xícara fumegante e a frase \"Book Lover\". Todos em vinil premium, resistentes e com cores encantadoras. Perfeitos para transformar seu laptop em uma declaração de amor aos livros.",
    category: "stickers", subcategory: "stickers-laptop", collection: "bookish-morning",
    tags: ["pack", "laptop", "bookish", "leitura", "book lover"],
    badge: "Pack", featured: false, newArrival: true, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p009", "p010", "p020"],
    active: true, optionalPriceNote: "A partir de US$ 6,50",
    usage: ["Laptop", "Tablet", "Kindle case"],
    seoTitle: "Pack Stickers Book Lover para Laptop | Nexa Images", seoDescription: "Pack com 3 stickers bookish para laptop. Vinil premium resistente. Perfeito para amantes de livros."
  },
  {
    id: "p012", slug: "ima-reading-corner", name: "Ímã Reading Corner",
    shortDescription: "Ímã delicado com cena de cantinho de leitura. Livros, café e aconchego.",
    longDescription: "Um ímã que captura a essência de um cantinho de leitura perfeito: uma poltrona aconchegante, livros empilhados, uma xícara fumegante e luz suave de abajur. Decoração que aquece o coração.",
    category: "presentes", collection: "reading-corner",
    tags: ["ímã", "leitura", "cantinho", "decoração", "cozy"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p009", "p005", "p010"],
    active: true, optionalPriceNote: "A partir de US$ 4,45",
    usage: ["Geladeira", "Quadro magnético", "Presente"],
    seoTitle: "Ímã Reading Corner | Nexa Images", seoDescription: "Ímã com cena de cantinho de leitura. Presente perfeito para booklovers. Ilustração exclusiva."
  },
  {
    id: "p013", slug: "pack-reading-journal", name: "Pack Reading Journal",
    shortDescription: "Kit de stickers para reading journal e book tracker. Organize suas leituras com beleza.",
    longDescription: "Um pack completo de stickers para quem mantém um reading journal ou book tracker. Inclui marcadores de progresso, ícones de gênero literário, estrelas de avaliação e separadores temáticos. Tudo com a estética delicada da Nexa Images.",
    category: "papelaria", collection: "bookish-morning",
    tags: ["reading journal", "book tracker", "stickers", "journaling", "organização"],
    badge: "Novidade", featured: false, newArrival: true, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p009", "p015", "p011"],
    active: true, optionalPriceNote: "A partir de US$ 7,20",
    usage: ["Reading journal", "Book tracker", "Caderno de leitura"],
    seoTitle: "Pack Reading Journal | Nexa Images", seoDescription: "Kit de stickers para reading journal. Organize suas leituras com estética delicada. Pack completo."
  },
  {
    id: "p014", slug: "sticker-cafe-e-livros", name: "Sticker Café & Livros",
    shortDescription: "Xícara de café sobre uma pilha de livros. A combinação perfeita em sticker.",
    longDescription: "Uma ilustração que une duas paixões: café e literatura. Uma xícara delicada repousando sobre livros coloridos, com vapor formando coraçõezinhos. Vinil premium resistente à água.",
    category: "stickers", subcategory: "stickers-cozy", collection: "cafe-e-livros",
    tags: ["café", "livros", "cozy", "bookish", "garrafa"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p010", "p009", "p002"],
    active: true, usage: ["Laptop", "Garrafa d'água", "Caderno"],
    seoTitle: "Sticker Café & Livros | Nexa Images", seoDescription: "Adesivo com xícara de café sobre livros. Estética cozy bookish. Vinil premium."
  },

  // === PLANNER GARDEN ===
  {
    id: "p015", slug: "planner-stickers-rotina-suave", name: "Planner Stickers Rotina Suave",
    shortDescription: "Kit de stickers funcionais com estética botânica para sua rotina no planner.",
    longDescription: "Organize sua semana com beleza! Este kit traz stickers funcionais — tarefas, hábitos, prioridades, lembretes e decorativos — tudo com a estética botânica da coleção Planner Garden. Compatível com os principais tamanhos de planner.",
    category: "papelaria", collection: "planner-garden",
    tags: ["planner", "stickers", "funcional", "rotina", "botanical"],
    badge: "Bestseller", featured: true, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p016", "p013", "p017"],
    active: true, optionalPriceNote: "A partir de US$ 6,50",
    usage: ["Planner", "Bullet journal", "Agenda"],
    seoTitle: "Planner Stickers Rotina Suave | Nexa Images", seoDescription: "Stickers funcionais para planner com estética botânica. Kit completo para organizar sua rotina com beleza."
  },
  {
    id: "p016", slug: "sticker-botanical-salvia", name: "Sticker Botanical Sálvia",
    shortDescription: "Ramo de sálvia em aquarela. Delicadeza botânica para qualquer superfície.",
    longDescription: "Um ramo de sálvia pintado em aquarela com tons suaves e naturais. Perfeito para quem ama plantas e estética botânica. Vinil premium com acabamento fosco.",
    category: "stickers", subcategory: "stickers-botanical", collection: "planner-garden",
    tags: ["botanical", "sálvia", "aquarela", "planta", "natureza"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p019", "p003", "p015"],
    active: true, optionalPriceNote: "A partir de US$ 4,15",
    usage: ["Laptop", "Planner", "Caderno", "Garrafa d'água"],
    seoTitle: "Sticker Botanical Sálvia | Nexa Images", seoDescription: "Adesivo botânico de sálvia em aquarela. Estética natural e delicada. Vinil premium fosco."
  },
  {
    id: "p017", slug: "sticker-plant-lover", name: "Sticker \"Plant Lover\"",
    shortDescription: "Para quem ama plantas tanto quanto livros. Tipografia delicada com folhagens.",
    longDescription: "A frase \"Plant Lover\" em tipografia elegante, cercada de folhas e pequenas flores. Um sticker para quem transforma tudo em jardim — até o laptop. Vinil resistente e cores vibrantes.",
    category: "stickers", subcategory: "stickers-botanical", collection: "planner-garden",
    tags: ["plant lover", "plantas", "botanical", "tipografia", "laptop"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p016", "p019", "p003"],
    active: true, usage: ["Laptop", "Garrafa d'água", "Vaso de planta"],
    seoTitle: "Sticker Plant Lover | Nexa Images", seoDescription: "Adesivo Plant Lover com tipografia e folhagens. Para amantes de plantas. Vinil premium."
  },
  {
    id: "p018", slug: "journaling-stickers-botanical", name: "Journaling Stickers Botanical",
    shortDescription: "Kit de stickers decorativos botânicos para journaling e scrapbook.",
    longDescription: "Transforme suas páginas em um jardim. Este kit inclui flores, folhas, molduras e cantinhos botânicos para decorar seu journal, scrapbook ou caderno de memórias com delicadeza e estilo.",
    category: "papelaria", collection: "planner-garden",
    tags: ["journaling", "botanical", "scrapbook", "decorativo", "flores"],
    featured: false, newArrival: true, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p015", "p016", "p013"],
    active: true, optionalPriceNote: "A partir de US$ 6,50",
    usage: ["Journal", "Scrapbook", "Caderno de memórias"],
    seoTitle: "Journaling Stickers Botanical | Nexa Images", seoDescription: "Kit de stickers botânicos para journaling. Flores, folhas e molduras delicadas para suas páginas."
  },
  {
    id: "p019", slug: "sticker-garrafa-botanical", name: "Sticker para Garrafa Botanical",
    shortDescription: "Sticker resistente à água com estampa botânica. Feito para sua garrafa favorita.",
    longDescription: "Um sticker pensado especialmente para garrafas d'água: resistente, impermeável e com uma ilustração botânica encantadora. Folhas de eucalipto e flores silvestres em tons suaves.",
    category: "stickers", subcategory: "stickers-garrafa", collection: "planner-garden",
    tags: ["garrafa", "botanical", "waterproof", "eucalipto", "resistente"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p016", "p017", "p003"],
    active: true, optionalPriceNote: "A partir de US$ 4,15",
    usage: ["Garrafa d'água", "Tumbler", "Squeeze"],
    seoTitle: "Sticker para Garrafa Botanical | Nexa Images", seoDescription: "Adesivo resistente à água com estampa botânica. Perfeito para garrafas e tumblers."
  },

  // === WOODLAND FRIENDS ===
  {
    id: "p020", slug: "sticker-raposinha-outono", name: "Sticker Raposinha de Outono",
    shortDescription: "Raposinha fofa entre folhas de outono. Estética woodland encantadora.",
    longDescription: "Uma raposinha com olhos brilhantes brincando entre folhas coloridas de outono. Ilustração delicada da coleção Woodland Friends. Vinil premium resistente.",
    category: "stickers", subcategory: "stickers-cozy", collection: "woodland-friends",
    tags: ["raposa", "outono", "woodland", "fofo", "animal"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p021", "p022", "p010"],
    active: true, usage: ["Laptop", "Caderno", "Garrafa d'água"],
    seoTitle: "Sticker Raposinha de Outono | Nexa Images", seoDescription: "Adesivo de raposinha fofa entre folhas de outono. Coleção Woodland Friends."
  },
  {
    id: "p021", slug: "sticker-coelhinho-flores", name: "Sticker Coelhinho entre Flores",
    shortDescription: "Coelhinho delicado cercado de flores do campo. Ternura pura.",
    longDescription: "Um coelhinho branquinho repousando entre margaridas e lavandas. Ilustração em aquarela com cores suaves. Perfeito para quem ama animais e natureza.",
    category: "stickers", collection: "woodland-friends",
    tags: ["coelho", "flores", "fofo", "aquarela", "animal"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p020", "p022", "p003"],
    active: true, usage: ["Caderno", "Laptop", "Planner"],
    seoTitle: "Sticker Coelhinho entre Flores | Nexa Images", seoDescription: "Adesivo de coelhinho fofo entre flores. Aquarela delicada da coleção Woodland Friends."
  },
  {
    id: "p022", slug: "etiqueta-infantil-floresta", name: "Etiqueta Infantil Floresta",
    shortDescription: "Kit de etiquetas infantis com animais da floresta. Personalizável com nome.",
    longDescription: "Raposas, coelhos, corujinhas e cervos decoram essas etiquetas infantis encantadoras. Perfeitas para material escolar, lancheira e objetos pessoais. Personalize com o nome da criança!",
    category: "labels", subcategory: "kids-labels", collection: "woodland-friends",
    tags: ["etiqueta", "infantil", "floresta", "animais", "personalizado"],
    badge: "Personalizável", featured: false, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p007", "p027", "p020"],
    active: true, optionalPriceNote: "A partir de US$ 5,95",
    usage: ["Material escolar", "Lancheira", "Mochila", "Livros"],
    seoTitle: "Etiqueta Infantil Floresta | Nexa Images", seoDescription: "Etiquetas infantis com animais da floresta. Personalizáveis com nome. Raposas, coelhos e mais."
  },
  {
    id: "p023", slug: "sticker-cervinho-estrelas", name: "Sticker Cervinho com Estrelas",
    shortDescription: "Pequeno cervo sob um céu estrelado. Ilustração encantadora e mágica.",
    longDescription: "Um filhote de cervo olhando para as estrelas com admiração. Ilustração delicada com tons noturnos suaves e pontos de luz. Uma peça mágica para quem ama a natureza.",
    category: "stickers", collection: "woodland-friends",
    tags: ["cervo", "estrelas", "noturno", "mágico", "animal"],
    featured: false, newArrival: true, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p020", "p021", "p006"],
    active: true, usage: ["Laptop", "Caderno", "Diário"],
    seoTitle: "Sticker Cervinho com Estrelas | Nexa Images", seoDescription: "Adesivo de cervinho sob céu estrelado. Ilustração mágica e delicada."
  },
  {
    id: "p024", slug: "sticker-corujinha-sabedoria", name: "Sticker Corujinha da Sabedoria",
    shortDescription: "Coruja adorável com óculos e livro. Sabedoria e fofura em um sticker.",
    longDescription: "Uma corujinha intelectual com óculos redondos lendo seu livro favorito. Combina a sabedoria da floresta com a paixão pelos livros. Ilustração original da coleção Woodland Friends.",
    category: "stickers", collection: "woodland-friends",
    tags: ["coruja", "sabedoria", "bookish", "fofo", "animal"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p020", "p009", "p021"],
    active: true, usage: ["Laptop", "Caderno", "Estante"],
    seoTitle: "Sticker Corujinha da Sabedoria | Nexa Images", seoDescription: "Adesivo de corujinha com óculos e livro. Fofa e intelectual. Coleção Woodland Friends."
  },

  // === GENTLE BLOOMS ===
  {
    id: "p025", slug: "envelope-seal-floral", name: "Envelope Seal Floral",
    shortDescription: "Selo adesivo floral para envelopes e embalagens. Elegância em cada detalhe.",
    longDescription: "Selos adesivos redondos com arranjo floral em aquarela. Perfeitos para fechar envelopes de convites, cartões, embalagens de presentes e packaging artesanal. Impressão de alta qualidade com cores delicadas.",
    category: "labels", subcategory: "envelope-seals", collection: "gentle-blooms",
    tags: ["envelope seal", "floral", "aquarela", "embalagem", "convite"],
    badge: "Elegante", featured: true, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p026", "p036", "p033"],
    active: true, optionalPriceNote: "A partir de US$ 5,45",
    usage: ["Envelopes", "Convites", "Embalagens", "Presentes"],
    seoTitle: "Envelope Seal Floral | Nexa Images", seoDescription: "Selo adesivo floral para envelopes e embalagens. Personalizável. Aquarela delicada."
  },
  {
    id: "p026", slug: "sticker-bouquet-lavanda", name: "Sticker Bouquet de Lavanda",
    shortDescription: "Buquê de lavanda em aquarela. Frescor e delicadeza em adesivo.",
    longDescription: "Um buquê de lavanda pintado com suavidade em tons de lilás e verde. Transmite frescor, calma e delicadeza. Vinil premium com acabamento que destaca cada pincelada.",
    category: "stickers", subcategory: "stickers-botanical", collection: "gentle-blooms",
    tags: ["lavanda", "bouquet", "aquarela", "botanical", "floral"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p025", "p016", "p019"],
    active: true, usage: ["Laptop", "Caderno", "Planner", "Garrafa d'água"],
    seoTitle: "Sticker Bouquet de Lavanda | Nexa Images", seoDescription: "Adesivo de buquê de lavanda em aquarela. Estética botânica delicada. Vinil premium."
  },
  {
    id: "p039", slug: "sticker-rosas-delicadas", name: "Sticker Rosas Delicadas",
    shortDescription: "Rosas em tons rosé com folhagens suaves. Elegância floral em sticker.",
    longDescription: "Rosas em aquarela com tons rosé e folhagens em verde suave. Uma ilustração que transmite romance e elegância. Perfeita para decorar com sofisticação.",
    category: "stickers", subcategory: "stickers-botanical", collection: "gentle-blooms",
    tags: ["rosas", "floral", "rosé", "aquarela", "elegante"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p025", "p026", "p016"],
    active: true, usage: ["Laptop", "Caderno", "Planner"],
    seoTitle: "Sticker Rosas Delicadas | Nexa Images", seoDescription: "Adesivo de rosas em aquarela rosé. Elegância floral para decorar com sofisticação."
  },
  {
    id: "p040", slug: "etiqueta-presente-floral", name: "Etiqueta Delicada para Presente",
    shortDescription: "Etiquetas florais para embalar presentes com carinho e elegância.",
    longDescription: "Um kit de etiquetas com molduras florais para presentes especiais. Com espaço para escrever mensagens personalizadas. Impressão em papel premium com acabamento delicado.",
    category: "labels", collection: "gentle-blooms",
    tags: ["etiqueta", "presente", "floral", "embalagem", "mensagem"],
    featured: false, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p025", "p026", "p033"],
    active: true, optionalPriceNote: "A partir de US$ 5,20",
    usage: ["Presentes", "Embalagens", "Datas comemorativas"],
    seoTitle: "Etiqueta Delicada para Presente | Nexa Images", seoDescription: "Etiquetas florais para presentes. Personalizáveis com mensagem. Acabamento premium."
  },

  // === BOTANICAL LETTERS ===
  {
    id: "p041", slug: "chaveiro-floral-monograma", name: "Chaveiro Floral Monograma",
    shortDescription: "Chaveiro com sua inicial em moldura botânica. Presente personalizado perfeito.",
    longDescription: "Sua inicial emoldurada por flores e folhagens em acrílico de alta qualidade. Um chaveiro que é um presente pessoal e sofisticado. Escolha a letra e surpreenda alguém especial.",
    category: "presentes", collection: "botanical-letters",
    tags: ["chaveiro", "monograma", "floral", "personalizado", "presente"],
    badge: "Personalizável", featured: true, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p008", "p004", "p042"],
    active: true, optionalPriceNote: "A partir de US$ 4,55",
    usage: ["Chaves", "Bolsa", "Mochila", "Presente"],
    seoTitle: "Chaveiro Floral Monograma | Nexa Images", seoDescription: "Chaveiro com inicial em moldura botânica. Personalizável. Presente sofisticado."
  },
  {
    id: "p042", slug: "sticker-monograma-botanical", name: "Sticker Monograma Botanical",
    shortDescription: "Sua inicial cercada de folhagens. Sticker personalizável e elegante.",
    longDescription: "Um monograma botânico com sua inicial envolta em ramos de eucalipto e pequenas flores. Personalize com a letra desejada e transforme qualquer objeto em algo único e sofisticado.",
    category: "stickers", collection: "botanical-letters",
    tags: ["monograma", "botanical", "personalizado", "inicial", "elegante"],
    featured: false, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p041", "p016", "p025"],
    active: true, usage: ["Laptop", "Caderno", "Garrafa d'água", "Celular"],
    seoTitle: "Sticker Monograma Botanical | Nexa Images", seoDescription: "Adesivo com inicial em moldura botânica. Personalizável. Vinil premium."
  },
  {
    id: "p043", slug: "caneca-letra-botanical", name: "Caneca Letra Botanical",
    shortDescription: "Caneca com sua inicial emoldurada por flores. Presente personalizado único.",
    longDescription: "Uma caneca de cerâmica com sua inicial decorada por um arranjo botânico exclusivo. Cada letra é uma mini obra de arte floral. Presente personalizado perfeito para quem você ama.",
    category: "presentes", collection: "botanical-letters",
    tags: ["caneca", "monograma", "botanical", "personalizado", "presente"],
    featured: false, newArrival: true, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p041", "p004", "p042"],
    active: true, optionalPriceNote: "A partir de US$ 16,85",
    usage: ["Presente", "Uso pessoal", "Decoração"],
    seoTitle: "Caneca Letra Botanical | Nexa Images", seoDescription: "Caneca com inicial em moldura floral. Personalizável. Cerâmica premium."
  },

  // === SOFT BUSINESS STUDIO ===
  {
    id: "p029", slug: "thank-you-sticker-delicado", name: "Thank You Sticker Delicado",
    shortDescription: "Adesivo 'Obrigado' com design minimalista. Perfeito para embalagens.",
    longDescription: "Um sticker elegante com a mensagem \"Thank You\" em tipografia delicada, decorado com folhagens sutis. Ideal para embalagens de pequenos negócios, presentes e envios especiais.",
    category: "labels", subcategory: "thank-you", collection: "soft-business-studio",
    tags: ["thank you", "obrigado", "embalagem", "negócio", "minimalista"],
    badge: "Top Negócios", featured: true, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p030", "p031", "p025"],
    active: true, optionalPriceNote: "A partir de US$ 5,20",
    usage: ["Embalagens", "Presentes", "Envios", "Packaging"],
    seoTitle: "Thank You Sticker Delicado | Nexa Images", seoDescription: "Adesivo Thank You elegante para embalagens de negócios. Design minimalista e delicado."
  },
  {
    id: "p030", slug: "qr-business-label-minimalista", name: "QR Business Label Minimalista",
    shortDescription: "Etiqueta com QR code e espaço para sua marca. Design profissional e clean.",
    longDescription: "Etiqueta profissional com espaço para QR code, logo e informações do seu negócio. Design minimalista com moldura botânica sutil. Perfeita para embalagens, cartões e materiais de divulgação.",
    category: "labels", subcategory: "business-labels", collection: "soft-business-studio",
    tags: ["QR code", "business", "etiqueta", "profissional", "minimalista"],
    badge: "Profissional", featured: false, newArrival: true, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p029", "p031", "p032"],
    active: true, optionalPriceNote: "A partir de US$ 5,95",
    usage: ["Embalagens", "Cartões", "Materiais de divulgação"],
    seoTitle: "QR Business Label Minimalista | Nexa Images", seoDescription: "Etiqueta com QR code para negócios. Design minimalista e profissional. Personalizável."
  },
  {
    id: "p031", slug: "label-artesanal-delicado", name: "Label Artesanal Delicado",
    shortDescription: "Etiqueta com estética artesanal para produtos feitos à mão. Carinho em cada detalhe.",
    longDescription: "Para quem faz com amor e quer mostrar isso na embalagem. Etiqueta com bordas suaves, tipografia manuscrita e elementos botânicos. Personalize com o nome do seu negócio.",
    category: "labels", subcategory: "business-labels", collection: "soft-business-studio",
    tags: ["artesanal", "handmade", "etiqueta", "negócio", "delicado"],
    featured: false, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p029", "p030", "p032"],
    active: true, optionalPriceNote: "A partir de US$ 5,20",
    usage: ["Produtos artesanais", "Embalagens", "Feiras", "Mercados"],
    seoTitle: "Label Artesanal Delicado | Nexa Images", seoDescription: "Etiqueta artesanal para produtos feitos à mão. Personalizável. Design delicado."
  },
  {
    id: "p032", slug: "sticker-apoie-pequenos-negocios", name: "Sticker Apoie Pequenos Negócios",
    shortDescription: "Adesivo com mensagem de apoio a pequenos negócios. Empreendedorismo com coração.",
    longDescription: "\"Apoie Pequenos Negócios\" — uma mensagem importante em um sticker bonito. Design minimalista com elementos florais. Perfeito para embalagens, vitrines e redes sociais.",
    category: "stickers", collection: "soft-business-studio",
    tags: ["pequenos negócios", "apoie", "empreendedorismo", "mensagem"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p029", "p030", "p031"],
    active: true, usage: ["Embalagens", "Vitrine", "Laptop"],
    seoTitle: "Sticker Apoie Pequenos Negócios | Nexa Images", seoDescription: "Adesivo Apoie Pequenos Negócios. Design floral delicado para empreendedores."
  },

  // === WEDDING BOTANICALS ===
  {
    id: "p033", slug: "wedding-favor-sticker-botanico", name: "Wedding Favor Sticker Botânico",
    shortDescription: "Adesivo para lembrancinhas de casamento com design botânico elegante.",
    longDescription: "Selos adesivos com arranjo botânico elegante para lembrancinhas de casamento. Personalize com os nomes dos noivos e a data. Impressão premium com acabamento sofisticado.",
    category: "labels", subcategory: "wedding", collection: "wedding-botanicals",
    tags: ["casamento", "lembrancinha", "botanical", "noivos", "personalizado"],
    badge: "Personalizável", featured: false, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p025", "p034", "p035"],
    active: true, optionalPriceNote: "A partir de US$ 5,95",
    usage: ["Lembrancinhas", "Convites", "Decoração"],
    seoTitle: "Wedding Favor Sticker Botânico | Nexa Images", seoDescription: "Adesivo para lembrancinhas de casamento. Design botânico personalizável com nomes e data."
  },
  {
    id: "p034", slug: "envelope-seal-wedding-eucalipto", name: "Envelope Seal Wedding Eucalipto",
    shortDescription: "Selo para envelopes de convites de casamento com ramos de eucalipto.",
    longDescription: "Selos adesivos redondos com ramos de eucalipto em aquarela. Perfeitos para fechar envelopes de convites de casamento com elegância e naturalidade. Personalizáveis com iniciais.",
    category: "labels", subcategory: "wedding", collection: "wedding-botanicals",
    tags: ["envelope seal", "casamento", "eucalipto", "convite", "iniciais"],
    featured: false, newArrival: true, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p033", "p025", "p035"],
    active: true, optionalPriceNote: "A partir de US$ 5,45",
    usage: ["Convites", "Envelopes", "Casamento"],
    seoTitle: "Envelope Seal Wedding Eucalipto | Nexa Images", seoDescription: "Selo para envelopes de casamento com eucalipto. Personalizável com iniciais."
  },
  {
    id: "p035", slug: "sticker-save-the-date-botanical", name: "Sticker Save the Date Botanical",
    shortDescription: "Adesivo Save the Date com moldura botânica. Para convites inesquecíveis.",
    longDescription: "Um sticker Save the Date com moldura de ramos e flores em aquarela. Personalize com data e nomes. Perfeito para colar em convites, agendas e salvar a data com estilo.",
    category: "labels", subcategory: "wedding", collection: "wedding-botanicals",
    tags: ["save the date", "casamento", "botanical", "convite"],
    featured: false, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p033", "p034", "p025"],
    active: true, usage: ["Convites", "Agendas", "Scrapbook"],
    seoTitle: "Sticker Save the Date Botanical | Nexa Images", seoDescription: "Adesivo Save the Date botânico para casamentos. Personalizável. Aquarela elegante."
  },

  // === CUTE ANIMAL NOTES ===
  {
    id: "p036", slug: "sticker-gatinho-bilhetinho", name: "Sticker Gatinho com Bilhetinho",
    shortDescription: "Gatinho segurando um bilhete de amor. Fofura para seus recados.",
    longDescription: "Um gatinho peludo segurando um pequeno bilhete com coraçãozinho. Perfeito para identificar presentes, decorar cadernos ou simplesmente espalhar ternura por onde passar.",
    category: "stickers", collection: "cute-animal-notes",
    tags: ["gato", "bilhete", "fofo", "mensagem", "animal"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p010", "p037", "p021"],
    active: true, usage: ["Caderno", "Presentes", "Planner"],
    seoTitle: "Sticker Gatinho com Bilhetinho | Nexa Images", seoDescription: "Adesivo de gatinho segurando bilhete. Fofo e delicado para presentes e cadernos."
  },
  {
    id: "p037", slug: "sticker-ursinho-abraco", name: "Sticker Ursinho Abraço",
    shortDescription: "Ursinho fofo de braços abertos. Para quem precisa de um abraço em sticker.",
    longDescription: "Às vezes tudo que a gente precisa é de um abraço — e esse ursinho está aqui para isso. Ilustração terna e acolhedora com tons suaves. Vinil premium resistente.",
    category: "stickers", collection: "cute-animal-notes",
    tags: ["urso", "abraço", "fofo", "ternura", "animal"],
    featured: false, newArrival: true, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p036", "p021", "p020"],
    active: true, usage: ["Caderno", "Laptop", "Celular"],
    seoTitle: "Sticker Ursinho Abraço | Nexa Images", seoDescription: "Adesivo de ursinho fofo de braços abertos. Ternura e fofura em vinil premium."
  },
  {
    id: "p038", slug: "sticker-panda-sonhador", name: "Sticker Panda Sonhador",
    shortDescription: "Panda abraçando um bambu com olhos sonhadores. Delicadeza asiática.",
    longDescription: "Um panda fofo abraçando seu bambu favorito com olhos cheios de sonhos. Ilustração delicada com traços suaves e cores harmoniosas. Vinil premium.",
    category: "stickers", collection: "cute-animal-notes",
    tags: ["panda", "sonhador", "fofo", "bambu", "animal"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p036", "p037", "p024"],
    active: true, usage: ["Caderno", "Laptop", "Garrafa d'água"],
    seoTitle: "Sticker Panda Sonhador | Nexa Images", seoDescription: "Adesivo de panda fofo abraçando bambu. Ilustração delicada e sonhadora."
  },

  // === CAFÉ & LIVROS ===
  {
    id: "p044", slug: "caneca-cafe-livros-cozy", name: "Caneca Café & Livros",
    shortDescription: "Caneca com ilustração de café e livros. Presente ideal para booklovers.",
    longDescription: "A caneca perfeita para quem não abre mão de café com um bom livro. Ilustração exclusiva com xícara fumegante, livros e flores. Cerâmica de alta qualidade.",
    category: "presentes", collection: "cafe-e-livros",
    tags: ["caneca", "café", "livros", "presente", "cozy"],
    featured: false, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p004", "p014", "p009"],
    active: true, optionalPriceNote: "A partir de US$ 16,85",
    usage: ["Presente", "Uso pessoal", "Escritório"],
    seoTitle: "Caneca Café & Livros | Nexa Images", seoDescription: "Caneca com ilustração de café e livros. Personalizável. Presente para booklovers."
  },

  // === READING CORNER ===
  {
    id: "p045", slug: "sticker-pilha-de-livros", name: "Sticker Pilha de Livros",
    shortDescription: "Pilha colorida de livros com flores no topo. Para quem tem TBR infinita.",
    longDescription: "Uma pilha de livros coloridos com flores brotando no topo — porque livros são jardins. Sticker perfeito para booklovers com uma TBR (to be read) infinita.",
    category: "stickers", subcategory: "stickers-bookish", collection: "reading-corner",
    tags: ["livros", "pilha", "flores", "bookish", "TBR"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p009", "p011", "p014"],
    active: true, usage: ["Laptop", "Estante", "Kindle case"],
    seoTitle: "Sticker Pilha de Livros | Nexa Images", seoDescription: "Adesivo de pilha de livros com flores. Para booklovers e amantes de leitura."
  },
  {
    id: "p046", slug: "sticker-marcador-coracao", name: "Sticker Marcador Coração",
    shortDescription: "Marcador de livro em formato de coração. Amor pela leitura em sticker.",
    longDescription: "Um marcador de livro em formato de coração com detalhes florais. Representa o amor pelos livros de forma delicada e poética. Vinil premium.",
    category: "stickers", subcategory: "stickers-bookish", collection: "reading-corner",
    tags: ["marcador", "coração", "bookish", "leitura", "amor"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p045", "p009", "p011"],
    active: true, usage: ["Caderno", "Laptop", "Kindle case"],
    seoTitle: "Sticker Marcador Coração | Nexa Images", seoDescription: "Adesivo de marcador em coração para booklovers. Amor pela leitura em sticker."
  },

  // === VOLTA ÀS AULAS ===
  {
    id: "p027", slug: "kit-etiquetas-volta-as-aulas", name: "Kit de Etiquetas Volta às Aulas",
    shortDescription: "Kit completo de etiquetas escolares com estética delicada. Personalizável.",
    longDescription: "Um kit completo com etiquetas para cadernos, livros, lancheira e materiais diversos. Design delicado com flores e animaizinhos fofos. Personalize com o nome da criança e organize o ano letivo com carinho.",
    category: "labels", subcategory: "kids-labels", collection: "volta-as-aulas",
    tags: ["volta às aulas", "etiqueta", "escolar", "infantil", "personalizado"],
    badge: "Kit Completo", featured: true, newArrival: false, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p007", "p022", "p028"],
    active: true, optionalPriceNote: "A partir de US$ 7,95",
    usage: ["Cadernos", "Livros", "Lancheira", "Material escolar"],
    seoTitle: "Kit de Etiquetas Volta às Aulas | Nexa Images", seoDescription: "Kit completo de etiquetas escolares delicadas. Personalizáveis com nome. Flores e animais fofos."
  },
  {
    id: "p028", slug: "sticker-material-escolar-fofo", name: "Sticker Material Escolar Fofo",
    shortDescription: "Stickers com lápis, borrachas e cadernos fofos. Volta às aulas encantadora.",
    longDescription: "Material escolar nunca foi tão fofo! Stickers com lápis sorridente, borrachinha corada, caderno com florzinha e muito mais. Perfeitos para identificar e decorar materiais escolares.",
    category: "stickers", collection: "volta-as-aulas",
    tags: ["escolar", "material", "fofo", "infantil", "volta às aulas"],
    featured: false, newArrival: false, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p027", "p007", "p022"],
    active: true, usage: ["Material escolar", "Cadernos", "Estojos"],
    seoTitle: "Sticker Material Escolar Fofo | Nexa Images", seoDescription: "Stickers fofos de material escolar. Lápis, borrachas e cadernos encantadores."
  },
  {
    id: "p047", slug: "etiqueta-lancheira-frutas", name: "Etiqueta Lancheira Frutinhas",
    shortDescription: "Etiquetas para lancheira com frutinhas ilustradas. Saúde e fofura.",
    longDescription: "Frutinhas sorridentes decoram essas etiquetas para lancheira. Personalizáveis com o nome da criança. Resistentes e com design que alegra a hora do lanche.",
    category: "labels", subcategory: "kids-labels", collection: "volta-as-aulas",
    tags: ["lancheira", "frutas", "infantil", "personalizado", "escola"],
    featured: false, newArrival: true, customizable: true,
    zazzleUrl: "#", personalizeUrl: "#",
    images: ["/placeholder.svg"], relatedProducts: ["p027", "p022", "p007"],
    active: true, usage: ["Lancheira", "Garrafa d'água", "Potes"],
    seoTitle: "Etiqueta Lancheira Frutinhas | Nexa Images", seoDescription: "Etiquetas para lancheira com frutinhas fofas. Personalizáveis com nome."
  },

  // === SAZONAIS ===
  {
    id: "p048", slug: "sticker-natal-cozy", name: "Sticker Natal Cozy",
    shortDescription: "Sticker natalino com capivara e gorrito de Natal. Aconchego festivo.",
    longDescription: "Uma capivara com gorrito de Papai Noel, cachecol de tricô e uma xícara de chocolate quente. O Natal mais cozy que você vai encontrar em sticker. Edição limitada da coleção sazonal.",
    category: "stickers", collection: "volta-as-aulas",
    tags: ["natal", "cozy", "capivara", "festivo", "sazonal"],
    badge: "Sazonal", featured: false, newArrival: true, customizable: false,
    zazzleUrl: "#", images: ["/placeholder.svg"], relatedProducts: ["p001", "p002", "p004"],
    active: true, usage: ["Presentes", "Embalagens", "Cartões", "Laptop"],
    seoTitle: "Sticker Natal Cozy | Nexa Images", seoDescription: "Sticker natalino com capivara fofa. Gorrito de Natal e chocolate quente. Edição sazonal."
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category && p.active);
}

export function getProductsByCollection(collection: string): Product[] {
  return products.filter(p => p.collection === collection && p.active);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured && p.active);
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.newArrival && p.active);
}

export function getRelatedProducts(productIds: string[]): Product[] {
  return products.filter(p => productIds.includes(p.id) && p.active);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.active && (
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q) ||
      p.collection.toLowerCase().includes(q)
    )
  );
}
