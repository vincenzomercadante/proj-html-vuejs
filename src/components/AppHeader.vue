<script>
import AppButton from "./AppButton.vue";
import AppHero from "./AppHero.vue";
import NavBadge from "./NavBadge.vue";

export default {
  components: { AppButton, AppHero, NavBadge },

  props: {
    button: Object,
    links: Array,
    logo: String,
  },

  methods: {
    generateUrl(path) {
      return new URL(path, import.meta.url).href;
    },
  },
};
</script>

<template>
  <!-- header -->
  <header>
    <!-- site-intro section -->
    <section>
      <div class="container">
        <span>We have a 95% Successful Pass Rate!</span>
        <div>
          <font-awesome-icon icon="fa-solid fa-phone-flip" class="me-3" />
          <span>Give us a call to book your tuition! 1-800-555-555</span>
        </div>
      </div>
    </section>
    <!-- navbar -->
    <nav>
      <div class="container">
        <div class="row">
          <!-- site logo col -->
          <div class="col-3">
            <img :src="generateUrl(logo)" alt="" />
          </div>
          <!-- nav links col -->
          <div class="col-9">
            <ul>
              <!-- text links -->
              <li
                v-for="link in links"
                class="me-5"
                :class="link.active ? 'active' : ''"
              >
                <!-- text -->
                <a :href="link.href" class="me-1">{{ link.linkName }}</a>
                <!-- badge -->
                <NavBadge :badge="link.badge" v-if="link.badge" />
              </li>
              <!-- button link -->
              <li>
                <AppButton :button="button" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- App hero section -->
    <AppHero />
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

header {
  background-image: url("../assets/img/backgrounds/homepage-hero-background.jpg");
  background-size: cover;
  background-position: center;
  min-height: 800px;

  section:first-child {
    padding: 10px 0;
    background-color: $site-introduction-bg;

    .container {
      @include center-vertically;
      justify-content: space-between;
      color: $txt-color;
      font-size: 0.8rem;
    }
  }
  nav {
    padding: 2rem 0;
    background-color: rgba($color: #333, $alpha: 0.5);
    @include center-vertically;

    .col-9 {
      @include center-vertically;
      justify-content: flex-end;
      text-transform: uppercase;
      color: $secondary-color;
      font-weight: bold;

      li {
        padding-bottom: 5px;
      }
      li.active {
        color: $primary-color;
        border-bottom: 2px solid currentColor;
      }
    }
  }
}
</style>
