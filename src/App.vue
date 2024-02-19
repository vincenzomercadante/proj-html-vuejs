<script>
// import components
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      headerItems: {
        logo: "../assets/img/site logo/avada-drivers-logo-1x.png",
        links: [
          {
            linkName: "home",
            href: "#",
            active: true,
            badges: [],
          },
          {
            linkName: "about",
            href: "#",
            active: false,
            badges: [],
          },
          {
            linkName: "prices",
            href: "#",
            active: false,
            badges: [],
          },
          {
            linkName: "courses",
            href: "#",
            active: false,
            badge: [{ text: "new", type: "new-item" }],
          },
          {
            linkName: "locations",
            href: "#",
            active: false,
            badges: [],
          },
          {
            linkName: "blog",
            href: "#",
            active: false,
            badges: [],
          },
        ],
        button: {
          text: "book now",
          href: "#",
        },
      },
    };
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <!-- page header -->
  <AppHeader
    :logo="headerItems.logo"
    :links="headerItems.links"
    :button="headerItems.button"
  />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
