<template>
  <li>{{ todo }}</li>
</template>

<script>
export default {
  props: ['todo'],
  data() {
    return {}
  }
}
</script>

<style scoped>
  li {
    cursor: pointer;
  }
</style>