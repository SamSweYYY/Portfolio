export const profile = {
  name: "Samuel LALANNE",
  title: "Développeur Full Stack",
  tagline: "Étudiant en BTS SIO passionné par le développement web. Spécialisé en Vue.js, React et Node.js avec une expérience en API REST sécurisées et bases de données.",
  about: `Développeur Full Stack de 21 ans en BTS SIO. Déterminé et passionné, je m'épanouis en relevant les défis technologiques du web. Maîtrise du frontend (Vue.js, React, Tailwind) et backend (Node.js, Express, MongoDB). Compétences en sécurité web, authentification JWT et développement agile.`,
  stack: ["Vue.js", "React", "Node.js", "JavaScript", "TypeScript", "Tailwind CSS", "MongoDB", "MySQL", "Express", "API REST", "Git", "AWS"],
  email: "samuel.lalanne.sl@gmail.com",
  linkedin: "https://www.linkedin.com/in/samuel-lalanne-9096a1259/",
  github: "https://github.com/SamSweYYY",
  available: true,
}

export const projects = [
  {
    id: 1,
    title: "Plateforme de gestion des chauffeurs VTC",
    period: "10/2024 — 12/2024",
    client: "SOS SECRET R - Contrat d'apprentissage",
    context:
      "Création d'une application web complète dédiée à la gestion des chauffeurs VTC avec localisation en temps réel, système d'authentification sécurisé et CRUD complet.",
    role: "Développeur Full Stack — conception de l'interface utilisateur avec React, développement de l'API REST sécurisée (Node.js, Express), intégration Google Maps, implémentation JWT/bcrypt.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Google Maps API", "JWT", "bcrypt"],
    challenges:
      "Intégration de Google Maps pour afficher la position et disponibilité en temps réel, sécurisation avec JWT et bcrypt, gestion de mise à jour simultanée.",
    results: [
      "Application web fonctionnelle avec authentification sécurisée",
      "API REST complète avec CRUD et mises à jour temps réel",
      "Localisation précise des chauffeurs avec Google Maps",
    ],
    learnings:
      "Importance de bien structurer l'API et les droits d'accès. La sécurité JWT est critique pour les applications sensibles.",
    github: "https://github.com/SamSweYYY",
    demo: null,
    image: "./assets/portfolio-preview.png",
  },
  {
    id: 2,
    title: "Optimisation et nouvelles fonctionnalités Vue.js",
    period: "05/2024 — 07/2024",
    client: "SININKO - Stage à Paris",
    context:
      "Contribution à des applications web existantes en Vue.js. Amélioration des performances, révision du code et ajout de nouvelles fonctionnalités pour renforcer la qualité.",
    role: "Développeur Front-end — conception de nouvelles fonctionnalités, optimisation des composants Vue.js, amélioration des performances et maintenabilité.",
    stack: ["Vue.js", "JavaScript", "Trello", "Jira"],
    challenges:
      "Optimiser le code Vue.js existant sans casser les fonctionnalités. Améliorer les performances et la maintenabilité des composants.",
    results: [
      "Nouvelles fonctionnalités implémentées et validées",
      "Code Vue.js optimisé pour meilleures performances",
      "Documentation technique rédigée pour réutilisation des composants",
    ],
    learnings:
      "L'optimisation du code front est aussi importante que l'ajout de fonctionnalités. Bonne documentation = meilleure maintenabilité.",
    github: null,
    demo: null,
    image: "./assets/task-manager-preview.png",
  },
  {
    id: 3,
    title: "Clone Uber Eats",
    period: "2023 — 2 mois",
    client: "Projet personnel - Formation Web",
    context:
      "Reproduction du design et des fonctionnalités principales d'Uber Eats pour approfondir les compétences en frontend et comprendre l'architecture d'une vraie app.",
    role: "Développeur Full Stack — conception du design, développement frontend et backend, intégration des données.",
    stack: ["React", "HTML/CSS", "JavaScript", "API REST"],
    challenges:
      "Reproduire l'interface complexe d'Uber Eats, gérer les états et la navigation dynamique avec React.",
    results: [
      "Interface fidèle à Uber Eats réalisée",
      "Navigation fluide et responsive",
      "Compréhension approfondie de la structure d'une app e-commerce",
    ],
    learnings:
      "Analyser une vraie app et en reproduire les mécanismes m'a beaucoup apporté. La complexité de React vaut l'apprentissage.",
    github: "https://github.com/SamSweYYY",
    demo: null,
    image: "./assets/portfolio-preview.png",
  },
  {
    id: 4,
    title: "Jeu MasterMind en Python",
    period: "2023 — 1 mois",
    client: "Projet personnel - Formation",
    context:
      "Création du jeu classique MasterMind en Python. Objectif : maîtriser les bases de Python, les boucles, les conditions et la logique de jeu.",
    role: "Développeur — conception complète du jeu, logique de détection des codes, interface console.",
    stack: ["Python"],
    challenges:
      "Implémenter la logique correcte du jeu (détection des bonnes positions, mauvaises positions), gérer les tours du joueur.",
    results: [
      "Jeu fonctionnel et jouable",
      "Interface console claire et ergonomique",
      "Fondations solides en Python acquises",
    ],
    learnings:
      "Les bases en Python sont simples à apprendre. Faire des jeux est un excellent moyen de pratiquer la logique.",
    github: "https://github.com/SamSweYYY",
    demo: null,
    image: "./assets/portfolio-preview.png",
  },
  {
    id: 5,
    title: "Portfolio",
    period: "2026",
    client: "Personnel",
    stack: ["Vue.js", "Tailwind CSS", "Vite"],
    context: "Création d'un portfolio personnel pour présenter mes compétences et projets.",
    role: "Développeur Full Stack",
    image: "./assets/portfolio-preview.png",
    demo: "https://monportfolio.com",
    github: "https://github.com/SamSweYYY/portfolio",
  },
  {
    id: 6,
    title: "Application de gestion de tâches",
    period: "2025",
    client: "Projet scolaire",
    stack: ["React", "Node.js", "MongoDB"],
    context: "Développement d'une application pour gérer les tâches quotidiennes.",
    role: "Développeur Frontend",
    image: "./assets/task-manager-preview.png",
    demo: "https://taskmanager.com",
    github: "https://github.com/SamSweYYY/task-manager",
  },
]

export const contact = {
  title: "Parlons de votre projet",
  subtitle: "Je suis disponible pour des stages, opportunités en CDI ou missions freelance. Je réponds sous 24h.",
  calendly: "https://calendly.com/samuel-lalanne",
}
