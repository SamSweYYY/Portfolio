<template>
  <section id="hero" class="pt-32 pb-24 bg-gradient-to-b from-black via-violet-900 to-black text-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        
        <!-- Left content -->
        <div>
          <p class="uppercase text-violet-400 font-semibold tracking-widest mb-4">Bonjour, je suis</p>
          <h1 class="text-6xl font-bold mb-4">{{ profile.name }}</h1>
          <h2 class="text-3xl text-violet-300 mb-6">{{ profile.title }}</h2>
          <p class="text-lg text-gray-300 mb-8 leading-relaxed" style="max-width: 600px;">{{ profile.tagline }}</p>

          <div class="flex flex-wrap gap-4 mb-8">
            <a href="#projects" class="px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition">Voir mes projets</a>
            <a href="#contact" class="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition">Me contacter</a>
          </div>

          <div class="flex flex-wrap gap-3">
            <span
              v-for="tech in profile.stack"
              :key="tech"
              class="px-4 py-2 bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30 text-sm font-semibold"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Right logo -->
        <div class="hidden md:flex justify-center">
          <img 
            src="@/assets/logo.png"
            :alt="profile.name"
            style="width: 768px; height: 768px;"
            class="object-contain rounded-lg shadow-2xl"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
</script>
