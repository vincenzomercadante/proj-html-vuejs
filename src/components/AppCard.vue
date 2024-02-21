<script>
import AppButton from "./AppButton.vue";

export default {
  components: { AppButton, AppButton },

  props: {
    card: Object,
  },

  computed: {},

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
     * @param {Number} rate progress percentage
     * @returns value for the conic gradient color for the progress bar
     *
     */
    progressValue(rate) {
      if (rate == 0) rate = 1;
      return `conic-gradient(#7abc64 ${rate}% , #f6f6f6 ${rate}%)`;
    },
  },
};
</script>

<template>
  <div :class="[card.type, card.argument]" class="card-gen">
    <!-- card img -->
    <img
      v-if="card.img"
      :src="generateUrl(card.img)"
      :alt="card.argument + 'image'"
      class="mb-3 img-fluid"
    />

    <!-- card progress bar -->
    <div
      v-else
      class="progress-bar"
      :style="{
        background: progressValue(card.rate),
      }"
    >
      <div class="progress">{{ card.rate }}%</div>
    </div>

    <!-- card title -->
    <h4 :class="card.argument == 'instructor' ? 'name' : ''">
      {{ card.title }}
    </h4>

    <!-- social icon div -->
    <div class="socials" v-if="card.socials">
      <font-awesome-icon
        v-for="social in card.socials"
        :icon="social"
        class="me-3"
      />
    </div>

    <!-- card text -->
    <p v-if="card.text">
      {{ card.text }}
    </p>

    <!-- card button -->
    <AppButton v-if="card.argument == 'course'" :button="card.button" />
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.card-gen {
  @include center-vertically;
  flex-direction: column;

  &.small-card h4 {
    color: $txt-color;
    font-weight: bold;
  }

  &.normal-card {
    padding: 2rem 3rem;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    background-color: $secondary-color;
    box-shadow: 0px -8px 0px 0px $primary-color, $card-box-shadow;

    .progress-bar {
      position: relative;
      @include center-vertically;
      justify-content: center;
      width: 80%;
      aspect-ratio: 1;
      border-radius: 50%;
      margin-bottom: 2rem;

      .progress {
        @include center-vertically;
        justify-content: center;
        position: absolute;
        background-color: $secondary-color;
        width: 90%;
        height: 90%;
        border-radius: 50%;
        font-size: 3rem;
        color: $txt-color;
      }
    }

    h4 {
      color: $txt-color;
      font-size: 1.2rem;

      &.name {
        font-size: 1.7rem;
        color: $title-txt-color;
        margin-top: 2rem;
        font-weight: bold;
      }
    }

    .socials {
      display: flex;
      gap: 10px;
      color: $txt-color;
    }

    p {
      padding: 1rem 2rem;
      color: $txt-color;
      font-size: 1.1rem;
    }

    img {
      transition: box-shadow 0.5s ease-out;
    }
    &.instructor:hover img {
      box-shadow: 0px 0px 20px 0px #000000;
    }
  }
}
</style>
