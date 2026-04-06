// Structured Data for SEO - Schema.org
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Samuel LALANNE",
  "url": "https://samuellalanne.com",
  "jobTitle": "Développeur Full Stack",
  "email": "samuel.lalanne.sl@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/samuel-lalanne-9096a1259/",
    "https://github.com/SamSweYYY"
  ],
  "image": "https://samuellalanne.com/src/assets/logo.png",
  "description": "Développeur Full Stack spécialisé en Vue.js, React et Node.js"
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Samuel LALANNE Portfolio",
  "url": "https://samuellalanne.com",
  "logo": "https://samuellalanne.com/src/assets/logo.png",
  "description": "Portfolio professionnel de développement web",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "samuel.lalanne.sl@gmail.com"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Samuel LALANNE - Portfolio",
  "url": "https://samuellalanne.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://samuellalanne.com?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
