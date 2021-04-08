<template>
  <v-app>
    <v-app-bar app class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
      <NuxtLink to="/"><v-toolbar-title v-text="title" /></NuxtLink>
      <v-spacer />
      <v-btn class="d-md-none" icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-row no-gutters class="d-none d-md-inline-flex justify-end">
        <v-col v-for="(item, i) in items" :key="i" cols="auto">
          <v-btn class="" color="blue-grey" text :to="item.to">{{ item.title }}</v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        // {
        //   //icon: 'mdi-apps',
        //   title: 'Welcome',
        //   to: '/'
        // },
        {
          //icon: 'mdi-apps',
          title: "Naše práce",
          to: "/nase-prace"
        },
        {
          //icon: 'mdi-chart-bubble',
          title: "Inspire",
          to: "/inspire"
        }
      ],
      //miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Website",
      showNavbar: true,
      lastScrollPosition: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  }
};
</script>

<style scoped>
/* 
* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
}
.app {
  width: 100vw;
  height: 500vh;
  background: hsl(200, 50%, 90%);
} */
.navbar {
  /* height: 60px; 
  width: 100vw;
  background: hsl(200, 50%, 50%); 
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5); */
  position: fixed;
  transform: translate3d(0, 0, 0) !important;
  transition: 0.2s all ease-out;
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0) !important;
}
</style>
