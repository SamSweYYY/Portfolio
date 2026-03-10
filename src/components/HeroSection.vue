<template>
  <section id="hero" class="py-5 bg-dark text-white">
    <div class="container py-5">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <p class="text-uppercase text-success fw-semibold letter-spacing mb-2">Bonjour, je suis</p>
          <h1 class="display-3 fw-bold mb-3">{{ profile.name }}</h1>
          <h2 class="h3 text-secondary mb-4">{{ profile.title }}</h2>
          <p class="lead mb-5" style="max-width: 600px;">{{ profile.tagline }}</p>

          <div class="d-flex flex-wrap gap-3 mb-5">
            <a href="#projects" class="btn btn-success btn-lg px-4">Voir mes projets</a>
            <a href="#contact" class="btn btn-outline-light btn-lg px-4">Me contacter</a>
          </div>

          <div class="d-flex flex-wrap gap-2">
            <span
              v-for="tech in profile.stack"
              :key="tech"
              class="badge bg-secondary fs-6 fw-normal px-3 py-2"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="col-lg-4 mt-5 mt-lg-0 text-center">
          <div class="rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center"
               style="width: 220px; height: 220px; font-size: 5rem;">
            👨‍💻
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
</script>
