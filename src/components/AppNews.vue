<script>
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    news: Object,
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
  },
};
</script>

<template>
  <div class="news">
    <!-- news thumb -->
    <img :src="getUrl(news.img)" alt="news thumb" class="img-fluid mb-3" />
    <!-- new title -->
    <h4>{{ news.title }}</h4>
    <!-- news info -->
    <h5 class="mb-3">
      {{ news.date }} | <span>{{ news.comments.length }} comments</span>
    </h5>
    <!-- news preview -->
    <p>{{ news.preview }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.news {
  text-align: center;

  h4 {
    color: $primary-color;
  }

  h5 {
    font-size: 0.9rem;
    color: $txt-color;

    span {
      color: $primary-color;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  img {
    width: 500px;
  }

  p {
    color: $txt-color;
    font-size: 1.1rem;
  }
}
</style>
