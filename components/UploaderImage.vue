<template>
  <div class="uploader">
    <Icon name="bxs:cloud-download"></Icon>
    <input class="uploader-input" type="file" accept="image/*" @change="upload" title="select image"/>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const item = reactive({
  image: null,
  imageUrl: null,
})

const upload = (e) => {
  const file = e.target.files[0];
  item.image = file;
  item.imageUrl = URL.createObjectURL(file);
  document.body.style.background = `url(${item.imageUrl})`;
}
</script>

<style scoped lang="scss">
* {
  cursor: pointer;

  .uploader {
    display: flex;
    cursor: pointer;
    height: 100%;

    svg {
      width: 30px;
      height: 16px;
    }

    .uploader-input {
      position: absolute;
      padding-left: 100px;
    }
  }
}
</style>