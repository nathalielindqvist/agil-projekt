<template>
  <div @click.prevent="goToContact">
    Want to reach out?
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToContact() {
      this.$router.replace({ name: "Contact" });
    },
  },
};
</script>

<style scoped>
div:hover {
  cursor: pointer;
  padding: 20px;
}
</style>
