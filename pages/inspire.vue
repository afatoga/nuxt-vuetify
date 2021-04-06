<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <h1 v-html="title"></h1>
      <div v-html="content">
      </div>
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
import axios from "axios"
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {

  name: "Inspire",
  // props: ["resourceName"],

   data: () => ({
    title: null,
    content: null
  }),

  methods: {
    prepareOutput: function(data) {
      this.title = data[0].title.rendered
      this.content = data[0].content.rendered
    }
  },

    mounted() {
    const options = {
      url: `https://sw.tode.cz/wp-json/wp/v2/pages`,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      // params: {
      //   resourceName: this.resourceName,
      //   limit: 10
      // },
    }

    //.then(res => res.json())
    axios(options).then((res) => this.prepareOutput(res.data))
  },
 
}
</script>
