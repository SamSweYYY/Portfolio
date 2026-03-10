<template>
  <section id="projects" class="py-5 bg-light">
    <div class="container py-4">

      <div class="text-center mb-5">
        <h2 class="display-6 fw-bold">Projets</h2>
        <div class="border-bottom border-success border-3 mx-auto mt-2 mb-3" style="width: 60px;"></div>
        <p class="text-muted lead">
          Chaque projet est présenté comme un cas d'étude : contexte, rôle, défis techniques et résultats mesurables.
        </p>
      </div>

      <div class="row g-4">
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-lg-6"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.vue'
</script>
