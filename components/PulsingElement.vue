<template>
  <div>
    <div v-if="pulse" v-pulse>
      <slot/>
    </div>
    <div v-else>
      <slot/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pulse: {default: true, type: Boolean},
})
</script>

<style scoped lang="scss">

</style>