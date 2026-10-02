# 🚀 Tráfego Fácil 2026 – Funil Interativo de Alta Conversão

[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![SEO Ready](https://img.shields.io/badge/SEO-Optimized-brightgreen?style=for-the-badge&logo=google)](https://schema.org)

Aplicação web completa e interativa de funil em estilo quiz para a oferta **Tráfego Fácil 2026**. Projetada para máxima taxa de conversão, carregamento instantâneo, compatibilidade universal e excelência visual com design neo-brutalista moderno.

---

## 🌟 Principais Destaques

### 🎯 Funil Interativo e Guiado (Quiz)
- **Perguntas Estratégicas**: Diagnóstico rápido do perfil do lead com opções clicáveis e feedback visual imediato.
- **Micro-interações Fluidas**: Transições animadas com `motion/react`, barras de progresso dinâmicas e contadores de escassez.
- **Preservação Inteligente de UTMs**: Rastreamento completo dos parâmetros de campanha (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`) injetados diretamente no link de checkout da Eduzz.

### 🔍 SEO Integrado de Grande Alcance
- **Meta Tags Completas**: Títulos e descrições semânticas otimizadas para ranqueamento no Google.
- **OpenGraph & Twitter Cards**: Pré-visualizações ricas e profissionais ao compartilhar em redes sociais, WhatsApp, Telegram, Discord e LinkedIn.
- **Schema.org Structured Data (JSON-LD)**: Rich Snippets configurados com marcações de `Course`, `Product`, `Offer` e `FAQPage` para destaque nas SERPs.
- **Favicon Dinâmico e Divertido**: Ícone vetorial SVG nítido em todas as resoluções, adaptável a temas claro e escuro.

### 🎬 Vídeo Otimizado para Todos os Dispositivos
- **Codificação Universal**: Vídeo codificado em H.264 (High Profile) com áudio AAC estéreo.
- **Streaming por Faixa de Bytes (HTTP 206 Partial Content)**: Permite início imediato da reprodução sem travamentos no iOS (Safari), Android e navegadores desktop.
- **Poster Inteligente & Preload**: Frame de pré-carregamento imediato sem telas pretas e consumo eficiente de dados.

### 🎨 Design Neo-Brutalista Refinado
- Bordas marcantes (`border-2 border-gray-900`), sombras sólidas (`shadow-[4px_4px_0px_#09090b]`) e paleta com contrastes deliberados (vermelho, âmbar e preto).
- Responsividade total, testada em telas ultracompactas (320px) até monitores 4K.

---

## 📁 Estrutura do Projeto

```text
├── index.html                  # Entrypoint com SEO, OpenGraph, JSON-LD e links de favicon
├── metadata.json               # Configurações do applet e permissões
├── package.json                # Dependências e scripts de execução
├── vite.config.ts              # Configuração do Vite com suporte a vídeo e Tailwind
├── public/
│   ├── favicon.svg             # Favicon vetorial exclusivo e divertido
│   ├── og-image.png            # Card visual para compartilhamento social
│   ├── video-poster.jpg        # Poster estático leve do vídeo
│   ├── novovideo.mp4           # Vídeo principal otimizado
│   └── assets/inlead/          # Imagens, depoimentos e mídias do funil
└── src/
    ├── App.tsx                 # Controlador de etapas do funil e estado global
    ├── main.tsx                # Bootstrap React
    ├── components/
    │   ├── Header.tsx          # Cabeçalho com identidade visual limpa
    │   ├── StepQuestion.tsx    # Componente das perguntas interativas do quiz
    │   ├── StepPlatform.tsx    # Apresentação do método e grade de módulos
    │   ├── StepTestimonial.tsx # Prova social com áudio e comprovantes
    │   ├── StepCarousel.tsx    # Carrossel de resultados de alunos por nicho
    │   ├── StepCheckout.tsx    # Página de oferta final com vídeo e checkout
    │   └── FAQ.tsx             # Seção sanfonada de dúvidas frequentes
    ├── data/
    │   └── funnelData.ts       # Central de dados das perguntas, módulos e oferta
    └── utils/
        └── utm.ts              # Utilitário para captura e repasse de UTMs
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/trafego-facil-2026.git
cd trafego-facil-2026
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra no seu navegador:
```text
http://localhost:3000
```

---

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento na porta 3000 |
| `npm run build` | Compila o projeto para produção na pasta `dist/` |
| `npm run lint` | Executa a verificação estática de tipos do TypeScript |

---

## 🔒 Segurança e Integração Eduzz

O fluxo foi configurado para enviar os leads diretamente para a página oficial de pagamento na Eduzz:
```text
https://chk.eduzz.com/E05NNXX49X
```
Qualquer parâmetro UTM passado na URL original do quiz é automaticamente anexado ao link final de compra, permitindo medição precisa de ROI nas plataformas de anúncio (Meta Ads, Google Ads, TikTok Ads).

---

## 📄 Licença

Distribuído sob a licença MIT. Consulte `LICENSE` para obter mais informações.
