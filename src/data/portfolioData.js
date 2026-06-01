import photoUser from '../photo_user.png';
import cvFile from '../CV.pdf';
import loveCodeImage from '../lovecode-site.png';
import oldersRetroImage from '../oldersretro.png';
import termotubosImage from '../termotubos.png';

export const portfolioData = {
  // ========== INFORMAÇÕES PESSOAIS ==========
  personal: {
    name: "YURI PEDROZO",
    title: "Desenvolvedor Full Stack",
    subtitle: "Criando soluções web modernas e inovadoras",
    description: "Sou apaixonado por tecnologia e estou sempre buscando aprender e evoluir. Meu maior objetivo é ingressar profissionalmente na área de desenvolvimento, construir uma carreira sólida e transformar minha paixão por tecnologia em crescimento profissional.",
    avatar: photoUser,
    cv: cvFile,
  },

  // ========== REDES SOCIAIS ==========
  social: {
    github: "https://github.com/yuriown",
    linkedin: "https://linkedin.com/in/yuri-pedrozo",
    email: "yuriowns13@gmail.com",
  },

  // ========== SOBRE MIM ==========
  about: {
    title: "Sobre Mim",
    description: "Experiência em automação comercial, CRM e integração de sistemas, com atuação em Sales Ops na Termotubos e Rope Store. Atualmente estudando desenvolvimento e infraestrutura, busco minha primeira oportunidade como desenvolvedor para aplicar conhecimentos técnicos e crescer na área de tecnologia.",
    stats: [
      {
        label: "Ano de Experiência",
        value: "1",
      },
      {
        label: "Projetos Concluídos",
        value: "3",
      },
      {
        label: "Clientes Satisfeitos",
        value: "5+",
      },
    ],
  },

  // ========== TECNOLOGIAS / SKILLS ==========
  skills: [
    {
      name: "HTML",
      icon: "Code",
      level: 100,
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "CSS",
      icon: "Palette",
      level: 100,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "JavaScript",
      icon: "Zap",
      level: 100,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "React",
      icon: "Atom",
      level: 60,
      color: "from-cyan-400 to-cyan-600",
    },
    {
      name: "Node.js",
      icon: "Server",
      level: 85,
      color: "from-green-400 to-green-600",
    },
    {
      name: "TypeScript",
      icon: "FileJson",
      level: 65,
      color: "from-blue-300 to-blue-500",
    },
    {
      name: "Tailwind CSS",
      icon: "Wind",
      level: 90,
      color: "from-teal-400 to-teal-600",
    },
    {
      name: "Git",
      icon: "GitBranch",
      level: 100,
      color: "from-red-400 to-red-600",
    },
    {
      name: "REST API",
      icon: "Network",
      level: 75,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Banco de Dados",
      icon: "Database",
      level: 82,
      color: "from-pink-400 to-pink-600",
    },
    {
      name: "Docker",
      icon: "Box",
      level: 70,
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Lua",
      icon: "Lightbulb",
      level: 90,
      color: "from-purple-400 to-indigo-600",
    },
  ],

  // ========== PROJETOS ==========
  projects: [
    {
      id: 1,
      title: "LoveCode",
      description: "Sites para casais, com timer, fotos, músicas e lembranças especiais.",
      image: loveCodeImage,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Front-end",
      links: {
        demo: "https://yuriown.github.io/LoveCode/",
        github: "https://github.com/yuriown/LoveCode",
      },
    },
    {
      id: 2,
      title: "Olders Retro",
      description: "Servidor de Tibia com diversas funcionalidades excluvisas.",
      image: oldersRetroImage,
      technologies: ["Lua", "Mysql", "PHP", "C", "C++", "Shell", "Python"],
      category: "Full Stack",
      links: {
        demo: "https://instagram.com/oldersretro",
      },
    },
    {
      id: 3,
      title: "Termotubos HUB",
      description: "Site desenvolvido para a empresa Termotubos, com o objetivo de centralizar e facilitar informações.",
      image: termotubosImage,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Front-end",
      links: {
        demo: "https://yuriown.github.io/Macro-TT/",
        github: "https://github.com/yuriown/Macro-TT",
      },
    },
  ],

  // ========== EXPERIÊNCIA PROFISSIONAL ==========
  experience: [
    {
      id: 1,
      company: "Termotubos",
      position: "Sales Ops",
      period: "07/2024 - 03/2025",
      description:
        "Atuei na criação de automações para otimizar o trabalho dos gerentes de carteira, desenvolvendo calculadoras, ajustando fluxos de bots no WhatsApp e administrando aplicações no CRM. Também fui responsável pelo controle e direcionamento de clientes, realizando o primeiro contato, identificando suas necessidades e encaminhando-os ao gerente mais adequado ao perfil.",
      skills: ["CRM", "Automação de processos", "Bots de WhatsApp"],
    },
    {
      id: 2,
      company: "RopeStore",
      position: "Sales Ops",
      period: "07/2025 - 10/2025",
      description:
        "Desenvolvi automações e ferramentas para otimizar processos comerciais, incluindo calculadoras customizadas, integrações entre CRM e ERP, dashboards estratégicos e automação de fluxos de dados, contribuindo para maior eficiência operacional, redução de retrabalho e melhoria nos resultados de vendas.",
      skills: ["CRM/ERP", "Automação de dados", "Dashboards e BI"],
    },
  ],

  // ========== FORMAÇÃO E CERTIFICAÇÕES ==========
  education: [
    {
      id: 1,
      institution: "UniAvan",
      course: "Ciências Aeronáuticas",
      year: "2023",
      description: "Sempre tive grande interesse pela aviação, o que me levou a cursar Ciências Aeronáuticas. Embora, por questões pessoais, não tenha seguido carreira como piloto, essa trajetória me proporcionou disciplina, raciocínio analítico e capacidade de tomada de decisão em ambientes de alta responsabilidade.",
    },
    {
      id: 2,
      institution: "DevEmDobro",
      course: "DevQuest",
      year: "2025",
      description: "Curso completo de desenvolvimento web, com foco em tecnologias modernas e práticas de programação eficientes.",
    },
    {
      id: 3,
      institution: "Devops Pro",
      course: "DevOps Pro 2.0",
      year: "Cursando",
      description: "Curso avançado de DevOps, com foco em práticas de integração e entrega contínua, automação de infraestrutura e gerenciamento de ambientes de desenvolvimento.",
    },
  ],

  // ========== CONFIGURAÇÕES ==========
  settings: {
    primaryColor: "from-sky-400 to-blue-600",
    accentColor: "from-purple-400 to-pink-600",
    showAge: true,
    showStats: true,
  },
};
