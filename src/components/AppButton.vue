<script>
export default {
  props: {
    button: Object,
  },

  emits: {},
};
</script>

<template>
  <div class="btn-custom" :class="button.type">{{ button.text }}</div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.btn-custom {
  display: inline-block;
  padding: 12px 2rem;
  border-radius: 30px;
  border: 5px solid $primary-color;
  color: $secondary-color;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &.primary {
    background-color: $primary-color;

    &:hover {
      color: $primary-color;
      background-color: $secondary-color;
    }
  }
}
</style>
