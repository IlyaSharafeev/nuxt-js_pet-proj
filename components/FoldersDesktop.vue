<template>
  <div>
    <FolderDesktop v-for="folder of desktopStore.foldersList" :folder="folder" />
  </div>
</template>

<script setup>
import {defineProps} from "vue";
import {useDesktopStore} from "../store/desktop";

defineProps(({
  editFolder: String,
}))

const desktopStore = useDesktopStore();
</script>

<style scoped>

</style>