<template>
  <div class="container">
    <!-- code here -->
    <div class="menu" ref="target" :style="{'top': props.positionY + 'px', 'left': props.positionX + 'px'}">
      <ul class="menu-list" v-if="popoverOptions.rename">
        <li class="menu-item" @click="rename"><button class="menu-button"><Icon name="ep:edit-pen" />Rename</button></li>
      </ul>
      <ul class="menu-list">
        <li class="menu-item"><button class="menu-button menu-button--black"><i data-feather="circle"></i>No status<i data-feather="chevron-right"></i></button>
          <ul class="menu-sub-list">
            <li class="menu-item"><button class="menu-button menu-button--orange"><i data-feather="square"></i>Needs review</button></li>
            <li class="menu-item"><button class="menu-button menu-button--purple"><i data-feather="octagon"></i>In progress</button></li>
            <li class="menu-item"><button class="menu-button menu-button--green"><i data-feather="triangle"></i>Approved</button></li>
            <li class="menu-item"><button class="menu-button menu-button--black menu-button--checked"><i data-feather="circle"></i>No status<i data-feather="check"></i></button></li>
          </ul>
        </li>
        <li class="menu-item" v-if="popoverOptions.create" @click="create"><button class="menu-button"><Icon name="ep:circle-plus-filled" />Create a folder</button></li>
      </ul>
      <ul class="menu-list" v-if="popoverOptions.delete">
        <li class="menu-item" @click="remove"><button class="menu-button menu-button--delete"><Icon name="ep:close-bold" />Delete</button></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { onClickOutside } from '@vueuse/core'
import {useDesktopStore} from "../store/desktop";

const emit = defineEmits([
    'close',
    'editMode',
    'remove',
])

const props = defineProps(({
  positionX: Number,
  positionY: Number,
  popoverOptions: Object,
}))

const desktopStore = useDesktopStore();

const target = ref(null);

const rename = () => {
  desktopStore.onEditMode();
  emit('close', false);
}

const remove = () => {
  desktopStore.onRemoveMode();
  emit('remove', 'remove');
}

const create = () => {
  emit('create', 'create');
}

onClickOutside(target, () => emit('close', false));
</script>

<style scoped lang="scss">

.menu {
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-secondary);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(#404040, 0.15);
  position: fixed;
}

.menu-list {
  margin: 0;
  display: block;
  width: 100%;
  padding: 8px;
  & + .menu-list {
    border-top: 1px solid #ddd;
  }
}
.menu-sub-list {
  display: none;
  padding: 8px;
  background-color: var(--color-bg-secondary);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(#404040, 0.15);
  position: absolute;
  left: 100%;
  right: 0;
  z-index: 100;
  width: 100%;
  top: 0;
  flex-direction: column;
  // &:after {
  //   content: "";
  //   position: absolute;
  //   left: -12px;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   display: block;
  //   outline: 2px solid hotpink;
  // }
  &:hover {
    display: flex;
  }
}

.menu-item {
  position: relative;
}

.menu-button {
  font: inherit;
  border: 0;
  padding: 8px 8px;
  padding-right: 36px;
  width: 100%;
  border-radius: 8px;
  text-align: left;
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--color-bg-secondary);
  &:hover {
    background-color: var(--color-bg-primary-offset);
    & + .menu-sub-list {
      display: flex;
    }
    svg {
      stroke: var(--color-text-primary);
    }
  }
  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    stroke: var(--color-text-primary-offset);
    &:nth-of-type(2) {
      margin-right: 0;
      position: absolute;
      right: 8px;
    }
  }

  &--delete {
    &:hover {
      color: var(--color-red);
      svg:first-of-type {
        stroke: var(--color-red);
      }
    }
  }

  &--download {
    &:hover {
      color: var(--color-green);
      svg:first-of-type {
        stroke: var(--color-green);
      }
    }
  }

  &--orange {
    svg:first-of-type {
      stroke: var(--color-orange);
    }
  }

  &--green {
    svg:first-of-type {
      stroke: var(--color-green);
    }
  }
  &--purple {
    svg:first-of-type {
      stroke: var(--color-purple);
    }
  }
  &--black {
    svg:first-of-type {
      stroke: var(--color-black);
    }
  }

  &--checked {
    svg:nth-of-type(2) {
      stroke: var(--color-purple);
    }
  }
}

// Codepen spesific styling - only to center the elements in the pen preview and viewport
.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
// End Codepen spesific styling
</style>