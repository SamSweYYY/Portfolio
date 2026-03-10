export const profile = {
  name: "Samuel LALANNE",
  title: "Développeur Fullstack",
  tagline: "Je conçois des applications web robustes, de la base de données à l'interface utilisateur.",
  about: ``,
  stack: ["Vue.js", "Node.js", "", "", "", "REST API", "Git"],
  email: "samuel.lalanne.sl@gmail.com",
  linkedin: "https://linkedin.com/in/",
  github: "https://github.com/",
  available: true,
}
















































 export const projects = [
  {
    id: 1,
    title: "Plateforme SaaS de gestion RH",
    period: "2024 — 6 mois",
    client: "Startup B2B (série A, 40 employés)",
    context:
      "L'équipe RH gérait les congés, fiches de paie et entretiens dans 3 outils différents. Le besoin : une plateforme unique, simple et rapide à adopter.",
    role: "Lead développeur fullstack — conception de l'architecture API, développement du back Node.js/PostgreSQL, intégration front Vue.js.",
    stack: ["Vue.js 3", "Node.js", "Express", "PostgreSQL", "Docker", "JWT"],
    challenges:
      "Gestion des droits multi-rôles complexes (admin, manager, employé) et synchronisation temps réel des plannings.",
    results: [
      "–40 % de temps passé sur les tâches RH administratives",
      "Adoption par 100 % des employés en moins de 2 semaines",
      "0 incident de sécurité en 6 mois de production",
    ],
    learnings:
      "J'aurais investi plus tôt dans une couche de cache Redis pour les requêtes de planning. Appris à poser plus de questions métier avant de coder.",
    github: "https://github.com/alexandre-moreau/rh-platform",
    demo: null,
  },
  {
    id: 2,
    title: "API de recommandation e-commerce",
    period: "2023 — 3 mois",
    client: "Client e-commerce (10 000 produits)",
    context:
      "Le moteur de recherche interne donnait des résultats peu pertinents, entraînant un fort taux d'abandon. L'objectif était de personnaliser les recommandations produit.",
    role: "Développeur backend — conception et développement de l'API de recommandation, intégration dans le front existant.",
    stack: ["Node.js", "MongoDB", "Redis", "REST API", "Vue.js"],
    challenges:
      "Performances critiques : réponse < 200ms pour 5 000 requêtes/jour. Données produits mal structurées à nettoyer.",
    results: [
      "+28 % de clics sur les recommandations",
      "Temps de réponse API moyen : 120ms",
      "+12 % de panier moyen sur les sessions avec recommandations",
    ],
    learnings:
      "La qualité des données en entrée est aussi importante que l'algorithme. J'ai appris à automatiser la validation des données dès l'ingestion.",
    github: "https://github.com/alexandre-moreau/reco-api",
    demo: "https://demo.reco-api.dev",
  },
  {
    id: 3,
    title: "Dashboard analytics temps réel",
    period: "2023 — 4 mois",
    client: "Agence digitale (client retail)",
    context:
      "Les équipes marketing visualisaient leurs KPIs avec un export Excel hebdomadaire. Besoin d'un dashboard live pour piloter les campagnes au quotidien.",
    role: "Fullstack — architecture WebSocket, développement Vue.js front, back Node.js, intégration de 3 sources de données tierces.",
    stack: ["Vue.js 3", "Chart.js", "WebSocket", "Node.js", "PostgreSQL"],
    challenges:
      "Agréger des données provenant de Google Analytics, Meta Ads et Shopify en temps réel sans surcharger les APIs tierces.",
    results: [
      "Données actualisées toutes les 5 minutes (vs hebdomadaire)",
      "–60 % de temps passé à préparer les rapports",
      "Satisfaction client : 9/10 à la livraison",
    ],
    learnings:
      "Mise en place d'un système de retry et de fallback pour les APIs tierces. Crucial en production, sous-estimé en phase de développement.",
    github: null,
    demo: null,
  },
  {
    id: 4,
    title: "Application mobile PWA — réseau associatif",
    period: "2022 — 2 mois",
    client: "Association culturelle (projet bénévole)",
    context:
      "Une association de 300 membres gérait ses événements par email. Objectif : une app légère, accessible sur mobile sans passer par les stores.",
    role: "Développeur fullstack seul — conception, développement, déploiement.",
    stack: ["Vue.js 3", "Firebase", "PWA", "Firestore"],
    challenges: "Budget zéro, délai de 2 mois, accessibilité prioritaire (membres de 15 à 75 ans).",
    results: [
      "200 membres actifs le premier mois",
      "Installée sur mobile par 65 % des membres",
      "Coût d'hébergement : 0 € (Firebase Spark)",
    ],
    learnings:
      "L'accessibilité n'est pas optionnelle. J'ai retravaillé l'interface 2 fois sur retour des utilisateurs seniors. Meilleure décision du projet.",
    github: "https://github.com/alexandre-moreau/asso-pwa",
    demo: "https://asso-events.web.app",
  },
]

export const contact = {
  title: "Travaillons ensemble",
  subtitle: "Je suis disponible pour des missions freelance ou des opportunités en CDI. Répondez sous 24h.",
  calendly: "https://calendly.com/alexandre-moreau",
}
 