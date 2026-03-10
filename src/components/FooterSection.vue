<template>
  <footer class="bg-black border-t border-violet-500/30 py-8 text-center">
    <div class="max-w-6xl mx-auto px-6">
      <p class="mb-3 text-gray-400 text-sm">
        © {{ new Date().getFullYear() }} {{ profile.name }} · Développeur Fullstack
      </p>
      <p class="mb-0 text-gray-400 text-sm space-x-4">
        <a :href="profile.github" target="_blank" class="hover:text-violet-400 transition inline-block">GitHub</a>
        <span class="text-gray-600">·</span>
        <a :href="profile.linkedin" target="_blank" class="hover:text-violet-400 transition inline-block">LinkedIn</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
</script>
