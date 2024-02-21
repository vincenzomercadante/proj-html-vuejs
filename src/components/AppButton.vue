<script>
export default {
  props: {
    button: Object,
  },

  emits: {},
};
</script>

<template>
  <a class="btn-custom" :class="button.type" :href="button.href">{{
    button.text
  }}</a>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.btn-custom {
  display: inline-block;
  padding: 5px 2rem;
  border-radius: 30px;
  color: $secondary-color;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &.primary {
    background-color: $primary-color;
    border: 5px solid $primary-color;

    &:hover {
      box-shadow: 0px 0px 11px 5px #747474;
    }
  }

  &.secondary {
    color: $txt-color;
    background-color: transparent;
    border: 5px solid $txt-color;
    transform: scale(0.8);

    &:hover {
      color: $primary-color;
      background-color: $secondary-color;
      border-color: $primary-color;
    }
  }
}
</style>
