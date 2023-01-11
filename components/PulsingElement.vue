<template>
  <div>
    <div v-if="pulse" class="pulsing">
      <slot/>
    </div>
    <div v-else class="no-pulsing">
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
.pulsing {
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 20px 0 0;
  color: ghostwhite;
  z-index: 2;
  cursor: pointer;
  animation: scale_pulsing 0.8s infinite linear;
}

.no-pulsing {
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 20px 0 0;
  color: ghostwhite;
  z-index: 2;
  cursor: pointer;
}

@keyframes scale_pulsing {
  0% {
    scale: 1;
    color: white;
  }
  50% {
    scale: 1.5;
    color: navajowhite;
  }
  100% {
    scale: 1;
    color: white;
  }
}
</style>