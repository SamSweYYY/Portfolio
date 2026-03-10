<template>
  <div class="bg-black/40 border border-violet-500/30 rounded-xl p-6">

    <!-- Header -->
    <div class="flex justify-between items-start mb-4">
      <div>
        <h3 class="text-xl font-bold text-white mb-1">{{ project.title }}</h3>
        <p class="text-gray-400 text-sm">{{ project.period }} · {{ project.client }}</p>
      </div>
      <div class="flex gap-2">
        <a v-if="project.github" :href="project.github" target="_blank" class="px-3 py-1 text-sm border border-slate-600 rounded-lg text-white hover:bg-white hover:text-black transition">GitHub</a>
        <a v-if="project.demo" :href="project.demo" target="_blank" class="px-3 py-1 text-sm bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">Demo</a>
      </div>
    </div>

    <!-- Stack badges -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span v-for="tech in project.stack" :key="tech" class="px-3 py-1 text-xs font-semibold bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30">{{ tech }}</span>
    </div>

    <!-- Accordéon sections -->
    <div class="space-y-3">

      <!-- Contexte -->
      <div class="border border-violet-500/20 rounded-lg overflow-hidden">
        <button
          @click="expanded.context = !expanded.context"
          class="w-full flex justify-between items-center p-4 bg-black/50 hover:bg-black/70 transition font-semibold text-white"
        >
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S15.33 8 14.5 8 13 8.67 13 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S8.33 8 7.5 8 6 8.67 6 9.5 6.67 11 7.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
            Contexte & problème
          </div>
          <span :class="expanded.context ? 'rotate-180' : ''" class="transition">▼</span>
        </button>
        <div v-if="expanded.context" class="p-4 bg-black/20 text-gray-300 space-y-2">
          <p>{{ project.context }}</p>
          <p class="text-gray-400 text-sm"><strong>Mon rôle :</strong> {{ project.role }}</p>
        </div>
      </div>

      <!-- Défis -->
      <div class="border border-green-500/20 rounded-lg overflow-hidden">
        <button
          @click="expanded.challenges = !expanded.challenges"
          class="w-full flex justify-between items-center p-4 bg-black/50 hover:bg-black/70 transition font-semibold text-white"
        >
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Défis techniques
          </div>
          <span :class="expanded.challenges ? 'rotate-180' : ''" class="transition">▼</span>
        </button>
        <div v-if="expanded.challenges" class="p-4 bg-black/20 text-gray-300">
          {{ project.challenges }}
        </div>
      </div>

      <!-- Résultats -->
      <div class="border border-violet-500/20 rounded-lg overflow-hidden">
        <button
          @click="expanded.results = !expanded.results"
          class="w-full flex justify-between items-center p-4 bg-black/50 hover:bg-black/70 transition font-semibold text-white"
        >
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
            Résultats mesurables
          </div>
          <span :class="expanded.results ? 'rotate-180' : ''" class="transition">▼</span>
        </button>
        <div v-if="expanded.results" class="p-4 bg-black/20">
          <ul class="list-disc list-inside space-y-1 text-violet-400">
            <li v-for="result in project.results" :key="result">
              {{ result }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Apprentissages -->
      <div class="border border-violet-500/20 rounded-lg overflow-hidden">
        <button
          @click="expanded.learnings = !expanded.learnings"
          class="w-full flex justify-between items-center p-4 bg-black/50 hover:bg-black/70 transition font-semibold text-white"
        >
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
            </svg>
            Ce que j'en retiens
          </div>
          <span :class="expanded.learnings ? 'rotate-180' : ''" class="transition">▼</span>
        </button>
        <div v-if="expanded.learnings" class="p-4 bg-black/20 text-gray-300 italic">
          {{ project.learnings }}
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const expanded = ref({
  context: false,
  challenges: false,
  results: false,
  learnings: false,
})
</script>
