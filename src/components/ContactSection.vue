<template>
  <section id="contact" class="py-5 bg-dark text-white">
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-lg-8">

          <div class="text-center mb-5">
            <h2 class="display-6 fw-bold">{{ contactData.title }}</h2>
            <div class="border-bottom border-success border-3 mx-auto mt-2 mb-3" style="width: 60px;"></div>
            <p class="text-secondary lead">{{ contactData.subtitle }}</p>
          </div>

          <!-- Form -->
          <div class="card bg-secondary border-0 shadow p-4 p-md-5">

            <!-- Success message -->
            <div v-if="submitted" class="alert alert-success text-center">
              ✅ Merci ! Votre message a bien été envoyé. Je reviens vers vous sous 24h.
            </div>

            <form v-else @submit.prevent="handleSubmit" novalidate>
              <div class="row g-3">

                <div class="col-md-6">
                  <label class="form-label fw-semibold text-white">Nom *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.name }"
                    placeholder="Jean Dupont"
                  />
                  <div class="invalid-feedback">{{ errors.name }}</div>
                </div>

                <div class="col-md-6">
                  <label class="form-label fw-semibold text-white">Email *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                    placeholder="jean@exemple.com"
                  />
                  <div class="invalid-feedback">{{ errors.email }}</div>
                </div>

                <div class="col-12">
                  <label class="form-label fw-semibold text-white">Sujet *</label>
                  <select
                    v-model="form.subject"
                    class="form-select"
                    :class="{ 'is-invalid': errors.subject }"
                  >
                    <option value="">Choisir un sujet...</option>
                    <option value="mission">Mission freelance</option>
                    <option value="cdi">Opportunité CDI</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Autre</option>
                  </select>
                  <div class="invalid-feedback">{{ errors.subject }}</div>
                </div>

                <div class="col-12">
                  <label class="form-label fw-semibold text-white">Message *</label>
                  <textarea
                    v-model="form.message"
                    class="form-control"
                    :class="{ 'is-invalid': errors.message }"
                    rows="5"
                    placeholder="Décrivez votre projet ou votre besoin..."
                  ></textarea>
                  <div class="invalid-feedback">{{ errors.message }}</div>
                </div>

                <div class="col-12 text-center pt-2">
                  <button type="submit" class="btn btn-success btn-lg px-5">
                    Envoyer le message
                  </button>
                </div>

              </div>
            </form>
          </div>

          <!-- Alternatives -->
          <div class="row text-center mt-4 g-3">
            <div class="col-md-4">
              <a :href="`mailto:${profile.email}`" class="text-decoration-none text-light">
                <div class="p-3">
                  <p class="mb-1 fs-4">📧</p>
                  <p class="small mb-0 text-secondary">Email direct</p>
                  <p class="small">{{ profile.email }}</p>
                </div>
              </a>
            </div>
            <div class="col-md-4">
              <a :href="profile.linkedin" target="_blank" class="text-decoration-none text-light">
                <div class="p-3">
                  <p class="mb-1 fs-4">💼</p>
                  <p class="small mb-0 text-secondary">LinkedIn</p>
                  <p class="small">Mon profil</p>
                </div>
              </a>
            </div>
            <div class="col-md-4">
              <a :href="contactData.calendly" target="_blank" class="text-decoration-none text-light">
                <div class="p-3">
                  <p class="mb-1 fs-4">📅</p>
                  <p class="small mb-0 text-secondary">Calendly</p>
                  <p class="small">Réserver un appel</p>
                </div>
              </a>
            </div>
          </div>

        </div>
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
