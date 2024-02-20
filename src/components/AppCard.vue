<script>
import AppButton from "./AppButton.vue";

export default {
  components: { AppButton, AppButton },

  props: {
    card: Object,
  },

  computed: {},

  methods: {
    generateUrl(path) {
      return new URL(path, import.meta.url).href;
    },

    progressValue(rate) {
      return `linear-gradient(#7abc64 ${rate}%, #f6f6f6 0)`;
    },
  },
};
</script>

<template>
  <div :class="card.type">
    <img
      v-if="card.img"
      :src="generateUrl(card.img)"
      :alt="card.argument + 'image'"
      class="mb-3"
    />
    <div v-else class="progress-bar" :style="progressValue(card.rate)">
      <div class="progress">{{ card.rate }}%</div>
    </div>
    <h4>{{ card.title }}</h4>

    <AppButton v-if="card.argument == 'course'" :button="card.button" />
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
div {
  @include center-vertically;
  flex-direction: column;

  &.small-card h4 {
    color: $txt-color;
    font-weight: bold;
  }

  progress {
    border-radius: 50%;
    aspect-ratio: 1;
  }

  &.normal-card {
    padding: 2rem 3rem;
    justify-content: center;
    border-radius: 10px;
    background-color: $secondary-color;
    box-shadow: 0px -8px 0px 0px $primary-color;

    .progress-bar {
      position: relative;
      @include center-vertically;
      justify-content: center;
      background: conic-gradient($primary-color 0, #f6f6f6 0);
      width: 100%;
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
    }
  }
}
</style>
