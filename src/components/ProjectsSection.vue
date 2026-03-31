<template>
  <section id="projects" class="relative py-24 bg-slate-950">
    <!-- Background glow -->
    <div class="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto px-6">

      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white">Projets</h2>
        <div class="w-20 h-1 bg-cyan-500 mx-auto mt-3 mb-6"></div>
        <p class="text-gray-400 text-lg">
          Chaque projet est présenté comme un cas d'étude : contexte, rôle, défis techniques et résultats mesurables.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/portfolio.js';
import ProjectCard from './ProjectCard.vue';
</script>
