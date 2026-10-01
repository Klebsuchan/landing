export const CHECKOUT_BASE_URL = 'https://chk.eduzz.com/E05NNXX49X';
export const WHATSAPP_BASE_URL = 'https://wa.me/5585958548964?text=Oi%20meu%20s%C3%B3cio%20acabei%20de%20sair%20do%20teu%20quiz%20e%20tenho%20uma%20d%C3%BAvida.';

// Visual assets e imagens do primeiro link (Tráfego Fácil 2026)
export const CHECKOUT_VISUALS = {
  headerBanner:
    'https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=1000/GLoyTdzx7HaqTzY/img_builder_aa681415-2e51-408a-9c3e-2a1ccb4630a5_fbc8e9c90535417f8cf541f28d6f61f5.png',
  productBanner:
    'https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=800/GLoyTdzx7HaqTzY/img_builder_fb379a2a-cd52-4018-b133-2d3afbeb31d7_1350d8f4998646ff864395d4ab5a6068.png',
  sideDevice:
    'https://aws-assets.kiwify.com.br/GLoyTdzx7HaqTzY/img_builder_aa73f0b7-ebdf-4f2c-9e27-26a49d987fd0_10e4c143d9094e3ea27640f78824aa0f.png',
  cardAnuncios:
    'https://aws-assets.kiwify.com.br/GLoyTdzx7HaqTzY/img_builder_6c44c1f1-34c0-4ef6-8c4f-28241755ecaf_2aa5da55bd4f456384f5dee3821b8b70.png',
  solutionGif:
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXNja2k5ZTBpMXJ5OTJ2NXFzMzA1bW44MWYycjJjZjBvZGdrMzN6MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LdOyjZ7io5Msw/giphy.gif',
  solutionGifAlternative:
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzB2M3BxcDhpNXU4Y3kya3g4N3hndG05d21xY2xxcWlydmNxODVqZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6gDWzmAzrpi5DQU8/giphy.gif',
  deliverables: [
    {
      title: 'Aulas Práticas do Zero ao Avançado',
      url: 'https://aws-assets.kiwify.com.br/GLoyTdzx7HaqTzY/img_builder_1dde07c8-b401-44b3-9e71-08ec68fe35ab_5f70f7b5bdd74978a39ac24536d5f50e.png',
      desc: 'Passo a passo na tela do celular e do computador',
    },
    {
      title: 'Estruturas Validadas de Campanhas',
      url: 'https://aws-assets.kiwify.com.br/GLoyTdzx7HaqTzY/img_builder_b452c1df-b3f1-42e0-b98f-283b090b5cb1_559862d5397e4ec589e19ac47ce19d1a.png',
      desc: 'Anúncios prontos só para copiar e colar no seu negócio',
    },
    {
      title: 'Como Lotar o WhatsApp de Clientes',
      url: 'https://aws-assets.kiwify.com.br/GLoyTdzx7HaqTzY/img_builder_24809cf8-5098-48f4-9d60-9e254cac1a60_36f4ae4e6b00439180eb4ee82848e4ac.png',
      desc: 'Fluxo constante de novos contatos todos os dias',
    },
  ],
  advantages: [
    {
      title: 'Privacidade',
      subtitle: 'Sua informação 100% segura',
      icon: 'globe',
    },
    {
      title: 'Compra segura',
      subtitle: 'Ambiente seguro e autenticado',
      icon: 'shield',
    },
    {
      title: 'Entregue via E-mail',
      subtitle: 'Acesso ao produto entregue por email',
      icon: 'mail',
    },
  ],
};

// URL padrão para o vídeo de depoimento real do aluno (arquivo enviado pelo usuário)
export const DEFAULT_TESTIMONIAL_VIDEO_URL = '/curso-trafego-2026-landpage.mp4';

export interface QuestionData {
  id: string;
  badge: string;
  question: string;
  subtitle?: string;
  gifUrl?: string;
  options: {
    id: string;
    letter: string;
    text: string;
    desc?: string;
  }[];
}

export const QUESTION_1: QuestionData = {
  id: 'step_0',
  badge: 'PERGUNTA 1 DE 2',
  question: 'Na hora de fazer seus anúncios patrocinados, o que mais te desanima?',
  gifUrl: '/step0.gif',
  options: [
    {
      id: 'oCJQlP',
      letter: 'A',
      text: 'Não saber por onde começar.',
    },
    {
      id: 'O4J1RD',
      letter: 'B',
      text: 'Gastar e não ver resultado.',
    },
  ],
};

export const QUESTION_2: QuestionData = {
  id: 'step_1',
  badge: 'PERGUNTA 2 DE 2',
  question: 'Porque você sente que precisa fazer anúncios?',
  gifUrl: '/step1.gif',
  options: [
    {
      id: '2eMAsw',
      letter: 'A',
      text: 'Porque preciso de mais clientes todos os dias.',
    },
    {
      id: 'K6nAOd',
      letter: 'B',
      text: 'Porque minhas vendas estão paradas.',
    },
    {
      id: 'kfn8NO',
      letter: 'C',
      text: 'Porque quero fazer meu negócio crescer de verdade.',
    },
  ],
};

export const SOLUTION_POINTS = [
  {
    title: 'Fazer anúncios do jeito certo (mesmo começando do zero)',
  },
  {
    title: 'Aparecer todos os dias para pessoas da sua cidade',
  },
  {
    title: 'Saber exatamente o que fazer quando o anúncio não vende',
  },
];

export const TRAFEGO_FACIL_MODULES = [
  'Passo a passo para criar anúncios no gerenciador e no turbinar do jeito certo.',
  'Como fazer anúncios pelo celular e computador de um jeito simples.',
  'Estruturas validadas para atrair novos clientes todos os dias.',
];
export const STARFLIX_MODULES = TRAFEGO_FACIL_MODULES;

export const NICHES_DATA = [
  {
    id: 'nicho-1',
    name: 'Comércio Local & Lojas Físicas',
    result: '+450% em clientes da cidade',
    highlight: 'Pessoas da sua rua e bairro descobrindo seu negócio no Instagram diariamente.',
    tag: 'Varejo',
  },
  {
    id: 'nicho-2',
    name: 'Motopeças & Oficinas Automotivas',
    result: 'De R$ 10k para mais de R$ 100k/mês',
    highlight: 'Exemplo real do aluno no depoimento em vídeo, vendendo para toda a cidade.',
    tag: 'Automotivo',
  },
  {
    id: 'nicho-3',
    name: 'Serviços & Profissionais Liberais',
    result: 'Agenda lotada com 2 semanas de antecedência',
    highlight: 'Advogados, contadores, arquitetos e consultores atraindo clientes de alto valor.',
    tag: 'Prestadores de Serviço',
  },
  {
    id: 'nicho-4',
    name: 'Delivery, Restaurantes & Lanchonetes',
    result: 'Pedidos diários no WhatsApp sem taxas abusivas',
    highlight: 'Clientes pedindo direto com você, aumentando a margem de lucro.',
    tag: 'Alimentação',
  },
  {
    id: 'nicho-5',
    name: 'Moda, Roupas, Calçados & Acessórios',
    result: 'Estoque girando rápido toda semana',
    highlight: 'Criativos com provador e catálogo convertendo em vendas imediatas.',
    tag: 'Moda',
  },
  {
    id: 'nicho-6',
    name: 'Saúde, Odontologia, Estética & Beleza',
    result: 'Novos agendamentos todos os dias',
    highlight: 'Clínicas, manicures, barbearias e dermatologistas com demanda contínua.',
    tag: 'Beleza & Saúde',
  },
  {
    id: 'nicho-7',
    name: 'Infoprodutos, Cursos & Mentorias',
    result: 'ROI positivo e escala consistente',
    highlight: 'Captação de leads qualificados para lançamentos e perpétuo.',
    tag: 'Digital',
  },
  {
    id: 'nicho-8',
    name: 'E-commerce & Lojas Virtuais',
    result: 'Tráfego que converte no checkout',
    highlight: 'Campanhas de conversão focadas em carrinho e menor custo por aquisição.',
    tag: 'E-commerce',
  },
];

export const BONUSES_LIST = [
  {
    title: 'Suporte exclusivo e grupo de alunos',
    desc: 'Ambiente ativo para tirar dúvidas diretamente e trocar experiências reais.',
  },
  {
    title: 'Banco de ideias infinitas de anúncios',
    desc: 'Modelos prontos de cópias e roteiros validados para o seu segmento.',
  },
  {
    title: 'Acesso a todas as novas aulas atualizadas',
    desc: 'Todas as novidades adicionadas ao longo do ano sem pagar nenhum centavo a mais.',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como recebo o acesso ao Tráfego Fácil 2026 após o pagamento?',
    answer:
      'Assim que sua inscrição for confirmada, você receberá instantaneamente um e-mail com seus dados de login e link da plataforma. Pagamentos via PIX ou Cartão de Crédito têm liberação imediata em menos de 1 minuto.',
    category: 'Acesso',
  },
  {
    id: 'faq-2',
    question: 'Preciso de computador ou posso fazer tudo pelo celular?',
    answer:
      'Você pode fazer tudo pelo celular! Todas as aulas foram gravadas mostrando o passo a passo prático tanto na tela do smartphone quanto no computador, para você começar com as ferramentas que já tem em mãos hoje.',
    category: 'Prática',
  },
  {
    id: 'faq-3',
    question: 'Funciona para quem nunca anunciou e não entende nada de tecnologia?',
    answer:
      'Sim, perfeitamente! O método foi desenvolvido do zero absoluto, ensinando em linguagem simples onde clicar, como criar seus anúncios e como colocar campanhas lucrativas no ar em menos de 24 horas, sem termos difíceis.',
    category: 'Iniciantes',
  },
  {
    id: 'faq-4',
    question: 'O Tráfego Fácil 2026 funciona para o meu tipo de negócio ou nicho?',
    answer:
      'Com certeza. As estratégias ensinadas foram validadas em mais de 100 segmentos diferentes, incluindo comércio local, prestação de serviços, delivery e alimentação, estética, saúde, moda, serviços automotivos, e-commerce e produtos digitais.',
    category: 'Segmentos',
  },
  {
    id: 'faq-5',
    question: 'E se eu não gostar ou achar que não é para mim?',
    answer:
      'Você conta com a nossa Garantia Incondicional de 7 dias. Você pode entrar, assistir às aulas e testar o método. Se por qualquer motivo não ficar 100% satisfeito, basta solicitar o reembolso na plataforma e devolvemos cada centavo sem questionamentos.',
    category: 'Garantia',
  },
  {
    id: 'faq-6',
    question: 'Quais são as formas de pagamento disponíveis?',
    answer:
      'Você pode pagar com 55% de desconto à vista via PIX (com liberação imediata) ou parcelado no Cartão de Crédito em até 12x de R$ 20,68.',
    category: 'Pagamento',
  },
];

