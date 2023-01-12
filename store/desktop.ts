import { defineStore } from 'pinia'
import {CreateFolder, EditableFolder} from "~/interfaces/folders";
import {PositionCursor} from "~/interfaces/cursor";

export const useDesktopStore = defineStore({
  id: 'desktop-store',
  state: () => {
    return {
      auth: {
        name: '',
      },
      editMode: false,
      removeMode: false,
      editFolder: '',
      copyFolder: {},
      positionPointer: {
        x: 0,
        y: 0,
      },
      background: 'https://github.com/seuraltimez/desktopmac/blob/master/img/src/bg.jpg?raw=true' || '',
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
    setAuthName(name: string) {
      this.auth.name = name;
    },
    assignEditFolder(folderId: string) {
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
    changeFolderName(editableFolder: EditableFolder) {
      this.folders = this.folders.map((folder) => (
        folder.id === editableFolder.id ? {...folder, title: editableFolder.title} : folder
      ));
      this.offEditMode();
    },
    removeFolder(removeFolder: string) {
      this.folders = this.folders.filter((elem) => {
        return elem.id !== +removeFolder;
      })
      this.offRemoveMode();
    },
    createFolder(createFolder: CreateFolder) {
      this.folders.push(createFolder);
    },
    setPositionPointer(position: PositionCursor) {
      this.positionPointer.x = position.x;
      this.positionPointer.y = position.y;
    },
    setCopyFolder(folderId: number) {
      this.copyFolder = this.foldersList.filter((obj) => {
        return obj.id == folderId;
      })[0];
    },
    insertFolder(folder: CreateFolder) {
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