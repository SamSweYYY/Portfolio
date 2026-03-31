import vtcImg from '../assets/vtc.png'
import mangaImg from '../assets/manga.png'
import promiseImg from '../assets/promise1.png'

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
    image: vtcImg,
  },
  {
    id: 2,
    title: "Promise — Site Vitrine d'Entreprise",
    period: "05/2024 — 07/2024",
    client: "SININKO - Stage à Paris",
    context:
      "Développement du site vitrine de l'entreprise SININKO durant mon stage. Création d'une interface moderne et responsive pour présenter les services et l'identité de la société.",
    role: "Développeur Front-end — conception de l'interface utilisateur, intégration des maquettes, développement des pages et composants Vue.js, optimisation des performances.",
    stack: ["Vue.js", "JavaScript", "Tailwind CSS", "Trello", "Jira"],
    challenges:
      "Respecter la charte graphique de l'entreprise, assurer un design responsive sur tous les supports, optimiser le temps de chargement et le référencement.",
    results: [
      "Site vitrine livré et mis en production",
      "Interface responsive et fidèle aux maquettes",
      "Performances optimisées et bonnes pratiques SEO appliquées",
    ],
    learnings:
      "Travailler en entreprise m'a appris à respecter les délais, communiquer avec l'équipe et livrer un produit conforme aux attentes du client.",
    github: null,
    demo: null,
    image: promiseImg,
  },
  {
    id: 3,
    title: "Manga Finder",
    period: "2023 — 2 mois",
    client: "Projet personnel - Formation Web",
    context:
      "Création d'un site web dédié à l'univers manga permettant de parcourir un catalogue, consulter des fiches détaillées et filtrer par genre, auteur ou statut de publication.",
    role: "Développeur Full Stack — conception UI/UX, développement frontend React, intégration d'une API manga externe, gestion des favoris utilisateur.",
    stack: ["React", "HTML/CSS", "JavaScript", "API REST"],
    challenges:
      "Intégration d'une API externe pour récupérer les données manga, mise en place d'un système de recherche et filtrage dynamique, design responsive adapté au thème manga.",
    results: [
      "Catalogue interactif avec recherche et filtres avancés",
      "Fiches manga détaillées avec synopsis, genres et notation",
      "Interface responsive au design immersif inspiré de l'univers manga",
    ],
    learnings:
      "Travailler avec des API externes demande une bonne gestion des erreurs et du loading. Le design thématique renforce l'engagement utilisateur.",
    github: "https://github.com/SamSweYYY",
    demo: null,
    image: mangaImg,
  },
]

export const contact = {
  title: "Parlons de votre projet",
  subtitle: "Je suis disponible pour des stages, opportunités en CDI ou missions freelance. Je réponds sous 24h.",
  calendly: "https://calendly.com/samuel-lalanne",
}
