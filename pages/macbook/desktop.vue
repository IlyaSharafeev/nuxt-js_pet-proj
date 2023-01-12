<template>
  <section id="fullpage" class="section_fullpage">
    <div class="section_fullpage_top">
      <div class="menu_topbar">
        <div class="menu_topbar_left">
          <div class="mini_logo">
            <img src="@/assets/images/logo-desktop.png" alt="logo-desktop">
          </div>
          <NuxtLink to="/">
            <span>Come home</span>
          </NuxtLink>
        </div>
        <div class="menu_topbar_right">
          <div class="battery">
            <span>{{ getBatteryLevel() }}%</span>
            <img v-if="charging" src="@/assets/images/charging-battery.png" alt="charging-battery"/>
            <img v-show="!charging" src="@/assets/images/battery.png" alt="charging-battery"/>
          </div>
          <div class="namebook">
            {{ desktopStore.auth.name }}
          </div>

          <div class="tollbar">
            <button class="opener_tollbar">
              <img src="https://github.com/seuraltimez/desktopmac/blob/master/img/src/tollbar.png?raw=true" alt="">
            </button>
          </div>

          <div class="upload">
            <UploaderImage/>
          </div>
        </div>
      </div>
    </div>

    <div class="desktop">
      <div class="desktop_folders">
        <FoldersDesktop/>
      </div>

      <ThePopoverDesktopPage @close="closePopovers" @copy="mouseRightClick(e, 'copy')"
                             @remove="mouseRightClick(e, 'remove')" @create="mouseRightClick(e, 'create')"
                             v-if="showPopovers" :popoverOptions="popoverOptions" :positionX="positionXPopovers"
                             :positionY="positionYPopovers"/>
    </div>
  </section>
</template>

<script setup>
import {useBattery} from '@vueuse/core'
import {onBeforeUnmount, onMounted, ref} from "vue";
import ThePopoverDesktopPage from "/components/ThePopoverDesktopPage.vue";
import FoldersDesktop from "../../components/FoldersDesktop";
import {useDesktopStore} from "../../store/desktop";

const {charging, level} = useBattery()
const desktopStore = useDesktopStore();

useHead({
  titleTemplate: '%s - computer',
})

definePageMeta({
  middleware: ["desktop-auth"]
})

// disabling the default modal on right click and calling a function on click
onMounted(() => {
  document.oncontextmenu = function () {
    mouseRightClick(event)
    return false;
  };
  document.body.style.background = `url(${desktopStore.background})`;
})

onBeforeUnmount(() => {
  document.oncontextmenu = function () {
    mouseRightClick(event)
    return true;
  };
})

const getBatteryLevel = () => {
  const arr = String(level.value).split('');

  if (arr.length > 1) {
    return +arr.slice(2).join('');
  }

  return 100;
};

const showPopovers = ref(false);
const positionXPopovers = ref();
const positionYPopovers = ref();
const popoverOptions = {};

const getRandomInt = (min = 0, max = 9999) => {
  const number = Math.floor(min + Math.random() * (max - min))
  if (desktopStore.foldersList.some(obj => obj.id === number)) return getRandomInt(min, max)
  else {
    return number
  }
};

const mouseRightClick = (event, option) => {
  //fix cursor click globally
  if (event) {
    const position = {
      x: event.pageX,
      y: event.pageY,
    }
    desktopStore.setPositionPointer(position);
  }

  if (option === 'create') {
    const randomId = getRandomInt();
    const newFolder = {
      id: randomId,
      title: '',
      defaultPositionX: desktopStore.getPositionPointer.x,
      defaultPositionY: desktopStore.getPositionPointer.y,
    }
    desktopStore.createFolder(newFolder);
    closePopovers();
    return;
  }

  if (option === 'remove') {
    desktopStore.removeFolder(desktopStore.editFolder);
    closePopovers();
    return;
  }

  if (option === 'copy') {
    const randomId = getRandomInt();
    const insertFolder = {
      id: randomId,
      title: desktopStore.copyFolder.title,
      defaultPositionX: desktopStore.getPositionPointer.x,
      defaultPositionY: desktopStore.getPositionPointer.y,
    }
    desktopStore.insertFolder(insertFolder);
    closePopovers();
    return;
  }

  //If you click on a folder
  if (event?.target.closest("div[data-folder]")) {
    const editFolderId = event.target.closest("div[data-folder]").getAttribute("data-folder");

    desktopStore.setCopyFolder(editFolderId);

    popoverOptions.rename = true;
    popoverOptions.create = false;
    popoverOptions.delete = true;
    positionXPopovers.value = event.pageX;
    positionYPopovers.value = event.pageY;
    showPopovers.value = true;
    desktopStore.assignEditFolder(editFolderId);
    return;
  }
  //If you didn't click on the folder
  positionXPopovers.value = event.pageX;
  positionYPopovers.value = event.pageY;
  popoverOptions.rename = false;
  popoverOptions.create = true;
  popoverOptions.delete = false;
  showPopovers.value = true;
};

const closePopovers = () => {
  showPopovers.value = false;
}
</script>

<style scoped lang="scss">
body {
  height: 100vh;
}

a {
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
}

svg {
  position: absolute;
}

body.active {
  .tollbar_opening {
    top: 29px;
    right: 0;
    z-index: 2;
  }
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
      display: flex;
      align-items: center;
      color: #fff;

      .lang {
        margin: 0 10px;

        .dropdown-toggle {
          padding: 0 10px;
          margin-top: 4px;
          background: none;
          border: none;

          &::after {
            //display: none;
            content: initial;
          }
        }

        .dropdown-menu {
          background: none;
          min-width: initial;
          width: auto;
          padding: 0;

          a {
            &:hover {
              background: rgba(255, 255, 255, 0.15);
            }
          }

          img {
            width: 25px;
          }
        }


        img {
          width: 20px;
        }
      }

      .battery {
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
        padding: 0 20px;
      }

      .search {
        margin-right: 20px;
      }

      .tollbar {
        padding: 0 10px;

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
    .folder-icon {
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

    .folder-name {
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
    .folder-wrapper_btn {
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

        .folder-icon {
          background-color: rgba(0, 0, 0, .3);
          border-color: rgba(160, 172, 191, .3);
        }
      }
    }
  }
}

.opener_tollbar {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: 0 !important;
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
</style>