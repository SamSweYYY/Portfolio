<template>
  <div class="card h-100 shadow-sm border-0">
    <div class="card-body p-4">

      <!-- Header -->
      <div class="d-flex justify-content-between align-items-start mb-3">
        <div>
          <h3 class="h5 fw-bold mb-1">{{ project.title }}</h3>
          <p class="text-muted small mb-0">{{ project.period }} · {{ project.client }}</p>
        </div>
        <div class="d-flex gap-2">
          <a v-if="project.github" :href="project.github" target="_blank" class="btn btn-sm btn-outline-secondary">GitHub</a>
          <a v-if="project.demo" :href="project.demo" target="_blank" class="btn btn-sm btn-success">Demo</a>
        </div>
      </div>

      <!-- Stack badges -->
      <div class="d-flex flex-wrap gap-1 mb-3">
        <span v-for="tech in project.stack" :key="tech" class="badge bg-light text-dark border">{{ tech }}</span>
      </div>

      <!-- Case study sections -->
      <div class="accordion accordion-flush" :id="`accordion-${project.id}`">

        <!-- Contexte -->
        <div class="accordion-item border rounded mb-2">
          <h4 class="accordion-header">
            <button class="accordion-button collapsed fw-semibold py-2 px-3" type="button"
              data-bs-toggle="collapse" :data-bs-target="`#context-${project.id}`">
              🎯 Contexte & problème
            </button>
          </h4>
          <div :id="`context-${project.id}`" class="accordion-collapse collapse">
            <div class="accordion-body py-2 px-3">
              <p class="mb-1">{{ project.context }}</p>
              <p class="mb-0 text-muted small"><strong>Mon rôle :</strong> {{ project.role }}</p>
            </div>
          </div>
        </div>

        <!-- Défis -->
        <div class="accordion-item border rounded mb-2">
          <h4 class="accordion-header">
            <button class="accordion-button collapsed fw-semibold py-2 px-3" type="button"
              data-bs-toggle="collapse" :data-bs-target="`#challenges-${project.id}`">
              ⚡ Défis techniques
            </button>
          </h4>
          <div :id="`challenges-${project.id}`" class="accordion-collapse collapse">
            <div class="accordion-body py-2 px-3">
              <p class="mb-0">{{ project.challenges }}</p>
            </div>
          </div>
        </div>

        <!-- Résultats -->
        <div class="accordion-item border rounded mb-2">
          <h4 class="accordion-header">
            <button class="accordion-button collapsed fw-semibold py-2 px-3" type="button"
              data-bs-toggle="collapse" :data-bs-target="`#results-${project.id}`">
              📈 Résultats mesurables
            </button>
          </h4>
          <div :id="`results-${project.id}`" class="accordion-collapse collapse">
            <div class="accordion-body py-2 px-3">
              <ul class="mb-0 ps-3">
                <li v-for="result in project.results" :key="result" class="mb-1 text-success fw-semibold">
                  {{ result }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Apprentissages -->
        <div class="accordion-item border rounded">
          <h4 class="accordion-header">
            <button class="accordion-button collapsed fw-semibold py-2 px-3" type="button"
              data-bs-toggle="collapse" :data-bs-target="`#learnings-${project.id}`">
              💡 Ce que j'en retiens
            </button>
          </h4>
          <div :id="`learnings-${project.id}`" class="accordion-collapse collapse">
            <div class="accordion-body py-2 px-3">
              <p class="mb-0 fst-italic">{{ project.learnings }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
