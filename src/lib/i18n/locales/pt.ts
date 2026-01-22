import type { Translations } from "./en";

export const pt: Translations = {
  nav: {
    home: "Inicio",
    techStack: "Tech Stack",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    greeting: "Ola!",
    intro: "Eu sou",
    sequences: [
      "Criando Experiencias Digitais",
      "Transformando Ideias em Realidade",
      "Construindo Solucoes Escalaveis",
      "Desenvolvedor Full Stack",
      "Engenheiro de Software",
    ],
  },
  techStack: {
    title: "Minha stack",
    subtitle: "Tecnologias que tenho trabalhado e estudado recentemente",
    sections: {
      languages: "Principais Linguagens e Plataformas",
      frontend: "Principais Tecnologias Frontend",
      infrastructure: "Principais Tecnologias de Infraestrutura",
      databases: "Tecnologias de Persistencia e SGBDs",
      backend: "Frameworks Backend",
      git: "Repositorios Cloud e Ferramentas Git",
      agility: "Agilidade e Documentacao",
      editors: "Editores de Texto Favoritos",
    },
  },
  experience: {
    title: "Experiencia Profissional",
    subtitle: "Minha jornada na industria de tecnologia",
    current: "Atual",
  },
  projects: {
    title: "Projetos",
    subtitle:
      "Uma colecao de projetos e estudos demonstrando diferentes tecnologias, arquiteturas e abordagens de resolucao de problemas",
    showing: "Mostrando",
    of: "de",
    projectsLabel: "projetos",
  },
  contact: {
    title: "Entre em Contato",
    subtitle:
      "Sinta-se a vontade para entrar em contato para discussoes tecnicas, colaboracoes ou apenas para conectar.",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "seu.email@exemplo.com",
      subject: "Assunto",
      subjectPlaceholder: "Sobre o que voce gostaria de conversar?",
      message: "Mensagem",
      messagePlaceholder: "Sua mensagem...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      sent: "Enviado!",
    },
    validation: {
      nameRequired: "Nome e obrigatorio",
      nameMin: "Nome deve ter pelo menos 2 caracteres",
      emailRequired: "Email e obrigatorio",
      emailInvalid: "Email invalido",
      subjectRequired: "Assunto e obrigatorio",
      messageRequired: "Mensagem e obrigatoria",
      messageMin: "Mensagem deve ter pelo menos 10 caracteres",
    },
    toast: {
      validationError: "Erro de validacao",
      validationDescription:
        "Por favor, preencha todos os campos corretamente.",
      successTitle: "Mensagem enviada!",
      successDescription: "Obrigado pelo contato. Responderei em breve!",
      errorTitle: "Erro ao enviar mensagem",
      errorDescription:
        "Ocorreu um erro. Por favor, tente novamente ou entre em contato diretamente por email.",
    },
    status: {
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar. Por favor, tente novamente.",
    },
    info: {
      title: "Informacoes",
      email: "Email",
      location: "Localizacao",
      locationValue: "Brasil",
    },
    social: {
      title: "Redes Sociais",
    },
  },
};
