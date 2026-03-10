<script setup>
import { personSchema, organizationSchema, websiteSchema } from '../data/schema.js'

// Injecter les schémas JSON-LD dans le head
if (typeof document !== 'undefined') {
  // Person Schema
  const personScript = document.createElement('script')
  personScript.type = 'application/ld+json'
  personScript.innerHTML = JSON.stringify(personSchema)
  document.head.appendChild(personScript)

  // Organization Schema
  const orgScript = document.createElement('script')
  orgScript.type = 'application/ld+json'
  orgScript.innerHTML = JSON.stringify(organizationSchema)
  document.head.appendChild(orgScript)

  // Website Schema
  const webScript = document.createElement('script')
  webScript.type = 'application/ld+json'
  webScript.innerHTML = JSON.stringify(websiteSchema)
  document.head.appendChild(webScript)
}
</script>

<template>
  <!-- Composant vide - les scripts JSON-LD sont injectés dans le setup -->
</template>
