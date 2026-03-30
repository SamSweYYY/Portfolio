<template>
  <div class="bg-black/40 border border-violet-500/30 rounded-xl p-6">

    <!-- Image Preview -->
    <div v-if="project.image" class="mb-4">
      <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover rounded-lg" />
    </div>

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

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const expanded = reactive({ context: false });
</script>
