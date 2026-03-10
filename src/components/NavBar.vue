<template>
  <nav class="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="flex items-center justify-between h-16">

        <!-- Logo / Name -->
        <a href="#hero" class="text-xl font-bold text-white flex items-center gap-2">
          {{ profile.name }}

          <span
            v-if="profile.available"
            class="px-2 py-1 text-xs font-semibold text-green-300 bg-green-500/20 rounded-full"
          >
            Disponible
          </span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8 text-sm font-medium">

          <a href="#about" class="text-gray-300 hover:text-white transition">
            À propos
          </a>

          <a href="#projects" class="text-gray-300 hover:text-white transition">
            Projets
          </a>

          <a href="#contact" class="text-gray-300 hover:text-white transition">
            Contact
          </a>

          <a
            :href="profile.github"
            target="_blank"
            class="px-4 py-2 border border-slate-600 rounded-lg text-white hover:bg-white hover:text-black transition"
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

        <a href="#about" class="block text-gray-300 hover:text-white">
          À propos
        </a>

        <a href="#projects" class="block text-gray-300 hover:text-white">
          Projets
        </a>

        <a href="#contact" class="block text-gray-300 hover:text-white">
          Contact
        </a>

        <a
          :href="profile.github"
          target="_blank"
          class="inline-block px-4 py-2 border border-slate-600 rounded-lg text-white hover:bg-white hover:text-black transition"
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