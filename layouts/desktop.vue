<template>
  <div class="box">
    <div id="grains">
      <div class="grain-1"></div>
      <div class="grain-2"></div>
      <div class="grain-3"></div>
      <div class="grain-4"></div>
      <div class="grain-5"></div>
      <div class="grain-6"></div>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "notes"
}
</script>

<style scoped lang="scss">
.box{
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  background: #CBA285;
}

.grain-1{
  position: absolute;
  top: 5%;
  height: 6%;
  width: 100%;
  background: #C59D82;
  z-index: 1;
}

.grain-2{
  position: absolute;
  top: 25%;
  height: 6%;
  width: 100%;
  background: #C59D82;
  z-index: 1;
}

.grain-3{
  position: absolute;
  top: 45%;
  height: 6%;
  width: 100%;
  background: #C59D82;
  z-index: 1;
}

.grain-4{
  position: absolute;
  top: 65%;
  height: 6%;
  width: 100%;
  background: #C59D82;
  z-index: 1;
}

.grain-5{
  position: absolute;
  top: 85%;
  height: 6%;
  width: 100%;
  background: #C59D82;
  z-index: 1;
}

.grain-6{
  position: absolute;
  bottom: 0%;
  height: 9%;
  width: 100%;
  background: #A48170;
  z-index: 1;
}
</style>