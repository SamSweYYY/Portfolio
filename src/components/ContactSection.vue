<template>
  <section id="contact" class="py-24 bg-gradient-to-b from-black via-violet-900 to-black text-white">
    <div class="max-w-4xl mx-auto px-6">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold">{{ contactData.title }}</h2>
        <div class="w-20 h-1 bg-violet-500 mx-auto mt-3 mb-6"></div>
        <p class="text-gray-300 text-lg">{{ contactData.subtitle }}</p>
      </div>

      <!-- Form -->
      <div class="bg-black/40 border border-violet-500/30 rounded-xl p-8">

        <!-- Success message -->
        <div v-if="submitted" class="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-300 text-center mb-6">
          ✅ Merci ! Votre message a bien été envoyé. Je reviens vers vous sous 24h.
        </div>

        <form v-else @submit.prevent="handleSubmit" class="space-y-6">
          
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Name -->
            <div>
              <label class="block font-semibold text-white mb-2">Nom *</label>
              <input
                v-model="form.name"
                type="text"
                class="w-full px-4 py-2 bg-black/50 border border-green-500/30 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition"
                :class="errors.name ? 'border-red-500' : ''"
                placeholder="Jean Dupont"
              />
              <p v-if="errors.name" class="text-red-400 text-sm mt-1">{{ errors.name }}</p>
            </div>

            <!-- Email -->
            <div>
              <label class="block font-semibold text-white mb-2">Email *</label>
              <input
                v-model="form.email"
                type="email"
                class="w-full px-4 py-2 bg-black/50 border border-green-500/30 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition"
                :class="errors.email ? 'border-red-500' : ''"
                placeholder="jean@exemple.com"
              />
              <p v-if="errors.email" class="text-red-400 text-sm mt-1">{{ errors.email }}</p>
            </div>
          </div>

          <!-- Subject -->
          <div>
            <label class="block font-semibold text-white mb-2">Sujet *</label>
            <select
              v-model="form.subject"
              class="w-full px-4 py-2 bg-black/50 border border-green-500/30 rounded-lg text-white focus:border-green-500 focus:outline-none transition"
              :class="errors.subject ? 'border-red-500' : ''"
            >
              <option value="">Choisir un sujet...</option>
              <option value="mission">Mission freelance</option>
              <option value="cdi">Opportunité CDI</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Autre</option>
            </select>
            <p v-if="errors.subject" class="text-red-400 text-sm mt-1">{{ errors.subject }}</p>
          </div>

          <!-- Message -->
          <div>
            <label class="block font-semibold text-white mb-2">Message *</label>
            <textarea
              v-model="form.message"
              class="w-full px-4 py-2 bg-black/50 border border-green-500/30 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition resize-none"
              :class="errors.message ? 'border-red-500' : ''"
              rows="5"
              placeholder="Décrivez votre projet ou votre besoin..."
            ></textarea>
            <p v-if="errors.message" class="text-red-400 text-sm mt-1">{{ errors.message }}</p>
          </div>

          <!-- Submit button -->
          <div class="text-center pt-4">
            <button 
              type="submit" 
              class="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition text-lg"
            >
              Envoyer le message
            </button>
          </div>

        </form>
      </div>

      <!-- Alternatives -->
      <div class="grid md:grid-cols-3 gap-6 mt-12">
        
        <a :href="`mailto:${profile.email}`" class="no-underline">
          <div class="bg-black/40 border border-violet-500/30 rounded-xl p-6 text-center hover:border-violet-500 transition">
            <svg class="w-12 h-12 text-violet-400 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <p class="text-gray-400 text-sm mb-1">Email direct</p>
            <p class="text-violet-300 font-semibold text-sm break-all">{{ profile.email }}</p>
          </div>
        </a>

        <a :href="profile.linkedin" target="_blank" class="no-underline">
          <div class="bg-black/40 border border-violet-500/30 rounded-xl p-6 text-center hover:border-violet-500 transition">
            <svg class="w-12 h-12 text-violet-400 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zm-1.5-10.26c-.97 0-1.75-.78-1.75-1.74s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.74-1.75 1.74zM19 19h-3v-4.74c0-1.13-.04-2.59-1.58-2.59-1.58 0-1.82 1.24-1.82 2.52V19h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19z"/>
            </svg>
            <p class="text-gray-400 text-sm mb-1">LinkedIn</p>
            <p class="text-violet-300 font-semibold text-sm">Mon profil</p>
          </div>
        </a>

        <a :href="contactData.calendly" target="_blank" class="no-underline">
          <div class="bg-black/40 border border-violet-500/30 rounded-xl p-6 text-center hover:border-violet-500 transition">
            <svg class="w-12 h-12 text-violet-400 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v5h7v-5z"/>
            </svg>
            <p class="text-gray-400 text-sm mb-1">Calendly</p>
            <p class="text-violet-300 font-semibold text-sm">Réserver un appel</p>
          </div>
        </a>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { profile, contact as contactData } from '../data/portfolio.js'

const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function validate() {
  let valid = true

  errors.name = ''
  errors.email = ''
  errors.subject = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Le nom est requis.'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = "L'email est requis."
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Adresse email invalide.'
    valid = false
  }

  if (!form.subject) {
    errors.subject = 'Veuillez choisir un sujet.'
    valid = false
  }

  if (!form.message.trim() || form.message.length < 20) {
    errors.message = 'Le message doit contenir au moins 20 caractères.'
    valid = false
  }

  return valid
}

function handleSubmit() {
  if (validate()) {
    // Ici tu brancheras ton service d'envoi (EmailJS, Formspree, etc.)
    console.log('Formulaire soumis :', { ...form })
    submitted.value = true
  }
}
</script>
