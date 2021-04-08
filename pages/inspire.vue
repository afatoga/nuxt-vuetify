<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <h1 v-html="title"></h1>
      <div v-html="content"></div>
      <!-- <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote> -->
    </v-col>
  </v-row>
</template>

<script>
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { requestsMixin } from "~/mixins/requestsMixin";

export default {
  mixins: [requestsMixin],
  name: "Inspire",
  // props: ["resourceName"],

  data: () => ({
    title: null,
    content: null
  }),

  methods: {
    async getPageContent() {
      const { data } = await this.getPages();
      this.title = data[0].title.rendered;
      this.content = data[0].content.rendered;
    }
  },
  beforeMount() {
    this.getPageContent();
  },
  mounted() {
    //.then(res => res.json())
  }
};
</script>
