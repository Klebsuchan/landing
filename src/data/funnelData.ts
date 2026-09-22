export const CHECKOUT_BASE_URL = 'https://pay.kiwify.com.br/Ea8P4PB';
export const WHATSAPP_BASE_URL = 'https://wa.me/5585958548964?text=Oi%20meu%20s%C3%B3cio%20acabei%20de%20sair%20do%20teu%20quiz%20e%20tenho%20uma%20d%C3%BAvida.';

export interface QuestionData {
  id: string;
  badge: string;
  question: string;
  subtitle?: string;
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
  subtitle: 'Selecione a opção que mais reflete a sua realidade hoje:',
  options: [
    {
      id: 'oCJQlP',
      letter: 'A',
      text: 'Não saber por onde começar.',
      desc: 'Sensação de estar perdido entre tantas configurações e ferramentas.',
    },
    {
      id: 'O4J1RD',
      letter: 'B',
      text: 'Gastar e não ver resultado.',
      desc: 'Colocar dinheiro no botão turbinar ou no gerenciador sem retorno de vendas.',
    },
  ],
};

export const QUESTION_2: QuestionData = {
  id: 'step_1',
  badge: 'PERGUNTA 2 DE 2',
  question: 'Porque você sente que precisa fazer anúncios?',
  subtitle: 'Qual é a principal virada de chave que seu negócio precisa?',
  options: [
    {
      id: '2eMAsw',
      letter: 'A',
      text: 'Porque preciso de mais clientes todos os dias.',
      desc: 'Fluxo constante de novos contatos interessados no meu WhatsApp.',
    },
    {
      id: 'K6nAOd',
      letter: 'B',
      text: 'Porque minhas vendas estão paradas.',
      desc: 'Recuperar o movimento e atingir novas pessoas na minha região.',
    },
    {
      id: 'kfn8NO',
      letter: 'C',
      text: 'Porque quero fazer meu negócio crescer de verdade.',
      desc: 'Escalar faturamento com previsibilidade e consistência mês a mês.',
    },
  ],
};

export const SOLUTION_POINTS = [
  {
    title: 'Fazer anúncios do jeito certo',
    desc: 'Mesmo começando do absoluto zero, sem complicações técnicas.',
  },
  {
    title: 'Aparecer todos os dias para pessoas da sua cidade',
    desc: 'Alcançar exatamente quem tem interesse real no que você vende.',
  },
  {
    title: 'Saber exatamente o que fazer quando o anúncio não vende',
    desc: 'Ajustar o criativo e o público sem queimar verba desnecessária.',
  },
  {
    title: 'Atrair clientes prontos para comprar',
    desc: 'Pessoas decididas que entram em contato já querendo fechar negócio.',
  },
  {
    title: 'Usar uma estrutura validada',
    desc: 'Investir pouco e colher vendas todos os dias com método comprovado.',
  },
];

export const STARFLIX_MODULES = [
  'Passo a passo para criar anúncios no gerenciador e no turbinar do jeito certo',
  'Como fazer anúncios pelo celular e computador de um jeito simples',
  'Estruturas validadas para atrair novos clientes todos os dias',
  'Aulas práticas, diretas ao ponto e sem enrolação teórica',
  'Como lotar seu WhatsApp com clientes qualificados',
  'Como ganhar seguidores que realmente compram de você',
  'Como vender seus produtos ou serviços pelo seu site',
  'Ferramentas para aumentar o faturamento e organizar seu negócio',
];

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
    highlight: 'Exemplo do aluno Rair (Casa dos Capacetes), vendendo para toda a cidade.',
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
    question: 'Como recebo o acesso à Starflix após o pagamento?',
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
    question: 'A Starflix funciona para o meu tipo de negócio ou nicho?',
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
      'Você pode pagar com 55% de desconto à vista via PIX (com liberação imediata) ou parcelado no Cartão de Crédito em até 12x de R$ 19,78.',
    category: 'Pagamento',
  },
];

