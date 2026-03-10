// Structured Data for SEO - Schema.org
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Samuel LALANNE",
  "url": "https://samuel-lalanne.dev",
  "jobTitle": "Développeur Full Stack",
  "email": "samuel.lalanne.sl@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/samuel-lalanne-9096a1259/",
    "https://github.com/SamSweYYY"
  ],
  "image": "https://samuel-lalanne.dev/src/assets/logo.png",
  "description": "Développeur Full Stack spécialisé en Vue.js, React et Node.js"
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Samuel LALANNE Portfolio",
  "url": "https://samuel-lalanne.dev",
  "logo": "https://samuel-lalanne.dev/src/assets/logo.png",
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
  "url": "https://samuel-lalanne.dev",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://samuel-lalanne.dev?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
