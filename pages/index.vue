<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <!-- <logo />
        <vuetify-logo /> -->
      </div>
      <v-card>
        <v-card-title class="headline">
          Kalkulačka
        </v-card-title>
        <v-card-text>
<form @submit.prevent="submit">
  <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
    <!-- <label class="form__label">Name</label> -->
     <v-text-field
      label="Name"
      hide-details="auto"
      class="form__input mb-2" v-model.trim="$v.name.$model"
    ></v-text-field>
    <!-- <input class="form__input" v-model.trim="$v.name.$model"/> -->
  </div>
  <p
    class="red--text text--lighten-2"
    outlined
    v-if="!$v.name.required && submitStatus"
  >
  Name is required
  </p>
  <p
    class="red--text text--lighten-2"
    outlined
    v-if="!$v.name.minLength"
  >
   Name must have at least {{$v.name.$params.minLength.min}} letters.
  </p>

  <!-- <v-alert
      text
      dense
      border="top"
      color="red lighten-2"
      outlined
      v-if="!$v.name.required && submitStatus"
    >
      Name is required
    </v-alert> -->
    <!-- <v-alert
      text
      dense
      border="top"
      color="red lighten-2"
      outlined
      v-if="!$v.name.minLength"
    >
      Name must have at least {{$v.name.$params.minLength.min}} letters.
    </v-alert> -->
  
  <v-btn
            color="primary"
             type="submit" :disabled="submitStatus === 'PENDING'"
          >
            Hledat
          </v-btn>

  <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
  <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
  <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
</form>


          <!-- <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a> -->
        </v-card-text>
        <v-card-actions>
          <!-- <v-spacer />
           <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      name: '',
      age: 0,
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>
