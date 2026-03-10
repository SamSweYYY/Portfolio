<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#hero">
        {{ profile.name }}
        <span v-if="profile.available" class="badge bg-success ms-2 fs-6">Disponible</span>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about">À propos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projets</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
          <li class="nav-item ms-lg-3">
            <a class="btn btn-outline-light btn-sm" :href="profile.github" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
</script>
