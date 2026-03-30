<template>
  <section id="projects" class="py-24 bg-linear-to-b from-violet-800 via-black to-black">
    <div class="max-w-6xl mx-auto px-6">

      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white">Projets</h2>
        <div class="w-20 h-1 bg-violet-500 mx-auto mt-3 mb-6"></div>
        <p class="text-gray-300 text-lg">
          Chaque projet est présenté comme un cas d'étude : contexte, rôle, défis techniques et résultats mesurables.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
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
