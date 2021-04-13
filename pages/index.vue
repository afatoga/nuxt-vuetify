<template>
  <div>
    <div class="p-0">
      <v-carousel
        cycle
        hide-delimiter-background
        show-arrows-on-hover
        hide-delimiters
      >
        <v-carousel-item
          v-for="(item, i) in slideshowPictures"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <v-row no-gutters justify="center" class="mt-md-8">
      <v-col sm="10" md="11" lg="8"> <!-- cols="12"-->
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6" class="mt-4">
            <p
              class="text-justify text-h6 blue-grey--text text--darken-2 font-weight-regular px-4 px-sm-0 px-md-6"
            >
              Vítr skoro nefouká a tak by se na první pohled mohlo zdát,
              že&nbsp;se balónky snad vůbec nepohybují. Jenom tak klidně
              levitují ve&nbsp;vzduchu.
            </p>
          </v-col>
          <v-col cols="12" sm="8" md="6">
            <v-card>
              <v-card-title class="headline">Kalkulačka</v-card-title>
              <v-card-text>
                <form @submit.prevent="submit">
                  <div
                    class="form-group"
                    :class="{ 'form-group--error': $v.name.$error }"
                  >
                    <!-- <label class="form__label">Name</label> -->
                    <v-text-field
                      label="Name"
                      hide-details="auto"
                      class="form__input mb-2"
                      v-model.trim="$v.name.$model"
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
                    Name must have at least
                    {{ $v.name.$params.minLength.min }} letters.
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
                  <div class="mt-4">
                    <v-btn
                      color="cyan lighten-4"
                      type="submit"
                      :disabled="submitStatus === 'PENDING'"
                    >
                      Počítat
                    </v-btn>

                    <div class="block mt-2">
                      <p class="typo__p" v-if="submitStatus === 'OK'">
                        Thanks for your submission!
                      </p>
                      <p class="typo__p" v-if="submitStatus === 'ERROR'">
                        Please fill the form correctly.
                      </p>
                      <p class="typo__p" v-if="submitStatus === 'PENDING'">
                        Sending...
                      </p>
                    </div>
                  </div>
                </form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
  data() {
    return {
      name: "",
      age: 0,
      submitStatus: null,
      slideshowPictures: [
        {
          src:
            "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg",
        },
        { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf" },
        { src: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11" },
      ],
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
  },
  methods: {
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>
