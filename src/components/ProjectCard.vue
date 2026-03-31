<template>
  <div class="group backdrop-blur-xl bg-white/5 border border-cyan-500/15 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">

    <!-- Image Preview -->
    <div v-if="project.image" class="overflow-hidden">
      <a :href="project.demo || project.github || '#'" :target="project.demo || project.github ? '_blank' : '_self'">
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
      </a>
    </div>

    <div class="p-6">
      <!-- Header -->
      <div class="flex justify-between items-start mb-4">
        <div>
          <h3 class="text-lg font-bold text-white mb-1">{{ project.title }}</h3>
          <p class="text-gray-500 text-sm">{{ project.period }} · {{ project.client }}</p>
        </div>
        <div class="flex gap-2">
          <a v-if="project.github" :href="project.github" target="_blank" class="px-3 py-1 text-xs border border-cyan-500/30 rounded-lg text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition font-medium">GitHub</a>
          <a v-if="project.demo" :href="project.demo" target="_blank" class="px-3 py-1 text-xs bg-cyan-500 text-slate-950 rounded-lg hover:bg-cyan-400 transition font-semibold">Demo</a>
        </div>
      </div>

      <!-- Stack badges -->
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span v-for="tech in project.stack" :key="tech" class="px-2.5 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-300/80 rounded-full border border-cyan-500/15">{{ tech }}</span>
      </div>

      <!-- Accordéon sections -->
      <div class="space-y-3">

        <!-- Contexte -->
        <div class="border border-white/10 rounded-lg overflow-hidden">
          <button
            @click="expanded.context = !expanded.context"
            class="w-full flex justify-between items-center p-3 bg-white/5 hover:bg-white/10 transition text-sm font-semibold text-white"
          >
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              Contexte & rôle
            </div>
            <span :class="expanded.context ? 'rotate-180' : ''" class="transition text-cyan-400 text-xs">▼</span>
          </button>
          <div v-if="expanded.context" class="p-3 bg-white/[0.02] text-gray-400 space-y-2 text-sm">
            <p>{{ project.context }}</p>
            <p class="text-gray-500 text-xs"><strong class="text-gray-400">Mon rôle :</strong> {{ project.role }}</p>
          </div>
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
