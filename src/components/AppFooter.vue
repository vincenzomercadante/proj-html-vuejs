<script>
import { store } from "../store/store";

import AppButton from "./AppButton.vue";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    footerItems: Object,
  },

  components: { AppButton },

  methods: {
    /**
     *
     * @param {String} path image path to get absolute path
     * @returns absolute URL from path
     *
     */
    getUrl(path) {
      return new URL(path, import.meta.url).href;
    },
  },
};
</script>

<template>
  <footer>
    <section class="links">
      <div class="container">
        <div class="row">
          <!-- site logo col -->
          <div class="col-3 pt-3">
            <!-- site logo -->
            <img :src="getUrl(store.appLogo)" alt="" class="img-fluid" />
            <!-- footer paragraph -->
            <p class="mt-3">
              Avada Driving School is the right choice for experienced drivers
              looking for a refresher course, or the brand new driver wanting to
              pass time
            </p>
          </div>

          <!-- contact details col -->
          <div class="col-3">
            <!-- col title -->
            <h3>contact details</h3>
            <ul class="details">
              <!-- contact item -->
              <li
                v-for="detail in footerItems.contactDetails"
                class="d-flex mb-4"
              >
                <font-awesome-icon :icon="detail.icon" class="icons" />
                <p class="ms-4">{{ detail.txt }}</p>
              </li>
            </ul>
          </div>

          <!-- courses col -->
          <div class="col-3">
            <!-- col title -->
            <h3>courses</h3>
            <ul class="courses">
              <!-- course -->
              <li v-for="course in footerItems.courses" class="mb-4">
                <font-awesome-icon :icon="course.icon" class="icons" />
                <p class="ms-4">{{ course.txt }}</p>
              </li>
            </ul>
          </div>

          <!-- book col -->
          <div class="col-3 text-center">
            <!-- book image -->
            <img
              :src="getUrl('../assets/img/footer/footer-ad-grid.png')"
              alt=""
              class="img-fluid mb-4"
            />
            <!-- book button -->
            <AppButton :button="footerItems.button" />
          </div>
        </div>
      </div>
    </section>

    <!-- credits section -->
    <section class="credits">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- credits right -->
        <div class="credits-right d-flex align-items-center">
          <font-awesome-icon icon="fa-regular fa-copyright" />
          <p class="mb-0 ms-1">
            Copyright 2012 - 2020 | Avada Theme by <a href="#">ThemeFusion</a> |
            All Rights Reserved by <a href="#">WordPress</a>
          </p>
        </div>

        <!-- credits left -->
        <div class="credits-left">
          <font-awesome-icon
            v-for="brand in footerItems.creditsBrands"
            :icon="brand"
            class="ms-3"
          />
        </div>

        <!-- chevron up toggle -->
        <a href="#" class="go-up">
          <font-awesome-icon icon="fa-solid fa-chevron-up" />
        </a>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;
footer {
  position: relative;

  .links {
    padding: 50px 0;
    background-image: url("../assets/img/backgrounds/footer-background-color.jpg");
    background-size: cover;
    background-position: center;
    min-height: 300px;

    p {
      color: $txt-color;
      font-size: 0.9rem;
      margin-bottom: 0;
    }

    h3 {
      margin-bottom: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
      color: $secondary-color;
      font-size: 1rem;
    }

    li {
      .icons {
        color: $footer-icon-color;
        font-size: 1.2rem;
      }
      p {
        padding-right: 2rem;

        a {
          text-decoration: none;
        }
      }
    }

    .courses {
      li {
        display: flex;
        align-items: center;

        .icons,
        p {
          color: $primary-color;
          font-size: 1.2rem;
        }
      }
    }
  }

  .credits {
    padding: 50px 0;
    background-color: $footer-credits-bg;

    .credits-right {
      color: $txt-color;
      font-size: 0.8rem;
      a {
        color: $primary-color;
      }
    }
    .credits-left {
      color: $secondary-color;
    }

    .go-up {
      position: absolute;
      background-color: $chevron-up-bg;
      color: $secondary-color;
      padding: 5px 1rem;
      bottom: 0;
      right: 70px;
    }
  }
}
</style>
