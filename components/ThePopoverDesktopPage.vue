<template>
  <div class="popover">
    <div class="popover__menu" ref="target" :style="{'top': props.positionY + 'px', 'left': props.positionX + 'px'}">
      <ul class="popover__menu-list" v-if="popoverOptions.create">
        <li class="popover__menu-list-item" @click="create">
          <button class="popover__menu-list-item__button">
            <Icon name="ep:circle-plus-filled"/>
            Create a folder
          </button>
        </li>
      </ul>
      <ul class="popover__menu-list" v-if="popoverOptions.rename">
        <li class="popover__menu-list-item" @click="rename">
          <button class="popover__menu-list-item__button">
            <Icon name="ep:edit-pen"/>
            Rename
          </button>
        </li>
      </ul>
      <ul class="popover__menu-list" v-if="popoverOptions.rename">
        <li class="popover__menu-list-item" @click="copy">
          <button class="popover__menu-list-item__button">
            <Icon name="bxs:add-to-queue"/>
            Copy
          </button>
        </li>
      </ul>
      <ul class="popover__menu-list" v-if="popoverOptions.delete">
        <li class="popover__menu-list-item" @click="remove">
          <button class="popover__menu-list-item__button menu-button--delete">
            <Icon name="ep:close-bold"/>
            Delete
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {onClickOutside} from '@vueuse/core'
import {useDesktopStore} from "../store/desktop";

const emit = defineEmits([
  'close',
  'remove',
  'copy',
  'create',
  'editMode',
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

const copy = () => {
  emit('copy', 'copy');
}

onClickOutside(target, () => emit('close'));
</script>

<style scoped lang="scss">
.popover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;

  .popover__menu {
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-secondary);
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(#404040, 0.15);
    position: fixed;

    .popover__menu-list {
      margin: 0;
      display: block;
      width: 100%;
      padding: 8px;

      & + .popover__menu-list {
        border-top: 1px solid #ddd;
      }

      .popover__menu-list-item {
        position: relative;

        .popover__menu-list-item__button {
          font: inherit;
          border: 0;
          padding: 8px 36px 8px 8px;
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
      }
    }
  }
}
</style>