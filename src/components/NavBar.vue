<template>
  <nav class="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="flex items-center justify-between h-16">

        <!-- Logo / Name -->
        <a href="#hero" class="text-xl font-bold text-white flex items-center gap-2">
          {{ profile.name }}

          <span
            v-if="profile.available"
            class="px-2 py-1 text-xs font-semibold text-emerald-300 bg-emerald-500/20 rounded-full border border-emerald-500/30"
          >
            Disponible
          </span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8 text-sm font-medium">

          <a href="#about" class="text-gray-400 hover:text-cyan-400 transition">
            Qui suis-je
          </a>

          <a href="#projects" class="text-gray-400 hover:text-cyan-400 transition">
            Projets
          </a>

          <a href="#contact" class="text-gray-400 hover:text-cyan-400 transition">
            Contact
          </a>

          <a
            :href="profile.github"
            target="_blank"
            class="px-4 py-2 border border-cyan-500/40 rounded-lg text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition font-semibold"
          >
            GitHub
          </a>

        </div>

        <!-- Mobile Button -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden text-white"
        >
          ☰
        </button>

      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="md:hidden py-4 space-y-4 text-center">

        <a href="#about" class="block text-gray-400 hover:text-cyan-400">
          Qui suis-je
        </a>

        <a href="#projects" class="block text-gray-400 hover:text-cyan-400">
          Projets
        </a>

        <a href="#contact" class="block text-gray-400 hover:text-cyan-400">
          Contact
        </a>

        <a
          :href="profile.github"
          target="_blank"
          class="inline-block px-4 py-2 border border-cyan-500/40 rounded-lg text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition"
        >
          GitHub
        </a>

      </div>

    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue"
import { profile } from "../data/portfolio.js"

const menuOpen = ref(false)
</script>