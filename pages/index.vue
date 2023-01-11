<template>
  <div>
    <div class="sticky-note-red" ref="stickyRed" :style="stickyRedStyle">
      <div class="sticky-text"></div>
      <div class="bottom-strip-1">
      </div>
    </div>
    <div class="sticky-note-yellow" ref="stickyYellow" :style="stickyYellowStyle">
      <div class="sticky-text"></div>
      <div class="bottom-strip-2">
      </div>
    </div>
    <NuxtLink to="/macbook/login-page" class="computer-container">
      <div class="screen">
        <img v-show="imgSrcDesktop" :src="imgSrcDesktop" alt="logo"/>
      </div>
      <div class="bottom-computer">
        <div class="keyboard-container">
          <div id="keyboard-row-1">
            <div class="top-bar-1">
            </div>
            <div class="top-bar-2">
            </div>
            <div class="top-bar-3">
            </div>
            <div class="top-bar-4">
            </div>
            <div class="top-bar-5">
            </div>
            <div class="top-bar-6">
            </div>
            <div class="top-bar-7">
            </div>
            <div class="top-bar-8">
            </div>
          </div>
          <div id="keyboard-row-2">
            <div class="mid-bar-1">
            </div>
            <div class="mid-bar-2">
            </div>
            <div class="mid-bar-3">
            </div>
            <div class="mid-bar-4">
            </div>
            <div class="mid-bar-5">
            </div>
            <div class="mid-bar-6">
            </div>
            <div class="mid-bar-7">
            </div>
            <div class="mid-bar-8">
            </div>
          </div>

          <div id="keyboard-row-3">
            <div class="bottom-bar-1">
            </div>
            <div class="bottom-bar-2">
            </div>
            <div class="bottom-bar-3">
            </div>
            <div class="bottom-bar-4">
            </div>
            <div class="bottom-bar-5">
            </div>
            <div class="bottom-bar-6">
            </div>
            <div class="bottom-bar-7">
            </div>
            <div class="bottom-bar-8">
            </div>
          </div>
        </div>
        <div class="trackpad"></div>
      </div>
    </NuxtLink>
    <div class="pen" ref="pen" :style="penStyle">
      <div class="cap"></div>
      <div class="end"></div>
    </div>
    <div class="mouse" ref="mouse" :style="mouseStyle">
      <div class="tracker"></div>
    </div>
    <div class="gameboy" ref="gameboy" :style="gamebodyStyle">
      <div class="gameboy-screen-back">
        <div class="gameboy-screen-front"></div>
      </div>
      <div class="dpad-container">
        <div class="horizontal-dpad"></div>
        <div class="vertical-dpad"></div>
      </div>
      <div class="button-1"></div>
      <div class="button-2"></div>
      <div class="start"></div>
      <div class="select"></div>
    </div>
    <img v-show="qrcodeHref" class="qrcode" :src="qrcodeHref" alt="QR Code"/>
    <NuxtLink to="documentation">
      <PulsingElement :pulse="documentsStore.getFlagNeedRead" class="lamp">
          <Icon name="ant-design:bulb-filled" style="width: 28px; height: 28px" />
      </PulsingElement>
    </NuxtLink>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useDraggable} from '@vueuse/core'
import {useQRCode} from '@vueuse/integrations/useQRCode'
import axios from "axios";
import {useDocumentsStore} from "../store/documents";

const {$error} = useNuxtApp();

definePageMeta({
  layout: 'desktop'
})

useHead({
  titleTemplate: '%s',
})

useAsyncData(() => {
  axios.get("https://random.imagecdn.app/229/108")
      .then(() => {
        imgSrcDesktop.value = "https://random.imagecdn.app/229/108";
      })
      .catch((error) => {
        $error(error);
      })
})

const qrcodeHref = useQRCode('https://www.instagram.com/ilya__sharafeev/');
const imgSrcDesktop = ref(null);

const gameboy = ref(null);
const stickyRed = ref(null);
const stickyYellow = ref(null);
const pen = ref(null);
const mouse = ref(null);

const documentsStore = useDocumentsStore();

const gamebodyStyle = useDraggable(gameboy, {
  initialValue: {x: 500, y: 700},
}).style;

const stickyRedStyle = useDraggable(stickyRed, {
  initialValue: {x: 100, y: 150},
}).style;

const stickyYellowStyle = useDraggable(stickyYellow, {
  initialValue: {x: 50, y: 100},
}).style;

const penStyle = useDraggable(pen, {
  initialValue: {x: 200, y: 300},
}).style;

const mouseStyle = useDraggable(mouse, {
  initialValue: {x: 250, y: 500},
}).style;
</script>

<style scoped lang="scss">
body {
  background: #EBF3FE;
}

.qrcode {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 15px;
  max-width: 110px;
  z-index: 2;
}

.lamp {
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 20px 0 0;
  color: ghostwhite;
  z-index: 2;
  cursor: pointer;
}

.computer-container {
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  width: 255px;
  height: 270px;
  left: 28.75%;
  background: #525252;
  z-index: 1;
}

.computer-container-large {
  position: absolute;
  height: 70%;
  width: 50%;
  top: 15%;
  left: 25%;
  background: #525252;
  z-index: 1;
}

.screen {
  position: absolute;
  width: 90%;
  height: 40%;
  background: #111111;
  top: 6%;
  left: 5%;
}

.progress-bar {
  position: absolute;
  height: 5%;
  bottom: 12%;
  width: 70%;
  left: 15%;
  background: none;
  border-radius: 50px;
  border: solid 2px white;
}

.progress-fill {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
}

.logo-container {
  position: absolute;
  height: 40%;
  width: 20%;
  top: 25%;
  left: 40%;
  background: none;
}

.game-container {
  position: absolute;
  height: 100%;
  width: 120%;
  left: -10%;
  background: none;
}

.screen-logo {
  height: 100%;
}

.keyboard-container {
  position: absolute;
  width: 90%;
  height: 50%;
  top: 7%;
  left: 5%;
  background: #C2CBDD;
  z-index: 3;
}

.top-bar-1 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 3%;
  top: 8%;
  background: #666666;
  z-index: 4;
}

.top-bar-2 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 15%;
  top: 8%;
  background: #666666;
  z-index: 4;
}

.top-bar-3 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 27%;
  top: 8%;
  background: #666666;
  z-index: 4;
}

.top-bar-4 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 39%;
  top: 8%;
  background: #666666;
  z-index: 4;
}

.top-bar-5 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 51%;
  top: 8%;
  background: #666666;
  z-index: 4;
}

.top-bar-6 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 63%;
  top: 8%;
  background: #666666;
  z-index: 4;
}

.top-bar-7 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 75%;
  top: 8%;
  background: #666666;
  z-index: 4;
}

.top-bar-8 {
  cursor: pointer;
  position: absolute;
  width: 8%;
  height: 15%;
  left: 87%;
  top: 8%;
  background: #666666;
  z-index: 4;
}

.mid-bar-1 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 3%;
  top: 45%;
  background: #666666;
  z-index: 4;
}

.mid-bar-2 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 15%;
  top: 45%;
  background: #666666;
  z-index: 4;
}

.mid-bar-3 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 27%;
  top: 45%;
  background: #666666;
  z-index: 4;
}

.mid-bar-4 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 39%;
  top: 45%;
  background: #666666;
  z-index: 4;
}

.mid-bar-5 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 51%;
  top: 45%;
  background: #666666;
  z-index: 4;
}

.mid-bar-6 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 63%;
  top: 45%;
  background: #666666;
  z-index: 4;
}

.mid-bar-7 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 75%;
  top: 45%;
  background: #666666;
  z-index: 4;
}

.mid-bar-8 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 87%;
  top: 45%;
  background: #666666;
  z-index: 4;
}

.bottom-bar-1 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 3%;
  bottom: 8%;
  background: #666666;
  z-index: 4;
}

.bottom-bar-2 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 15%;
  bottom: 8%;
  background: #666666;
  z-index: 4;
}

.bottom-bar-3 {
  position: absolute;
  width: 40%;
  height: 15%;
  left: 27%;
  bottom: 8%;
  background: #666666;
  z-index: 4;
}

.bottom-bar-4 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 39%;
  bottom: 8%;
  background: #666666;
  z-index: 4;
}

.bottom-bar-5 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 51%;
  bottom: 8%;
  background: #666666;
  z-index: 4;
}

.bottom-bar-6 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 63%;
  bottom: 8%;
  background: #666666;
  z-index: 4;
}

.bottom-bar-7 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 75%;
  bottom: 8%;
  background: #666666;
  z-index: 4;
}

.bottom-bar-8 {
  position: absolute;
  width: 8%;
  height: 15%;
  left: 87%;
  bottom: 8%;
  background: #666666;
  z-index: 4;
}

.trackpad {
  position: absolute;
  width: 30%;
  left: 35%;
  bottom: 5%;
  height: 30%;
  background: #C2CBDD;
  z-index: 3;
}

.bottom-computer {
  position: absolute;
  height: 47.5%;
  width: 100%;
  bottom: 0%;
  background: #E8E8EB;
  z-index: 2;
}

.sticky-note-red {
  position: absolute;
  background: #F1536A;
  width: 72px;
  height: 67px;
  z-index: 4;
  top: 10%;
  left: 5%;
  cursor: pointer;
}

.sticky-note-yellow {
  position: absolute;
  background: #FEE789;
  width: 72px;
  height: 67px;
  z-index: 4;
  top: 33%;
  left: 9%;
  cursor: pointer;
}

.bottom-strip-1 {
  position: absolute;
  bottom: 0%;
  height: 15%;
  width: 100%;
  background: #C7485C;
}

.bottom-strip-2 {
  position: absolute;
  bottom: 0%;
  height: 15%;
  width: 100%;
  background: #E7D181;
}

.clock {
  position: absolute;
  height: 20%;
  width: 15%;
  right: 5%;
  top: 5%;
  border-radius: 50%;
  background: #CACDD2;
  z-index: 4;
}

.clock-white {
  position: absolute;
  height: 80%;
  width: 80%;
  left: 10%;
  top: 10%;
  border-radius: 50%;
  background: white;
  z-index: 5;
}

.tick {
  position: absolute;
  background: #11141E;
  height: 30%;
  width: 8%;
  top: 25%;
  left: 45%;
}

.tock {
  position: absolute;
  background: #11141E;
  width: 30%;
  height: 8%;
  top: 47%;
  left: 20%;
}

.mouse {
  position: absolute;
  background: white;
  width: 50px;
  height: 80px;
  z-index: 4;
  bottom: -25%;
  right: -30%;
  border-radius: 15px;
  cursor: pointer;
}


.mouse-large {
  position: absolute;
  background: white;
  height: 30%;
  width: 20%;
  z-index: 4;
  bottom: -15%;
  right: -30%;
  border-radius: 15px;
}

.tracker {
  position: absolute;
  background: #666666;
  height: 25%;
  width: 10%;
  top: 0%;
  left: 45%;
}

.pen {
  position: absolute;
  width: 13px;
  height: 95px;
  background: white;
  top: 60%;
  left: -20%;
  z-index: 4;
  cursor: pointer;
}

.cap {
  position: absolute;
  width: 100%;
  height: 10%;
  background: #536796;
  top: -10%;
}

.end {
  position: absolute;
  width: 100%;
  height: 10%;
  background: #536796;
  bottom: -10%;
  -webkit-clip-path: polygon(100% 0, 0 0, 50% 100%);
  clip-path: polygon(100% 0, 0 0, 50% 100%);
}

.gameboy {
  position: absolute;
  top: 30%;
  right: 5%;
  width: 90px;
  height: 135px;
  z-index: 4;
  border-radius: 10px 10px 10px 25px;
  background: #8849bc;
  cursor: pointer;
}

.gameboy-screen-back {
  position: absolute;
  height: 40%;
  width: 75%;
  left: 12.5%;
  top: 8%;
  background: #402750;
}

.gameboy-screen-front {
  position: absolute;
  height: 75%;
  width: 75%;
  left: 12.5%;
  top: 12.5%;
  background: #f4fff8;
}

.gameboy-dot {
  position: absolute;
  height: 5%;
  width: 5%;
  background: #DC0646;
  top: 25%;
  left: 3%;
  border-radius: 50%;
}

.dpad-container {
  position: absolute;
  background: none;
  bottom: 20%;
  width: 27%;
  height: 20%;
  left: 12.5%;
}

.horizontal-dpad {
  position: absolute;
  background: #402750;
  width: 100%;
  height: 30%;
  top: 35%;
}

.vertical-dpad {
  position: absolute;
  background: #402750;
  height: 100%;
  width: 30%;
  left: 35%;
  top: 0%;
}

.button-1 {
  cursor: pointer;
  position: absolute;
  width: 15%;
  height: 10%;
  bottom: 16%;
  right: 18%;
  background: #402750;
  border-radius: 50%;
}


.button-2 {
  cursor: pointer;
  position: absolute;
  width: 15%;
  height: 10%;
  bottom: 29%;
  right: 10%;
  background: #402750;
  border-radius: 50%;
}

.start {
  cursor: pointer;
  position: absolute;
  border-radius: 40px;
  background: #402750;
  bottom: 5%;
  height: 3%;
  left: 31%;
  width: 18%;
}

.select {
  cursor: pointer;
  position: absolute;
  border-radius: 40px;
  background: #402750;
  bottom: 5%;
  height: 3%;
  right: 29%;
  width: 18%;
}

.gameboy-large {
  position: absolute;
  top: 15%;
  right: 35%;
  height: 60%;
  width: 30%;
  z-index: 4;
  border-radius: 10px;
  border-bottom-left-radius: 25px;
  background: #8849bc;
}

.sticky-text {
  position: relative;
  text-align: center;
  margin-top: 25%;
  font-family: "Lato";
  font-size: 15px;
  color: #111111;
}

.sticky-note-large-yellow {
  position: absolute;
  width: 50%;
  height: 50%;
  background: #FEE789;
  z-index: 2;
  top: 20%;
  left: 25%;
  border-bottom: solid 30px #E7D181;
}

.sticky-note-large-red {
  position: absolute;
  width: 50%;
  height: 50%;
  background: #F1536A;
  z-index: 2;
  top: 20%;
  left: 25%;
  border-bottom: solid 30px #C7485C;
}


input {
  position: absolute;
  background: none;
  border: none;
  width: 80%;
  left: 10%;
  height: 40%;
  top: 30%;
  font-family: "Lato";
  font-size: 30px;
  color: #111111;
}

input:focus {
  outline: none;
}

@media all and (max-width: 600px) {
  .desktop {
    width: 100%;
    height: 100vh;
  }
}
</style>