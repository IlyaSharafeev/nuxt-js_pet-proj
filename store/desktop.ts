import { defineStore } from 'pinia'

export const useDesktopStore = defineStore({
  id: 'desktop-store',
  state: () => {
    return {
      auth: {
        name: null,
      },
      editMode: false,
      removeMode: false,
      editFolder: null,
      copyFolder: null,
      positionPointer: {
        x: null,
        y: null,
      },
      background: 'https://github.com/seuraltimez/desktopmac/blob/master/img/src/bg.jpg?raw=true',
      folders: [
        {
          id: 0,
          title: 'computer',
          defaultPositionX: 0,
          defaultPositionY: 200,
        },
        {
          id: 1,
          title: 'resume',
          defaultPositionX: 0,
          defaultPositionY: 400,
        },
      ]
    }
  },
  actions: {
    setAuthName(name) {
      this.auth.name = name;
    },
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
      this.folders = this.folders.filter((elem) => {
        return elem.id !== +removeFolder;
      })
      this.offRemoveMode();
    },
    createFolder(createFolder) {
      this.folders.push(createFolder);
    },
    setPositionPointer(position) {
      this.positionPointer.x = position.x;
      this.positionPointer.y = position.y;
    },
    setCopyFolder(folderId) {
      this.copyFolder = this.foldersList.filter((obj) => {
        return obj.id == folderId;
      })[0];
    },
    insertFolder(folder) {
      this.folders.push(folder);
    },
  },
  getters: {
    foldersList: state => state.folders,
    getEditMode: state => state.editMode,
    getRemoveMode: state => state.removeMode,
    getPositionPointer: state => state.positionPointer,
  },
})