<template>
  <section id="fullpage" class="section_fullpage">
    <div class="section_fullpage_top">
      <div class="menu_topbar">
        <div class="menu_topbar_left">
          <div class="mini_logo">
            <img src="@/assets/images/logo-desktop.png" alt="logo-desktop">
          </div>
          <span>Resume</span>
        </div>
        <div class="menu_topbar_right">
          <div class="lang">
            <img src="@/assets/images/ukraine-flag.jpg" alt="ukraine-flag">
          </div>
          <div class="battery">
            <span>{{getBatteryLevel()}}%</span>
            <img v-if="charging" src="@/assets/images/charging-battery.png" alt="charging-battery" />
            <img v-show="!charging" src="@/assets/images/battery.png" alt="charging-battery" />
          </div>
          <div class="date">
            <span id="dayweek"></span>
            <span id="datamonth"></span>
            <span id="time"></span>
          </div>
          <div class="namebook">
            Galeev Albert
          </div>
          <div class="search">
            <a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
          </div>

          <div class="tollbar">
            <button class="opener_tollbar">
              <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/tollbar.png?raw=true" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="tollbar_opening">
      <div class="top_tabs">
        <div class="tab_today">
          <a href="#" class="today active">Сегодня</a>
        </div>
        <div class="tab_notifications">
          <a href="#" class="notifications">Уведомления</a>
        </div>
      </div>
      <div class="tollbar_dayweek_and_data">
        <div id="tollbar_dayweek" class="tollbar_dayweek"></div>
        <div class="tollbar_datamonth">
          <span id="tolldatamonth"></span>
        </div>
      </div>
    </div>

    <div class="desktop">
      <div class="desktop_folders">
        <div class="folder_wrapper" ref="folderSoc" :style="folderSocStyle">
          <button id="soc_btn" class="btn_folder">
            <div class="folder">
              <div class="folder_icon">
                <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/folder1.png?raw=true" alt="">
              </div>
              <div class="folder_name">
                Мои соц. сети
              </div>
            </div>
          </button>
        </div>
        <div class="folder_wrapper" ref="folderAboutMe" :style="folderAboutMeStyle">
          <button id="about_btn" class="btn_folder">
            <div class="folder">
              <div class="folder_icon">
                <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/folder1.png?raw=true" alt="">
              </div>
              <div class="folder_name">
                Обо мне
              </div>
            </div>
          </button>
        </div>
        <div class="folder_wrapper" ref="folderScills" :style="folderScillsStyle">
          <button class="btn_folder" id="btn_skills">
            <div class="folder">
              <div class="folder_icon">
                <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/folder1.png?raw=true" alt="">
              </div>
              <div class="folder_name">
                Навыки
              </div>
            </div>
          </button>
        </div>
        <div class="folder_wrapper" ref="folderPortfolio" :style="folderPortfolioStyle">
          <button class="btn_folder">
            <div class="folder">
              <div class="folder_icon">
                <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/folder1.png?raw=true" alt="">
              </div>
              <div class="folder_name">
                Портфолио
              </div>
            </div>
          </button>
        </div>
<!--        <div class="folder_wrapper" ref="folderResume" :style="folderResumeStyle">-->
<!--          <a class="btn_folder" href="./assets/images/logo-onix.jpg" download="">-->
<!--            <div class="folder">-->
<!--              <div class="folder_icon">-->
<!--                <img src="@/assets/images/ukraine-flag.jpg" alt="">-->
<!--              </div>-->
<!--              <div class="folder_name">-->
<!--                скачать резюме.doc-->
<!--              </div>-->
<!--            </div>-->
<!--          </a>-->
<!--        </div>-->
      </div>

      <div id="soc" class="open_folder_solo" onclick="style.zIndex = zindex++">
        <div class="open_folder_panel">
          <div class="open_folder_panel_close">
            <button id="close_soc" class="close_icon">
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div class="open_folder_panel_title">
            <span>Мои соц. сети</span>
          </div>
        </div>
        <div class="open_folder_content">
          <div class="folder_wrapper">
            <a class="btn_folder" target="_blank" href="https://vk.com/zanyy">
              <div class="folder">
                <div class="folder_icon">
                  <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/vk.png?raw=true" alt="">
                </div>
                <div class="folder_name">
                  vk
                </div>
              </div>
            </a>
          </div>
          <div class="folder_wrapper">
            <a class="btn_folder" target="_blank" href="https://www.facebook.com/zanyalbert">
              <div class="folder">
                <div class="folder_icon">
                  <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/facebook.png?raw=true" alt="">
                </div>
                <div class="folder_name">
                  facebook
                </div>
              </div>
            </a>
          </div>
          <div class="folder_wrapper">
            <a class="btn_folder" target="_blank" href="https://spb.hh.ru/resume/75f3285eff058554980039ed1f38786178507a">
              <div class="folder">
                <div class="folder_icon">
                  <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/hh.png?raw=true" alt="">
                </div>
                <div class="folder_name">
                  резюме на HH
                </div>
              </div>
            </a>
          </div>
          <div class="folder_wrapper">
            <a class="btn_folder" target="_blank" href="https://github.com/seuraltimez">
              <div class="folder">
                <div class="folder_icon">
                  <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/github.png?raw=true" alt="">
                </div>
                <div class="folder_name">
                  github
                </div>
              </div>
            </a>
          </div>
          <div class="folder_wrapper">
            <a class="btn_folder" target="_blank" href="https://www.instagram.com/zaaany/">
              <div class="folder">
                <div class="folder_icon">
                  <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/instagram.png?raw=true" alt="">
                </div>
                <div class="folder_name">
                  instagram
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div id="about" class="open_folder_solo" onclick="style.zIndex = zindex++">
        <div class="open_folder_panel">
          <div class="open_folder_panel_close">
            <button id="close_about" class="close_icon">
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div class="open_folder_panel_title">
            <span>Обо мне</span>
          </div>
        </div>
        <div class="open_folder_content">
          <div class="folder_wrapper">
            <a class="btn_folder" data-fancybox="" href="https://github.com/seuraltimez/desktopmac/blob/master/img/src/me-min.JPG?raw=true">
              <div class="folder">
                <div class="folder_icon">
                  <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/me-min.JPG?raw=true" alt="">
                </div>
                <div class="folder_name">
                  моя фотка.jpg
                </div>
              </div>
            </a>
          </div>
          <div class="folder_wrapper">
            <a class="btn_folder word" data-fancybox="" href="https://spb.hh.ru/resume/75f3285eff058554980039ed1f38786178507a">
              <div class="folder">
                <div class="folder_icon">
                  <img src="img/src/DOC.png" alt="">
                </div>
                <div class="folder_name">
                  обо мне.doc
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div id="skills" class="open_folder_solo" onclick="style.zIndex = zindex++">
        <div class="open_folder_panel">
          <div class="open_folder_panel_close">
            <button id="close_about" class="close_icon">
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div class="open_folder_panel_title">
            <span>Навыки</span>
          </div>
        </div>
        <div class="open_folder_content">
          <div class="folder_wrapper">
            <a class="btn_folder" data-fancybox="" href="https://github.com/seuraltimez/desktopmac/blob/master/img/src/me-min.JPG?raw=true">
              <div class="folder">
                <div class="folder_icon">
                  <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/me-min.JPG?raw=true" alt="">
                </div>
                <div class="folder_name">
                  моя фотка.jpg
                </div>
              </div>
            </a>
          </div>
          <div class="folder_wrapper">
            <a class="btn_folder word" data-fancybox="" href="https://spb.hh.ru/resume/75f3285eff058554980039ed1f38786178507a">
              <div class="folder">
                <div class="folder_icon">
                  <img src="img/src/DOC.png" alt="">
                </div>
                <div class="folder_name">
                  обо мне.doc
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useBattery } from '@vueuse/core'
import {onMounted, ref} from "vue";
import {useDraggable} from "@vueuse/core/index";

const { charging, level } = useBattery()

const getBatteryLevel = () => {
  const arr = String(level.value).split('');

  if(arr.length > 1) {
    return +arr.slice(2).join('');
  }

  return 100;
};

const folderSoc = ref(null);
const folderAboutMe = ref(null);
const folderScills = ref(null);
const folderPortfolio = ref(null);
const folderResume = ref(null);

useHead({
  titleTemplate: '%s - computer',
})

const folderSocStyle = useDraggable(folderSoc, {
  initialValue: { x: 0, y: 100 },
}).style;

const folderAboutMeStyle = useDraggable(folderAboutMe, {
  initialValue: { x: 0, y: 200 },
}).style;

const folderScillsStyle = useDraggable(folderScills, {
  initialValue: { x: 0, y: 300 },
}).style;

const folderPortfolioStyle = useDraggable(folderPortfolio, {
  initialValue: { x: 0, y: 400 },
}).style;

const folderResumeStyle = useDraggable(folderResume, {
  initialValue: { x: 0, y: 500 },
}).style;
</script>

<style scoped lang="scss">
@-webkit-keyframes "fancybox-rotate" {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes "fancybox-rotate" {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

.folder_wrapper {
  position: fixed;
}

.fancybox-active {
  height: auto;
}
.fancybox-is-hidden {
  left: -9999px;
  margin: 0;
  position: absolute !important;
  top: -9999px;
  visibility: hidden;
}
.fancybox-container {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  height: 100%;
  left: 0;
  position: fixed;
  -webkit-tap-highlight-color: transparent;
  top: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  width: 100%;
  z-index: 99992;
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  [data-selectable=true] {
    cursor: text;
  }
}
.fancybox-bg {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: #1e1e1e;
  opacity: 0;
  -webkit-transition-duration: inherit;
  -o-transition-duration: inherit;
  transition-duration: inherit;
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-timing-function: cubic-bezier(.47, 0, .74, .71);
  -o-transition-timing-function: cubic-bezier(.47, 0, .74, .71);
  transition-timing-function: cubic-bezier(.47, 0, .74, .71);
}
.fancybox-inner {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.fancybox-outer {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}
.fancybox-stage {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  direction: ltr;
  overflow: visible;
  -webkit-transform: translate3d(0, 0, 0);
  z-index: 99994;
}
.fancybox-is-open {
  .fancybox-bg {
    opacity: .87;
    -webkit-transition-timing-function: cubic-bezier(.22, .61, .36, 1);
    -o-transition-timing-function: cubic-bezier(.22, .61, .36, 1);
    transition-timing-function: cubic-bezier(.22, .61, .36, 1);
  }
  .fancybox-stage {
    overflow: hidden;
  }
}
.fancybox-caption {
  direction: ltr;
  opacity: 0;
  position: absolute;
  -webkit-transition: opacity .25s, visibility 0s linear .25s;
  -o-transition: opacity .25s, visibility 0s linear .25s;
  transition: opacity .25s, visibility 0s linear .25s;
  visibility: hidden;
  z-index: 99997;
  bottom: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  left: 0;
  line-height: 1.5;
  padding: 25px 44px 25px 44px;
  right: 0;
  &::before {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAEtCAQAAABjBcL7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHRJREFUKM+Vk8EOgDAIQ0vj/3+xBw8qIZZueFnIKC90MCAI8DlrkHGeqqGIU6lVigrBtpCWqeRWoHDNqs0F7VNVBVxmHRlvoVqjaYkdnDIaivH2HqZ5+oZj3JUzWB+cOz4G48Bg+tsJ/tqu4dLC/4Xb+0GcF5BwBC0AA53qAAAAAElFTkSuQmCC);
    background-repeat: repeat-x;
    background-size: contain;
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: -25px;
    z-index: -1;
  }
  &::after {
    border-bottom: 1px solid rgba(255, 255, 255, .3);
    content: '';
    display: block;
    left: 44px;
    position: absolute;
    right: 44px;
    top: 0;
  }
  a {
    color: #ccc;
    text-decoration: none;
    &:link {
      color: #ccc;
      text-decoration: none;
    }
    &:visited {
      color: #ccc;
      text-decoration: none;
    }
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
}
.fancybox-infobar {
  direction: ltr;
  opacity: 0;
  position: absolute;
  -webkit-transition: opacity .25s, visibility 0s linear .25s;
  -o-transition: opacity .25s, visibility 0s linear .25s;
  transition: opacity .25s, visibility 0s linear .25s;
  visibility: hidden;
  z-index: 99997;
  color: #ccc;
  font-size: 13px;
  -webkit-font-smoothing: subpixel-antialiased;
  height: 44px;
  left: 0;
  line-height: 44px;
  min-width: 44px;
  mix-blend-mode: difference;
  padding: 0 10px;
  pointer-events: none;
  text-align: center;
  top: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.fancybox-navigation {
  .fancybox-button {
    direction: ltr;
    opacity: 0;
    position: absolute;
    -webkit-transition: opacity .25s, visibility 0s linear .25s;
    -o-transition: opacity .25s, visibility 0s linear .25s;
    transition: opacity .25s, visibility 0s linear .25s;
    visibility: hidden;
    z-index: 99997;
    height: 38px;
    opacity: 0;
    padding: 6px;
    position: absolute;
    top: 50%;
    width: 38px;
    &::after {
      content: '';
      left: -25px;
      padding: 50px;
      position: absolute;
      top: -25px;
    }
  }
  .fancybox-button--arrow_left {
    left: 6px;
  }
  .fancybox-button--arrow_right {
    right: 6px;
  }
}
.fancybox-toolbar {
  direction: ltr;
  opacity: 0;
  position: absolute;
  -webkit-transition: opacity .25s, visibility 0s linear .25s;
  -o-transition: opacity .25s, visibility 0s linear .25s;
  transition: opacity .25s, visibility 0s linear .25s;
  visibility: hidden;
  z-index: 99997;
  right: 0;
  top: 0;
}
.fancybox-show-caption {
  .fancybox-caption {
    opacity: 1;
    -webkit-transition: opacity .25s, visibility 0s;
    -o-transition: opacity .25s, visibility 0s;
    transition: opacity .25s, visibility 0s;
    visibility: visible;
  }
}
.fancybox-show-infobar {
  .fancybox-infobar {
    opacity: 1;
    -webkit-transition: opacity .25s, visibility 0s;
    -o-transition: opacity .25s, visibility 0s;
    transition: opacity .25s, visibility 0s;
    visibility: visible;
  }
}
.fancybox-show-nav {
  .fancybox-navigation {
    .fancybox-button {
      opacity: 1;
      -webkit-transition: opacity .25s, visibility 0s;
      -o-transition: opacity .25s, visibility 0s;
      transition: opacity .25s, visibility 0s;
      visibility: visible;
      -webkit-transition: opacity .25s, visibility 0s, color .25s;
      -o-transition: opacity .25s, visibility 0s, color .25s;
      transition: opacity .25s, visibility 0s, color .25s;
    }
  }
}
.fancybox-show-toolbar {
  .fancybox-toolbar {
    opacity: 1;
    -webkit-transition: opacity .25s, visibility 0s;
    -o-transition: opacity .25s, visibility 0s;
    transition: opacity .25s, visibility 0s;
    visibility: visible;
  }
}
.fancybox-slide {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: none;
  height: 100%;
  left: 0;
  outline: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 44px;
  position: absolute;
  text-align: center;
  top: 0;
  transition-property: opacity, -webkit-transform;
  -webkit-transition-property: opacity, -webkit-transform;
  -o-transition-property: transform, opacity;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  white-space: normal;
  width: 100%;
  z-index: 99994;
  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    margin-right: -.25em;
    vertical-align: middle;
    width: 0;
  }
}
.fancybox-is-sliding {
  .fancybox-slide {
    display: block;
  }
}
.fancybox-slide--current {
  display: block;
}
.fancybox-slide--next {
  display: block;
  z-index: 99995;
}
.fancybox-slide--previous {
  display: block;
}
.fancybox-slide--image {
  overflow: visible;
  padding: 44px 0;
  &::before {
    display: none;
  }
  .fancybox-content {
    -webkit-animation-timing-function: cubic-bezier(.5, 0, .14, 1);
    animation-timing-function: cubic-bezier(.5, 0, .14, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    left: 0;
    margin: 0;
    max-width: none;
    overflow: visible;
    padding: 0;
    position: absolute;
    top: 0;
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    transition-property: opacity, -webkit-transform;
    -webkit-transition-property: opacity, -webkit-transform;
    -o-transition-property: transform, opacity;
    transition-property: transform, opacity;
    transition-property: transform, opacity, -webkit-transform;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 99995;
  }
  .fancybox-close-small {
    color: #ccc;
    padding: 5px;
    right: -12px;
    top: -44px;
    &:hover {
      svg {
        background: 0 0;
        color: #fff;
      }
    }
  }
}
.fancybox-slide--html {
  padding: 6px 6px 0 6px;
  .fancybox-content {
    margin-bottom: 6px;
  }
}
.fancybox-slide--iframe {
  padding: 44px 44px 0;
  .fancybox-content {
    height: 100%;
    margin: 0;
    overflow: visible;
    padding: 0;
    width: 100%;
    background: #fff;
    height: -webkit-calc(100% - 44px);
    height: calc(100% - 44px);
    margin-bottom: 44px;
  }
  .fancybox-close-small {
    color: #ccc;
    padding: 5px;
    right: -12px;
    top: -44px;
    &:hover {
      svg {
        background: 0 0;
        color: #fff;
      }
    }
  }
}
.fancybox-content {
  background: #fff;
  display: inline-block;
  margin: 0 0 6px 0;
  max-width: 100%;
  overflow: auto;
  padding: 0;
  padding: 24px;
  position: relative;
  text-align: left;
  vertical-align: middle;
}
.fancybox-can-zoomOut {
  .fancybox-content {
    cursor: zoom-out;
  }
}
.fancybox-can-zoomIn {
  .fancybox-content {
    cursor: zoom-in;
  }
}
.fancybox-can-drag {
  .fancybox-content {
    cursor: grab;
  }
}
.fancybox-is-dragging {
  .fancybox-content {
    cursor: grabbing;
  }
}
.fancybox-image {
  background: 0 0;
  border: 0;
  height: 100%;
  left: 0;
  margin: 0;
  max-height: none;
  max-width: none;
  padding: 0;
  position: absolute;
  top: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
}
.fancybox-spaceball {
  background: 0 0;
  border: 0;
  height: 100%;
  left: 0;
  margin: 0;
  max-height: none;
  max-width: none;
  padding: 0;
  position: absolute;
  top: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  z-index: 1;
}
.fancybox-slide--map {
  .fancybox-content {
    height: 100%;
    margin: 0;
    overflow: visible;
    padding: 0;
    width: 100%;
    background: #e5e3df;
  }
}
.fancybox-slide--video {
  .fancybox-content {
    height: 100%;
    margin: 0;
    overflow: visible;
    padding: 0;
    width: 100%;
    background: #000;
  }
  .fancybox-close-small {
    color: #ccc;
    padding: 5px;
    right: -12px;
    top: -44px;
    &:hover {
      svg {
        background: 0 0;
        color: #fff;
      }
    }
  }
}
.fancybox-iframe {
  background: 0 0;
  border: 0;
  height: 100%;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;
  vertical-align: top;
}
.fancybox-video {
  background: 0 0;
  border: 0;
  height: 100%;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;
}
.fancybox-error {
  background: #fff;
  cursor: default;
  max-width: 400px;
  padding: 40px;
  width: 100%;
  p {
    color: #444;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    padding: 0;
  }
}
.fancybox-button {
  background: rgba(30, 30, 30, .6);
  border: 0;
  border-radius: 0;
  cursor: pointer;
  display: inline-block;
  height: 44px;
  margin: 0;
  outline: 0;
  padding: 10px;
  -webkit-transition: color .2s;
  -o-transition: color .2s;
  transition: color .2s;
  vertical-align: top;
  width: 44px;
  color: #ccc;
  &:link {
    color: #ccc;
  }
  &:visited {
    color: #ccc;
  }
  &:focus {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
  svg {
    display: block;
    overflow: visible;
    position: relative;
    shape-rendering: geometricPrecision;
    path {
      fill: transparent;
      stroke: currentColor;
      stroke-linejoin: round;
      stroke-width: 3;
    }
  }
}
.fancybox-button.disabled {
  color: #888;
  cursor: default;
  &:hover {
    color: #888;
    cursor: default;
  }
}
.fancybox-button[disabled] {
  color: #888;
  cursor: default;
  &:hover {
    color: #888;
    cursor: default;
  }
}
.fancybox-button--play {
  svg {
    path {
      &:nth-child(2) {
        display: none;
      }
      fill: currentColor;
    }
  }
}
.fancybox-button--pause {
  svg {
    path {
      &:nth-child(1) {
        display: none;
      }
    }
  }
}
.fancybox-button--share {
  svg {
    path {
      fill: currentColor;
      stroke-width: 1;
    }
  }
}
.fancybox-button--thumbs {
  svg {
    path {
      fill: currentColor;
    }
  }
}
.fancybox-close-small {
  background: 0 0;
  border: 0;
  border-radius: 0;
  color: #555;
  cursor: pointer;
  height: 44px;
  margin: 0;
  padding: 6px;
  position: absolute;
  right: 0;
  top: 0;
  width: 44px;
  z-index: 10;
  svg {
    fill: transparent;
    opacity: .8;
    stroke: currentColor;
    stroke-width: 1.5;
    -webkit-transition: stroke .1s;
    -o-transition: stroke .1s;
    transition: stroke .1s;
  }
  &:focus {
    outline: 0;
  }
  &:hover {
    svg {
      opacity: 1;
    }
  }
}
.fancybox-is-scaling {
  .fancybox-close-small {
    display: none;
  }
}
.fancybox-is-zoomable.fancybox-can-drag {
  .fancybox-close-small {
    display: none;
  }
}
.fancybox-loading {
  -webkit-animation: fancybox-rotate .8s infinite linear;
  animation: fancybox-rotate .8s infinite linear;
  background: 0 0;
  border: 6px solid rgba(100, 100, 100, .5);
  border-radius: 100%;
  border-top-color: #fff;
  height: 60px;
  left: 50%;
  margin: -30px 0 0 -30px;
  opacity: .6;
  padding: 0;
  position: absolute;
  top: 50%;
  width: 60px;
  z-index: 99999;
}
.fancybox-animated {
  -webkit-transition-timing-function: cubic-bezier(0, 0, .25, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, .25, 1);
  transition-timing-function: cubic-bezier(0, 0, .25, 1);
}
.fancybox-fx-slide.fancybox-slide--previous {
  opacity: 0;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}
.fancybox-fx-slide.fancybox-slide--next {
  opacity: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
.fancybox-fx-slide.fancybox-slide--current {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.fancybox-fx-fade.fancybox-slide--next {
  opacity: 0;
  -webkit-transition-timing-function: cubic-bezier(.19, 1, .22, 1);
  -o-transition-timing-function: cubic-bezier(.19, 1, .22, 1);
  transition-timing-function: cubic-bezier(.19, 1, .22, 1);
}
.fancybox-fx-fade.fancybox-slide--previous {
  opacity: 0;
  -webkit-transition-timing-function: cubic-bezier(.19, 1, .22, 1);
  -o-transition-timing-function: cubic-bezier(.19, 1, .22, 1);
  transition-timing-function: cubic-bezier(.19, 1, .22, 1);
}
.fancybox-fx-fade.fancybox-slide--current {
  opacity: 1;
}
.fancybox-fx-zoom-in-out.fancybox-slide--previous {
  opacity: 0;
  -webkit-transform: scale3d(1.5, 1.5, 1.5);
  transform: scale3d(1.5, 1.5, 1.5);
}
.fancybox-fx-zoom-in-out.fancybox-slide--next {
  opacity: 0;
  -webkit-transform: scale3d(.5, .5, .5);
  transform: scale3d(.5, .5, .5);
}
.fancybox-fx-zoom-in-out.fancybox-slide--current {
  opacity: 1;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}
.fancybox-fx-rotate.fancybox-slide--previous {
  opacity: 0;
  -webkit-transform: rotate(-360deg);
  -ms-transform: rotate(-360deg);
  transform: rotate(-360deg);
}
.fancybox-fx-rotate.fancybox-slide--next {
  opacity: 0;
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}
.fancybox-fx-rotate.fancybox-slide--current {
  opacity: 1;
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
}
.fancybox-fx-circular.fancybox-slide--previous {
  opacity: 0;
  -webkit-transform: scale3d(0, 0, 0) translate3d(-100%, 0, 0);
  transform: scale3d(0, 0, 0) translate3d(-100%, 0, 0);
}
.fancybox-fx-circular.fancybox-slide--next {
  opacity: 0;
  -webkit-transform: scale3d(0, 0, 0) translate3d(100%, 0, 0);
  transform: scale3d(0, 0, 0) translate3d(100%, 0, 0);
}
.fancybox-fx-circular.fancybox-slide--current {
  opacity: 1;
  -webkit-transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
  transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
}
.fancybox-fx-tube.fancybox-slide--previous {
  -webkit-transform: translate3d(-100%, 0, 0) scale(.1) skew(-10deg);
  transform: translate3d(-100%, 0, 0) scale(.1) skew(-10deg);
}
.fancybox-fx-tube.fancybox-slide--next {
  -webkit-transform: translate3d(100%, 0, 0) scale(.1) skew(10deg);
  transform: translate3d(100%, 0, 0) scale(.1) skew(10deg);
}
.fancybox-fx-tube.fancybox-slide--current {
  -webkit-transform: translate3d(0, 0, 0) scale(1);
  transform: translate3d(0, 0, 0) scale(1);
}
.fancybox-thumbs {
  background: #fff;
  bottom: 0;
  display: none;
  margin: 0;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  padding: 2px 2px 4px 2px;
  position: absolute;
  right: 0;
  -webkit-tap-highlight-color: transparent;
  top: 0;
  width: 212px;
  z-index: 99995;
  >ul {
    font-size: 0;
    height: 100%;
    list-style: none;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    position: absolute;
    position: relative;
    white-space: nowrap;
    width: 100%;
    >li {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      cursor: pointer;
      float: left;
      height: 75px;
      margin: 2px;
      max-height: -webkit-calc(100% - 8px);
      max-height: calc(100% - 8px);
      max-width: -webkit-calc(50% - 4px);
      max-width: calc(50% - 4px);
      outline: 0;
      overflow: hidden;
      padding: 0;
      position: relative;
      -webkit-tap-highlight-color: transparent;
      width: 100px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      &:before {
        border: 4px solid #4ea7f9;
        bottom: 0;
        content: '';
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
        -webkit-transition: all .2s cubic-bezier(.25, .46, .45, .94);
        -o-transition: all .2s cubic-bezier(.25, .46, .45, .94);
        transition: all .2s cubic-bezier(.25, .46, .45, .94);
        z-index: 99991;
      }
    }
  }
  .fancybox-thumbs-active {
    &:before {
      opacity: 1;
    }
  }
}
.fancybox-thumbs-x {
  overflow-x: auto;
  overflow-y: hidden;
  >ul {
    overflow: hidden;
  }
}
.fancybox-show-thumbs {
  .fancybox-thumbs {
    display: block;
  }
  .fancybox-inner {
    right: 212px;
  }
}
.fancybox-thumbs-y {
  >ul {
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-track {
      background: #fff;
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    }
    &::-webkit-scrollbar-thumb {
      background: #2a2a2a;
      border-radius: 10px;
    }
  }
}
.fancybox-thumbs-loading {
  background: rgba(0, 0, 0, .1);
}
body {
  font-family: Lato, sans-serif;
}
a {
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
}
.section_fullpage {
  background-image: url(https://github.com/seuraltimez/desktopmac/blob/master/img/src/bg.jpg?raw=true);
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.section_fullpage_top {
  -webkit-backdrop-filter: blur(300px);
  backdrop-filter: blur(300px);
  background-color: rgba(0, 0, 0, .5);
  padding: 1px 0;
  position: absolute;
  width: 100%;
  z-index: 1;
  a {
    color: #fff;
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
  .menu_topbar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: 14px;
    .menu_topbar_left {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      color: #fff;
      span {
        font-weight: 900;
      }
      .mini_logo {
        max-width: 30px;
        height: 30px;
        margin: 0 20px;

        img {
          width: 100%;
        }
      }
    }
    .menu_topbar_right {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      color: #fff;
      .lang {
        margin: 0 30px;
        max-width: 15px;
        height: 10px;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .bluetooth {
        margin-right: 15px;
        font-size: 18px;
      }
      .wifi {
        margin-right: 15px;
        font-size: 18px;
      }
      .battery {
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: 13px;
          margin-right: 3px;
        }
        img {
          max-width: 20px;
          margin: 0 5px;
        }
      }
      .date {
        margin-right: 20px;
        #dayweek {
          margin-right: 2px;
        }
        #datamonth {
          margin-right: 5px;
        }
      }
      .namebook {
        margin-right: 20px;
      }
      .search {
        margin-right: 20px;
      }
      .tollbar {
        margin-right: 20px;
        img {
          width: 18px;
        }
      }
    }
  }
}
.desktop {
  width: 100%;
  padding: 54px 25px;
  height: 100%;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
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
      padding: 5px;
      padding-top: 0;
      padding-right: 0;
      padding-left: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      text-align: center;
    }
  }
  .desktop_folders {
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
  }
}
.open_folder_solo {
  visibility: hidden;
  opacity: 0;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  width: 100%;
  max-width: 464px;
  -webkit-transition: .3s;
  -o-transition: .3s;
  transition: .3s;
  .open_folder_panel {
    background: #d2cece;
    padding: 5px 10px;
    position: relative;
    border-radius: 10px 10px 0 0;
    margin-bottom: -1px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: grab;
    .open_folder_panel_close {
      .close_icon {
        width: 16px;
        height: 16px;
        background-color: #ff3d37;
        border-radius: 50%;
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
        text-decoration: none;
        outline: 0;
        border: none;
        cursor: pointer;
        padding: 0;
        i {
          opacity: 0;
          color: #a60000;
          font-size: 11px;
          position: relative;
          left: .5px;
        }
        &:hover {
          i {
            opacity: 1;
          }
        }
      }
    }
    .open_folder_panel_title {
      text-align: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      width: 96%;
      font-size: 12px;
      position: relative;
      span {
        position: relative;
        line-height: 1;
        &:before {
          position: absolute;
          left: -20px;
          top: 0;
          content: '';
          width: 15px;
          height: 13px;
          background-size: 15px;
          background-repeat: no-repeat;
        }
      }
    }
  }
  .open_folder_content {
    background: #2b2a29;
    padding: 2rem 2rem;
    border-radius: 0 0 10px 10px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    color: #fff;
    max-width: 464px;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    .folder_icon {
      img {
        border-radius: 6px;
      }
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
  }
}
#soc.open_folder_solo {
  position: absolute;
  top: 10%;
  right: 10%;
}
#about.open_folder_solo {
  position: absolute;
  top: 15%;
  right: 15%;
}
#skills.open_folder_solo {
  position: absolute;
  top: 20%;
  right: 20%;
}
.open_folder_solo.active {
  visibility: visible;
  opacity: 1;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.opener_tollbar {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: 0 !important;
}
body.active {
  .tollbar_opening {
    top: 29px;
    right: 0;
    z-index: 2;
  }
}
.tollbar_opening {
  position: absolute;
  width: 350px;
  top: 29px;
  right: -400px;
  opacity: 1;
  margin-left: auto;
  margin-right: 0;
  -webkit-transition: .5s;
  -o-transition: .5s;
  transition: .5s;
  z-index: 1;
  height: 100%;
  background: rgba(55, 55, 55, .9);
  border-left: 1px solid #a6a9b2;
  &:before {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    content: '';
    -webkit-filter: blur(5px);
    filter: blur(5px);
    z-index: -1;
    background: inherit;
  }
  .top_tabs {
    padding: 15px 15px;
    border-bottom: 1px solid #a6a9b2;
    font-size: 13px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    .tab_today {
      .today {
        padding: 2px 50px;
        background-color: #625f60;
        border-radius: 4px 0 0 4px;
        color: #eaeaea;
      }
      .today.active {
        background-color: #b4b3b4;
        color: #262525;
      }
    }
    .tab_notifications {
      .notifications {
        padding: 2px 35px;
        background-color: #625f60;
        border-radius: 0 4px 4px 0;
        color: #eaeaea;
      }
      .notifications.active {
        background-color: #b4b3b4;
        color: #262525;
      }
    }
  }
  .tollbar_dayweek_and_data {
    padding-left: 40px;
    padding-top: 40px;
    .tollbar_dayweek {
      font-size: 34px;
      color: #eaeaea;
      font-weight: 100;
    }
  }
  .tollbar_datamonth {
    span {
      font-size: 34px;
      color: #eaeaea;
      font-weight: 100;
      line-height: 1;
    }
  }
}
svg {
  position: absolute;
}
@media all and (max-width:800px) {
  .fancybox-thumbs {
    width: 110px;
    >ul {
      >li {
        max-width: -webkit-calc(100% - 10px);
        max-width: calc(100% - 10px);
      }
    }
  }
  .fancybox-show-thumbs {
    .fancybox-inner {
      right: 110px;
    }
  }
}
</style>