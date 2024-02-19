<script>
export default {
  props: {
    badge: Object,
  },
};
</script>

<template>
  <span class="badge" :class="badge.type">{{ badge.text }}</span>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.new-item {
  vertical-align: middle;
  background-color: $primary-color;
  color: $secondary-color;
}
</style>
