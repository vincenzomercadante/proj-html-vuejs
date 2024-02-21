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
            badge: {},
          },
          {
            linkName: "about",
            href: "#",
            active: false,
            badge: {},
          },
          {
            linkName: "prices",
            href: "#",
            active: false,
            badge: {},
          },
          {
            linkName: "courses",
            href: "#",
            active: false,
            badge: { text: "new", type: "new-item" },
          },
          {
            linkName: "locations",
            href: "#",
            active: false,
            badge: {},
          },
          {
            linkName: "blog",
            href: "#",
            active: false,
            badge: {},
          },
        ],
        button: {
          text: "book now",
          href: "#",
          type: "primary",
        },
      },

      footerItems: {
        contactDetails: [
          {
            txt: "12345 North Main Street, New York, Ny 555555",
            icon: "fa-solid fa-house-chimney",
            href: "#",
          },
          {
            txt: "1.800.555.678",
            icon: "fa-solid fa-phone-flip",
            href: "#",
          },
          {
            txt: "info@your-domain.com",
            icon: "fa-regular fa-envelope",
            href: "#",
          },
          {
            txt: "Theme-Fusion.com",
            icon: "fa-solid fa-link",
            href: "#",
          },
        ],

        courses: [
          {
            txt: "Pass Plus",
            icon: "fa-regular fa-circle-right",
            href: "#",
          },
          {
            txt: "Intensive Course",
            icon: "fa-regular fa-circle-right",
            href: "#",
          },
          {
            txt: "Automatic",
            icon: "fa-regular fa-circle-right",
            href: "#",
          },
          {
            txt: "Instructor Training",
            icon: "fa-regular fa-circle-right",
            href: "#",
          },
        ],
        button: {
          text: "book now",
          href: "#",
          type: "primary",
        },

        creditsBrands: [
          "fa-brands fa-facebook-f",
          "fa-brands fa-x-twitter",
          "fa-brands fa-youtube",
          "fa-brands fa-instagram",
        ],
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
  <AppFooter :footerItems="footerItems" />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
