<template>
<section id="about" class="py-24 bg-gradient-to-b from-black via-violet-900 to-violet-800">

<div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

  <!-- Colonne gauche -->
  <div>

    <h2 class="text-4xl font-bold text-white">
      À propos
    </h2>

    <div class="w-20 h-1 bg-violet-500 mt-3 mb-8"></div>

    <div class="space-y-6 text-gray-300">

      <div>
        <p class="text-sm text-gray-400">Email</p>
        <a :href="`mailto:${profile.email}`" class="hover:text-violet-400 transition">
          {{ profile.email }}
        </a>
      </div>

      <div>
        <p class="text-sm text-gray-400">LinkedIn</p>
        <a :href="profile.linkedin" target="_blank" class="hover:text-violet-400 transition">
          Voir le profil
        </a>
      </div>

      <div>
        <p class="text-sm text-gray-400">GitHub</p>
        <a :href="profile.github" target="_blank" class="hover:text-violet-400 transition">
          Voir les repos
        </a>
      </div>

      <div>
        <p class="text-sm text-gray-400">Disponibilité</p>

        <span class="inline-block mt-1 px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400">
          Disponible pour missions
        </span>

      </div>

    </div>

  </div>


  <!-- Colonne droite -->
  <div>

    <p class="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
      {{ profile.about }}
    </p>

    <!-- Stats -->
    <div class="grid grid-cols-3 gap-6 mt-10 text-center">

      <div class="bg-black/40 border border-green-500/30 rounded-xl p-6">

        <p class="text-4xl font-bold text-green-400">
          3+
        </p>

        <p class="text-sm text-gray-400 mt-1">
          Années d'expérience
        </p>

      </div>

      <div class="bg-black/40 border border-green-500/30 rounded-xl p-6">

        <p class="text-4xl font-bold text-green-400">
          5+
        </p>

        <p class="text-sm text-gray-400 mt-1">
          Projets livrés
        </p>

      </div>
    </div>

  </div>

</div>

</section>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
</script>