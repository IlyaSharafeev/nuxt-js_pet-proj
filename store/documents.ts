import { defineStore } from 'pinia'

export const useDocumentsStore = defineStore({
    id: 'documents-store',
    state: () => {
        return {
            needRead: true,
            paperText: '',
        }
    },
    actions: {
        setPaperText(newText: string) {
            this.paperText = newText;
        },
        setFlagNeedRead(flag: boolean) {
            this.needRead = flag;
        },
    },
    getters: {
        getPaperText: state => state.paperText,
        getFlagNeedRead: state => state.needRead,
    },
})