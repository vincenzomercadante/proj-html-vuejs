<script>
export default {
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
  <header>
    <section>
      <div class="container">
        <span>We have a 95% Successful Pass Rate!</span>
        <div>
          <font-awesome-icon icon="fa-solid fa-phone-flip" class="me-3" />
          <span>Give us a call to book your tuition! 1-800-555-555</span>
        </div>
      </div>
    </section>
    <section>
      <nav>
        <div class="container">
          <div class="row">
            <div class="col-3">
              <img :src="generateUrl(logo)" alt="" />
            </div>
            <div class="col-7">
              <ul>
                <li
                  v-for="link in links"
                  class="me-5"
                  :class="link.active ? 'active' : ''"
                >
                  <a :href="link.href">{{ link.linkName }}</a>
                </li>
              </ul>
            </div>
            <div class="col-2"></div>
          </div>
        </div>
      </nav>
    </section>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

header {
  min-height: 750px;
  background: transparent
    url("../assets/img/backgrounds/homepage-hero-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

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

    .col-7 {
      @include center-vertically;
      justify-content: center;
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
