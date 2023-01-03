import { defineStore } from 'pinia'
import {localFetch} from "nitropack/dist/runtime/entries/nitro-prerenderer";

export const useDesktopStore = defineStore({
  id: 'desktop-store',
  state: () => {
    return {
      editMode: false,
      removeMode: false,
      editFolder: null,
      folders: [
        {
          id: 0,
          title: 'store folder title1',
          defaultPositionX: 0,
          defaultPositionY: 200,
        },
        {
          id: 1,
          title: 'store folder title2',
          defaultPositionX: 0,
          defaultPositionY: 400,
        },
      ]
    }
  },
  actions: {
    assignEditFolder(folderId) {
      this.editFolder = folderId;
    },
    offEditMode() {
      this.editMode = false;
    },
    onEditMode() {
      this.editMode = true;
    },
    offRemoveMode() {
      this.removeMode = false;
    },
    onRemoveMode() {
      this.removeMode = true;
    },
    changeFolderName(editableFolder) {
      this.folders = this.folders.map((folder) => (
        folder.id === editableFolder.id ? {...folder, title: editableFolder.title} : folder
      ));
      this.offEditMode();
    },
    removeFolder(removeFolder) {
      console.log(removeFolder);
      this.folders = this.folders.filter((elem) => {
        console.log(elem.id);
        return elem.id !== +removeFolder;
      })
      console.log(this.folders);
      this.offRemoveMode();
    }
  },
  getters: {
    foldersList: state => state.folders,
    getEditMode: state => state.editMode,
    getRemoveMode: state => state.removeMode,
  },
})