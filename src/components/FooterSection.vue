<template>
  <footer class="bg-dark border-top border-secondary py-4 text-center text-secondary">
    <div class="container">
      <p class="mb-1 small">
        © {{ new Date().getFullYear() }} {{ profile.name }} · Développeur Fullstack
      </p>
      <p class="mb-0 small">
        <a :href="profile.github" target="_blank" class="text-secondary me-3">GitHub</a>
        <a :href="profile.linkedin" target="_blank" class="text-secondary">LinkedIn</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
</script>
