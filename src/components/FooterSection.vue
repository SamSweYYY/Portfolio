<template>
  <footer class="bg-slate-950 border-t border-white/10 py-8 text-center">
    <div class="max-w-6xl mx-auto px-6">
      <p class="mb-3 text-gray-500 text-sm">
        © {{ new Date().getFullYear() }} {{ profile.name }} · Développeur Fullstack
      </p>
      <p class="mb-0 text-gray-500 text-sm space-x-4">
        <a :href="profile.github" target="_blank" class="hover:text-cyan-400 transition inline-block">GitHub</a>
        <span class="text-gray-700">·</span>
        <a :href="profile.linkedin" target="_blank" class="hover:text-cyan-400 transition inline-block">LinkedIn</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
</script>
