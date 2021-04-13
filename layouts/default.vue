<template>
  <v-app>
    <v-app-bar app hide-on-scroll color="cyan lighten-4">
      <NuxtLink class="text-decoration-none black--text" to="/"
        ><v-toolbar-title v-text="title"
      /></NuxtLink>
      <v-spacer />
      <v-btn class="d-md-none" icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-row no-gutters class="d-none d-md-inline-flex justify-end">
        <div v-for="(item, i) in items" :key="i">
          <v-btn
            v-if="item.to !== '/'"
            text
            plain
            :ripple="false"
            :to="item.to"
            >{{ item.title }}</v-btn
          >
        </div>
      </v-row>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          nuxt
          exact
        >
          <!-- <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action> -->
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
        {
          title: "Úvod",
          to: "/",
        },
        {
          title: "Naše práce",
          to: "/nase-prace",
        },
        {
          title: "Zkušební stránka",
          to: "/zkusebni-stranka",
        },
      ],
      right: true,
      rightDrawer: false,
      title: "FinSite",
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
};
</script>