# 🚀 Portfólio Moderno - React + Tailwind CSS

Um portfólio pessoal moderno, responsivo e profissional desenvolvido com **React**, **Tailwind CSS**, **Framer Motion** e **JavaScript puro**.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.6-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)

## ✨ Features

- ✅ **Design Moderno & Profissional** - Visual minimalista com glassmorphism
- ✅ **Totalmente Responsivo** - Mobile-first, funciona em todos os dispositivos
- ✅ **Dark Mode** - Tema escuro por padrão com gradientes elegantes
- ✅ **Animações Suaves** - Framer Motion para transições fluidas
- ✅ **Componentes Reutilizáveis** - Arquitetura bem organizada
- ✅ **Scroll Spy** - Navegação inteligente que segue a seção ativa
- ✅ **Botão Scroll to Top** - Retorna ao topo com animação suave
- ✅ **SEO Básico** - Meta tags e estrutura otimizada
- ✅ **Formulário de Contato** - Sistema de mensagens funcional
- ✅ **Filtros de Projetos** - Filtre projetos por categoria

## 📋 Seções Incluídas

1. **Navbar** - Navegação fixa com mobile menu
2. **Hero** - Seção inicial com typing effect e CTA buttons
3. **About** - Sobre você com foto, descrição e estatísticas
4. **Skills** - Grid de tecnologias com barras de progresso
5. **Projects** - Galeria de projetos com filtros
6. **Experience** - Timeline de experiência profissional
7. **Education** - Cards de formação e certificações
8. **Contact** - Formulário e links sociais
9. **Footer** - Rodapé com links e redes sociais

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.2** - Biblioteca JavaScript
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Framer Motion 10.16** - Biblioteca de animações
- **Lucide React 0.292** - Ícones SVG
- **Vite 5.0** - Build tool rápido
- **PostCSS & Autoprefixer** - Processamento CSS

### 🐳 Infraestrutura
- **Docker & Docker Compose** - Containerização e orquestração de ambientes
- **Ambientes Isolados** - Desenvolvimento, teste e produção padronizados

## 📦 Instalação

### 1. Clonar o repositório ou acessar a pasta do projeto

```bash
cd PORTFOLIO-DEV
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

O projeto será executado em `http://localhost:5173`

## 🐳 Docker - Infraestrutura e Deployment

Este projeto é desenvolvido e estudado com **infraestrutura baseada em Docker**, garantindo ambientes consistentes entre desenvolvimento, testes e produção.

### Por que Docker?
- ✅ **Ambientes Isolados** - Evita conflitos de dependências
- ✅ **Reprodutibilidade** - Mesmo ambiente em qualquer máquina
- ✅ **Escalabilidade** - Fácil deploy em produção
- ✅ **CI/CD** - Integração contínua com pipelines automatizados

### Requisitos
- Docker 20.10+ 
- Docker Compose 1.29+

### Executar com Docker

#### Build da imagem
```bash
docker build -t portfolio-app .
```

#### Rodar com Docker Compose
```bash
docker-compose up
```

O projeto estará disponível em `http://localhost:5173`

### Build para produção com Docker
```bash
docker build -t portfolio-app:prod --target production .
docker run -p 80:80 portfolio-app:prod
```

**Nota:** Este projeto está em desenvolvimento e estudo contínuo de práticas modernas de infraestrutura com Docker, CI/CD e deploy automatizado.

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── ScrollToTop.jsx
├── data/
│   └── portfolioData.js  # Configurações do portfólio
├── App.jsx              # Componente principal
├── main.jsx             # Entry point
├── index.css            # Estilos globais
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Deploy

### Fazer build para produção

```bash
npm run build
```

Isso criará uma pasta `dist/` com os arquivos otimizados.

### Plataformas recomendadas para deploy:

1. **Vercel** (Recomendado)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

3. **GitHub Pages**
   ```bash
   npm run build
   git push origin main
   ```

## 📄 Licença

Desenvolvido com ❤️ por Yuri Pedrozo
