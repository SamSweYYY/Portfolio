<template>
  <section id="about" class="py-5">
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h2 class="display-6 fw-bold">À propos</h2>
          <div class="border-bottom border-success border-3 w-25 mt-2 mb-4"></div>
          <div class="d-flex flex-column gap-3">
            <div>
              <p class="text-muted mb-1 small">Email</p>
              <a :href="`mailto:${profile.email}`" class="text-decoration-none">{{ profile.email }}</a>
            </div>
            <div>
              <p class="text-muted mb-1 small">LinkedIn</p>
              <a :href="profile.linkedin" target="_blank" class="text-decoration-none">Voir le profil</a>
            </div>
            <div>
              <p class="text-muted mb-1 small">GitHub</p>
              <a :href="profile.github" target="_blank" class="text-decoration-none">Voir les repos</a>
            </div>
            <div>
              <p class="text-muted mb-1 small">Disponibilité</p>
              <span class="badge bg-success">Disponible pour missions</span>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <p class="lead" style="white-space: pre-line;">{{ profile.about }}</p>

          <div class="row mt-4 g-3 text-center">
            <div class="col-4">
              <div class="border rounded p-3">
                <p class="display-6 fw-bold text-success mb-0">5+</p>
                <p class="text-muted small mb-0">Années d'expérience</p>
              </div>
            </div>
            <div class="col-4">
              <div class="border rounded p-3">
                <p class="display-6 fw-bold text-success mb-0">20+</p>
                <p class="text-muted small mb-0">Projets livrés</p>
              </div>
            </div>
            <div class="col-4">
              <div class="border rounded p-3">
                <p class="display-6 fw-bold text-success mb-0">12+</p>
                <p class="text-muted small mb-0">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
</script>
