<script>
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
      clock: "",
    };
  },

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

    /**
     *
     * @param {Number} index new active index
     *
     */
    goToSlide(index) {
      store.slideActive = index;
    },

    // go to the next slide
    nextSlide() {
      if (store.slideActive === store.testimonials.length - 1)
        store.slideActive = 0;
      else store.slideActive++;
    },

    // go to the next slide every 3000ms
    startInterval() {
      this.clock = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },

    // stop change interval
    stopInterval() {
      clearInterval(this.clock);
    },
  },

  created() {
    this.startInterval();
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-8">
        <!-- carousel container -->
        <div
          class="carousel-container"
          @mouseleave="startInterval()"
          @mouseover="stopInterval()"
        >
          <!-- slides container -->
          <div class="slide-container">
            <!-- slides -->
            <div
              v-for="(testimonial, index) in store.testimonials"
              class="slide"
              :class="index === store.slideActive ? 'active' : ''"
            >
              <!-- slide img -->
              <img :src="getUrl(testimonial.img)" alt="testimonial image" />
              <!-- slide text -->
              <p>{{ testimonial.text }}</p>
              <!-- slide title -->
              <h3>{{ testimonial.name }}</h3>
            </div>
          </div>
          <!-- slider dots -->
          <div class="dot-container">
            <font-awesome-icon
              v-for="(dot, index) in store.testimonials.length"
              :icon="
                index === store.slideActive
                  ? 'fa-solid fa-circle'
                  : 'fa-regular fa-circle'
              "
              @click="goToSlide(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.carousel-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slide {
  width: 100%;
  height: 100%;
  display: none;
  text-align: center;

  img {
    width: 150px;
  }

  &.active {
    display: block;
    width: 100%;
  }

  p {
    font-style: italic;
    font-size: 1.3rem;
    color: $txt-color;
    margin-top: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    color: $txt-color;
    font-weight: bold;
  }
}
.dot-container {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  color: $txt-color;

  & * {
    cursor: pointer;
  }
}
</style>
