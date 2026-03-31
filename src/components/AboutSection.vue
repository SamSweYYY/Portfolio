<template>
<section id="about" class="relative py-24 bg-slate-950">
  <!-- Background glow -->
  <div class="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2"></div>
  <div class="absolute bottom-0 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>

  <div class="relative max-w-6xl mx-auto px-6">

    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-white">Qui suis-je</h2>
      <div class="w-20 h-1 bg-cyan-500 mx-auto mt-3 mb-6"></div>
    </div>

    <!-- Bio card -->
    <div class="backdrop-blur-xl bg-white/5 border border-cyan-500/15 rounded-2xl p-8 mb-12">
      <p class="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
        {{ profile.about }}
      </p>
    </div>

    <!-- Links row -->
    <div class="grid md:grid-cols-3 gap-6">
      <a :href="`mailto:${profile.email}`" class="group backdrop-blur-xl bg-white/5 border border-cyan-500/15 rounded-xl p-5 flex items-center gap-4 hover:border-cyan-500/40 transition no-underline">
        <div class="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
        <div>
          <p class="text-xs text-gray-500">Email</p>
          <p class="text-cyan-300 font-medium text-sm group-hover:text-cyan-200 transition break-all">{{ profile.email }}</p>
        </div>
      </a>

      <a :href="profile.linkedin" target="_blank" class="group backdrop-blur-xl bg-white/5 border border-cyan-500/15 rounded-xl p-5 flex items-center gap-4 hover:border-cyan-500/40 transition no-underline">
        <div class="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zm-1.5-10.26c-.97 0-1.75-.78-1.75-1.74s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.74-1.75 1.74zM19 19h-3v-4.74c0-1.13-.04-2.59-1.58-2.59-1.58 0-1.82 1.24-1.82 2.52V19h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19z"/>
          </svg>
        </div>
        <div>
          <p class="text-xs text-gray-500">LinkedIn</p>
          <p class="text-cyan-300 font-medium text-sm group-hover:text-cyan-200 transition">Voir le profil</p>
        </div>
      </a>

      <a :href="profile.github" target="_blank" class="group backdrop-blur-xl bg-white/5 border border-cyan-500/15 rounded-xl p-5 flex items-center gap-4 hover:border-cyan-500/40 transition no-underline">
        <div class="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </div>
        <div>
          <p class="text-xs text-gray-500">GitHub</p>
          <p class="text-cyan-300 font-medium text-sm group-hover:text-cyan-200 transition">Voir les repos</p>
        </div>
      </a>
    </div>

  </div>
</section>
</template>

<script setup>
import { profile } from '../data/portfolio.js'
</script>