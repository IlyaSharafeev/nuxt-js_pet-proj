import { defineStore } from 'pinia'

export const useDesktopStore = defineStore({
  id: 'desktop-store',
  state: () => {
    return {
      editMode: false,
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
    changeFolderName(editableFolder) {
      this.folders = this.folders.map((folder) => (
        folder.id === editableFolder.id ? {...folder, title: editableFolder.title} : folder
      ));
      this.offEditMode();
    },
  },
  getters: {
    foldersList: state => state.folders,
    getEditMode: state => state.editMode,
  },
})