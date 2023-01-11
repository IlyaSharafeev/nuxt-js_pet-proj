<template>
  <div class="documentation">
    <NuxtLink to="/" class="documentation__btn-home" v-tatar>
      go home
    </NuxtLink>
    <div class="paper">
      <div class="lines">
        <div class="text" contenteditable autofocus spellcheck="false" @keydown="endTyping" v-html="text"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onBeforeUnmount, ref} from "vue";
import {useDocumentsStore} from "../../store/documents";

definePageMeta({
  layout: 'desktop'
})

const documentsStore = useDocumentsStore();

onBeforeUnmount(() => {
  documentsStore.setPaperText(documentsStore.getPaperText);
  documentsStore.setFlagNeedRead(false);
})

const endTyping = (e) => {
  documentsStore.setPaperText(e.target.innerText);
}

const text = ref(documentsStore.getPaperText || '');
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Indie+Flower);
.paper {
  position: absolute;
  z-index: 2;
  height: 550px;
  width: 450px;
  margin: -275px -225px;
  left: 50%;
  top: 50%;
  background: white;
  box-shadow: 0 0 5px 0 #888;
}
.paper::before {
  content: '';
  position: absolute;
  left: 45px;
  height: 100%;
  width: 2px;
  background: rgba(255,0,0,0.4);
}
.lines {
  margin-top: 40px;
  height: calc(100% - 40px);
  width: 100%;
  background-image: repeating-linear-gradient(white 0px, white 24px, steelblue 25px);
}
.text {
  position: absolute;
  top: 65px;
  left: 55px;
  bottom: 10px;
  right: 10px;
  line-height: 25px;
  font-family: 'Indie Flower';
  overflow: hidden;
  outline: none;
}

.documentation__btn-home {
  display: flex;
  position: absolute;
  padding: 10px 15px;
  background: #ee9949;
  color: ghostwhite;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 7px;
  border-radius: 0 0 30% 0;
  left: 0;
}
</style>