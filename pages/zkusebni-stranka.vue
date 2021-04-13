<template>
  <v-row>
    <v-col class="text-center mt-4">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <h1 v-html="pageContent[0].title.rendered"></h1>
      <div v-html="pageContent[0].content.rendered" class="text-justify px-6 mt-4"></div>
    </v-col>
  </v-row>
</template>

<script>
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
//import { requestsMixin } from "~/mixins/requestsMixin";
//import axios from "@nuxtjs/axios"

export default {
  //mixins: [requestsMixin],
  name: "zkusebniStranka",
  // props: ["resourceName"],

  // data: () => ({

  // }),

  // methods: {
  //   async getPageContent() {
  //     const { data } = await this.getPages();
  //     this.title = data[0].title.rendered;
  //     this.content = data[0].content.rendered;
  //   }
  // },
  async asyncData({$axios}) {
      // const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
      // return { post }
      const options = {
        url: `https://sw.tode.cz/wp-json/wp/v2/pages`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8"
        }
        // params: {
        //   resourceName: this.resourceName,
        //   limit: 10
        // },
      }

      const pageContent = await $axios(options)
      return { pageContent: pageContent.data};
  },
  mounted() {
    //.then(res => res.json())
  }
};
</script>
