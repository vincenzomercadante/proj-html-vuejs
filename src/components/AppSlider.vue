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
    getUrl(path) {
      return new URL(path, import.meta.url).href;
    },

    goToSlide(index) {
      store.slideActive = index;
    },

    nextSlide() {
      if (store.slideActive === store.testimonials.length - 1)
        store.slideActive = 0;
      else store.slideActive++;
    },

    startInterval() {
      this.clock = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
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
        <div
          class="carousel-container"
          @mouseleave="startInterval()"
          @mouseover="stopInterval()"
        >
          <div class="slide-container">
            <div
              v-for="(testimonial, index) in store.testimonials"
              class="slide"
              :class="index === store.slideActive ? 'active' : ''"
            >
              <img :src="getUrl(testimonial.img)" alt="testimonial image" />
              <p>{{ testimonial.text }}</p>
              <h3>{{ testimonial.name }}</h3>
            </div>
          </div>
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
