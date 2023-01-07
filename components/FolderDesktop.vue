<template>
  <div class="folder_wrapper" ref="Folder" :data-folder="folder.id" :style="folderTestStyle">
    <div class="btn_folder">
      <div class="folder">
        <div class="folder_icon">
          <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/folder1.png?raw=true"
               alt="folder_icon">
        </div>
        <div class="folder_name" ref="FolderInput" v-if="editNewFolder || +desktopStore.editFolder === +folder.id && desktopStore.getEditMode">
          <input :value="folder.title" @keyup.enter="finishEditing">
        </div>
        <div class="folder_name" v-else>
          {{ folder.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, onMounted, ref} from "vue";
import {useDraggable, onClickOutside} from "@vueuse/core";

import {useDesktopStore} from "../store/desktop";

const props = defineProps(({
  folder: Object,
  editFolder: String,
}))

const Folder = ref(null);
const FolderInput = ref(null);
const desktopStore = useDesktopStore();
const editNewFolder = ref(false);

onMounted(() => {
  if(!props.folder.title) {
    editNewFolder.value = true;
  }
})

onClickOutside(FolderInput, () => {
  editNewFolder.value = false;
  desktopStore.offEditMode()
})

const folderTestStyle = useDraggable(Folder, {
  initialValue: {
    x: props.folder.defaultPositionX,
    y: props.folder.defaultPositionY,
  },
}).style;

const finishEditing = (e) => {
  const editableFolder = {
    id: props.folder.id,
    title: e.target.value,
  }
  desktopStore.changeFolderName(editableFolder);
  editNewFolder.value = false;
}
</script>

<style scoped lang="scss">
input {
  width: 100%;
}

.btn_folder {
  background-color: transparent;
  border: none;
  outline: 0;
  margin-bottom: 20px;
  width: 100px;
  padding: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  cursor: pointer;
  -webkit-transition: .3s;
  -o-transition: .3s;
  transition: .3s;

  &:hover {
    text-decoration: none;

    .folder_icon {
      background-color: rgba(0, 0, 0, .3);
      border-color: rgba(160, 172, 191, .3);
    }
  }
}

.folder {
  .folder_icon {
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    padding: 7px;
    border: 3px solid transparent;
    border-radius: 6px;
    width: 80px;
    height: 80px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 auto;

    img {
      width: 60px;
    }
  }

  .folder_name {
    font-family: Lato, sans-serif;
    font-weight: 700;
    font-size: 11px;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
    margin-top: 0;
    max-width: 100px;
    border-radius: 3px;
    padding: 5px 0 5px;
    word-break: break-all;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
  }
}

.folder_wrapper {
  position: absolute;
}
</style>