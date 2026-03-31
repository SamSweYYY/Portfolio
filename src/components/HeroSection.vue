<template>
  <section id="hero" class="relative pt-32 pb-24 bg-slate-950 text-white overflow-hidden">
    <!-- Background glow effects -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
    
    <div class="relative max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        
        <!-- Left content -->
        <div>
          <p class="uppercase text-cyan-400 font-semibold tracking-widest mb-4">Bonjour, je suis</p>
          <h1 class="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">{{ profile.name }}</h1>
          <h2 class="text-3xl text-cyan-300/80 mb-6">{{ profile.title }}</h2>
          <p class="text-lg text-gray-400 mb-8 leading-relaxed" style="max-width: 600px;">{{ profile.tagline }}</p>

          <div class="flex flex-wrap gap-4 mb-8">
            <a href="#projects" class="px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/25">Voir mes projets</a>
            <a href="#contact" class="px-6 py-3 border border-cyan-500/40 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition">Me contacter</a>
          </div>
        </div>

        <!-- Right logo -->
        <div class="hidden md:flex justify-center">
          <div class="relative">
            <div class="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl scale-75"></div>
            <img 
              src="@/assets/logo.png"
              :alt="profile.name"
              style="width: 768px; height: 768px;"
              class="relative object-contain rounded-lg"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
</script>
