<template>
  <div class="desktop">
    <div class="desktop__grains">
      <div class="desktop__grains-1"></div>
      <div class="desktop__grains-2"></div>
      <div class="desktop__grains-3"></div>
      <div class="desktop__grains-4"></div>
      <div class="desktop__grains-5"></div>
      <div class="desktop__grains-6"></div>
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.desktop {
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  background: #CBA285;

  .desktop__grains-1 {
    position: absolute;
    top: 5%;
    height: 6%;
    width: 100%;
    background: #C59D82;
    z-index: 1;
  }

  .desktop__grains-2 {
    position: absolute;
    top: 25%;
    height: 6%;
    width: 100%;
    background: #C59D82;
    z-index: 1;
  }

  .desktop__grains-3 {
    position: absolute;
    top: 45%;
    height: 6%;
    width: 100%;
    background: #C59D82;
    z-index: 1;
  }

  .desktop__grains-4 {
    position: absolute;
    top: 65%;
    height: 6%;
    width: 100%;
    background: #C59D82;
    z-index: 1;
  }

  .desktop__grains-5 {
    position: absolute;
    top: 85%;
    height: 6%;
    width: 100%;
    background: #C59D82;
    z-index: 1;
  }

  .desktop__grains-6 {
    position: absolute;
    bottom: 0%;
    height: 9%;
    width: 100%;
    background: #A48170;
    z-index: 1;
  }
}
</style>