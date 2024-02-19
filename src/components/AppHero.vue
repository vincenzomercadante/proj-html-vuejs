<script>
export default {
  data() {
    return {
      title: "Drive with Avada",
      subtitle: "We offer the finest driving tuition money can buys",
    };
  },
};
</script>

<template>
  <section>
    <div class="container">
      <h1 class="display-3">{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

section {
  min-height: 600px;
  @include center-vertically;
  color: $secondary-color;
}
</style>
