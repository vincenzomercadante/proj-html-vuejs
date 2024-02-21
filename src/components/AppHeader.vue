<script>
import { store } from "../store/store";
import AppButton from "./AppButton.vue";
import AppHero from "./AppHero.vue";
import NavBadge from "./NavBadge.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppButton, AppHero, NavBadge },

  props: {
    button: Object,
    links: Array,
    logo: String,
  },

  methods: {
    /**
     *
     * @param {String} path image path to get absolute path
     * @returns absolute URL from path
     *
     */
    generateUrl(path) {
      return new URL(path, import.meta.url).href;
    },

    /**
     *
     * @param {Number} index new active menu
     * @returns absolute URL from path
     *
     */
    changeActiveMenu(index) {
      store.menuActive = index;
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
                v-for="(link, index) in links"
                class="me-5"
                :class="index === store.menuActive ? 'active' : ''"
                @click="changeActiveMenu(index)"
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

    <!-- page badges -->
    <div class="badges">
      <!-- first badge -->
      <div class="badge">
        <svg
          class="fss-after"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="#353637"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26 5.99994H6C5.44772 5.99994 5 6.44765 5 6.99994C5 7.55222 5.44772 7.99994 6 7.99994H26C26.5523 7.99994 27 7.55222 27 6.99994C27 6.44765 26.5523 5.99994 26 5.99994Z"
          ></path>
          <path
            d="M24 2.99994H8C7.44772 2.99994 7 3.44765 7 3.99994C7 4.55222 7.44772 4.99994 8 4.99994H24C24.5523 4.99994 25 4.55222 25 3.99994C25 3.44765 24.5523 2.99994 24 2.99994Z"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 12.9999C3 10.7908 4.79086 8.99994 7 8.99994H25C27.2091 8.99994 29 10.7908 29 12.9999V24.9999C29 27.2091 27.2091 28.9999 25 28.9999H7C4.79086 28.9999 3 27.2091 3 24.9999V12.9999ZM11.2142 23.9962C11.0575 23.9962 10.9524 23.8414 11.0218 23.7026L15.8007 14.1131C15.8761 13.9623 16.0883 13.9623 16.1637 14.1131L16.5247 14.8371C18.9529 19.7192 15.6459 24.0041 11.2142 23.9962ZM18.3797 19.2906C18.4531 19.1399 18.6674 19.1399 18.7428 19.2906L20.9785 23.7065C21.0459 23.8414 20.9467 24.0001 20.796 24.0001H18.8578C17.4335 24.0001 16.6896 22.6194 17.2807 21.4371L18.3797 19.2906Z"
          ></path>
        </svg>
        <span class="badge-title">Demos</span>
      </div>
      <!-- second badge -->
      <div class="badge">
        <h3><span class="d-inline-block fs-5 align-top">$</span>39</h3>
        <span class="badge-title">On Sale</span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

header {
  background-image: url("../assets/img/backgrounds/homepage-hero-background.jpg");
  background-size: cover;
  background-position: center;
  position: relative;

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
        cursor: pointer;
      }
      li.active {
        color: $primary-color;
        border-bottom: 2px solid currentColor;
      }
    }
  }

  .badges {
    position: absolute;
    right: 1rem;
    top: 150px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .badge {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: $secondary-color;
      padding: 10px;

      box-shadow: 0px 0px 10px 0px #444;

      &:last-child {
        h3 {
          color: $primary-color;
          font-weight: bold;
          margin-bottom: 0;
        }
      }

      .badge-title {
        color: $site-introduction-bg;
      }
    }
  }
}
</style>
