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

- **React 18.2** - Biblioteca JavaScript
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Framer Motion 10.16** - Biblioteca de animações
- **Lucide React 0.292** - Ícones SVG
- **Vite 5.0** - Build tool rápido
- **PostCSS & Autoprefixer** - Processamento CSS

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

## ⚙️ Personalização

### 1. Edite o arquivo de dados (`src/data/portfolioData.js`)

Este é o arquivo principal onde você personaliza **TODAS** as informações do portfólio:

```javascript
export const portfolioData = {
  personal: {
    name: "[SEU NOME AQUI]",
    title: "Desenvolvedor Full Stack",
    // ... mais campos
  },
  // ... outras seções
};
```

#### Campos principais a editar:

- **`personal.name`** - Seu nome
- **`personal.title`** - Seu cargo/título
- **`personal.subtitle`** - Subtítulo com typing effect
- **`personal.description`** - Descrição profissional
- **`personal.avatar`** - URL da sua foto
- **`personal.cv`** - URL do seu CV em PDF

- **`social`** - Links de redes sociais
  - `github` - Perfil GitHub
  - `linkedin` - Perfil LinkedIn
  - `email` - Email de contato
  - `instagram` - Perfil Instagram (opcional)

- **`about.description`** - Descrição detalhada sobre você
- **`about.stats`** - Estatísticas (anos de experiência, projetos, etc.)

- **`skills`** - Array de tecnologias (já pré-preenchido)
  - Cada skill tem: `name`, `icon`, `level`, `color`

- **`projects`** - Array com seus projetos
  ```javascript
  {
    id: 1,
    title: "Nome do Projeto",
    description: "Descrição",
    image: "URL da imagem",
    technologies: ["React", "Node.js"],
    category: "Full Stack",
    links: {
      demo: "https://...",
      github: "https://..."
    }
  }
  ```

- **`experience`** - Array de experiências profissionais
- **`education`** - Array de cursos e certificações

### 2. Adicionar suas imagens

Substitua as URLs de placeholder por suas imagens reais:

```javascript
avatar: "https://via.placeholder.com/400x400" // Sua foto
image: "https://via.placeholder.com/500x300" // Imagem do projeto
```

**Dica:** Use serviços como:
- [ImgBB](https://imgbb.com/) - Hospedagem gratuita de imagens
- [Imgur](https://imgur.com/) - Compartilhar imagens
- [Cloudinary](https://cloudinary.com/) - Otimização de imagens

### 3. Customizar cores

O esquema de cores está em `tailwind.config.js`. Para alterar cores:

```javascript
colors: {
  primary: { /* cores primárias */ },
  dark: { /* tons de escuro */ }
}
```

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
│   └── portfolioData.js  # 🔑 ARQUIVO PRINCIPAL - EDITE AQUI
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

## 🎨 Personalizações Avançadas

### Mudar tema de cores

Edite `tailwind.config.js`:

```javascript
extend: {
  colors: {
    primary: {
      50: '#f0f9ff',
      500: '#0ea5e9',
      // ... mais tons
    }
  }
}
```

### Adicionar novas seções

1. Crie um novo componente em `src/components/`
2. Importe em `App.jsx`
3. Adicione em `App.jsx` com um ID único

### Modificar animações

As animações estão em `tailwind.config.js` na seção `keyframes`.

## 📝 Exemplos de Preenchimento

### Hero Section

```javascript
personal: {
  name: "João Silva",
  title: "Desenvolvedor Full Stack",
  subtitle: "Transformando ideias em soluções digitais",
  description: "Especialista em React, Node.js e tecnologias modernas. Ajudo empresas a criar aplicações web de alta performance.",
  avatar: "https://example.com/foto.jpg",
}
```

### Projeto

```javascript
{
  id: 1,
  title: "E-commerce Moderno",
  description: "Plataforma de e-commerce completa com carrinho de compras, checkout seguro e painel administrativo.",
  image: "https://example.com/projeto1.jpg",
  technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  category: "Full Stack",
  links: {
    demo: "https://ecommerce-demo.com",
    github: "https://github.com/usuario/ecommerce"
  }
}
```

## 🐛 Troubleshooting

### Porta já está em uso

```bash
npm run dev -- --port 3000
```

### Erro ao instalar dependências

```bash
rm -rf node_modules package-lock.json
npm install
```

### Problema com build

```bash
npm run build -- --debug
```

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique se todas as dependências estão instaladas
2. Limpe o cache: `npm cache clean --force`
3. Reinstale tudo: `rm -rf node_modules && npm install`
4. Verifique a versão do Node.js: `node -v` (deve ser 16+)

## 📄 Licença

Desenvolvido com ❤️ por você

---

**Dica:** Não esqueça de:
- ✅ Personalizar TODAS as informações em `src/data/portfolioData.js`
- ✅ Adicionar suas próprias imagens
- ✅ Testar em diferentes dispositivos
- ✅ Deploy em uma plataforma (Vercel, Netlify, etc.)

Boa sorte! 🚀
