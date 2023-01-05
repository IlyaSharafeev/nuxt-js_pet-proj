<template>
  <div>
    <h1>Sign up</h1>
    <h2>and go to desktop</h2>
    <form>
      <ul class="items">
        <li :class="{'active': activeList === 1}"></li>
        <li :class="{'active': activeList === 2}"></li>
        <li :class="{'active': activeList === 3}"></li>
        <li :class="{'active': activeList === 4}"></li>
      </ul>
      <fieldset class="username" v-if="activeList === 1" :class="{'enable': activeList === 1}">
        <div class="icon left"><em class="user"></em></div>
        <input type="text" name="username" placeholder="Username" v-model="v$.name.$model"/>
        <div class="icon right button"><em class="arrow"></em></div>
        <p v-if="v$.name.$error" class="error">{{v$.name.$errors[0].$message}}</p>
      </fieldset>
      <fieldset class="mail" v-if="activeList === 2" :class="{'enable': activeList === 2}">
        <div class="icon left"><em class="letter"></em></div>
        <input type="email" name="email" placeholder="Email" v-model.trim="v$.email.$model"/>
        <div class="icon right button"><em class="arrow"></em></div>
        <p v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</p>
      </fieldset>
      <fieldset class="password" v-if="activeList === 3" :class="{'enable': activeList === 3}">
        <div class="icon left"><em class="lock"></em></div>
        <input type="password" name="password" placeholder="Password" v-model.trim="v$.password.$model"/>
        <div class="icon right button"><em class="arrow"></em></div>
        <p v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</p>
      </fieldset>
      <fieldset class="thanks" v-if="activeList === 4" :class="{'enable': activeList === 4}" @click="login">
        <div class="icon left"><em class="heart"></em></div>
        <p>go to desktop</p>
        <div class="icon right"><em class="heart"></em></div>
      </fieldset>
    </form>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import { useVuelidate } from '@vuelidate/core';
import {required, email, minLength, maxLength} from '@vuelidate/validators';
import {useRouter} from "nuxt/app";
import {useDesktopStore} from "../../store/desktop";

const registerForm = reactive({
  name: '',
  email: '',
  password: '',
})

const rules = {
  name: { required, min: minLength(2), max: maxLength(24) },
  email: { required, email },
  password: { required, min: minLength(6), max: maxLength(24) },
}

const v$ = useVuelidate(rules, registerForm);

const desktopStore = useDesktopStore();

const router = useRouter();

const activeList = ref(1);

function next(target) {
  let input = target.previousElementSibling;

  // Check if input is empty
  if (input.value === '') {
    window.document.body.classList.add('error');
  } else {
    window.document.body.classList.remove('error');
    activeList.value++;
  }
}

function keyDown(event) {
  let key = event.keyCode,
      target = document.querySelector('fieldset.enable .button');
  if(activeList.value === 1 && v$.value.name.$error) {
    activeList.value = 1;
    return;
  }

  if(activeList.value === 2 && v$.value.email.$error) {
    activeList.value = 2;
    return;
  }

  if(activeList.value === 3 && v$.value.password.$error) {
    activeList.value = 3;
    return;
  }

  if (key === 13 || key === 9) {
    next(target);
  }
}

onMounted(() => {
document.body.onmouseup = function (event) {
  let target = event.target || event.toElement;
  if (target.classList.contains("button")) next(target);
};
document.addEventListener("keydown", keyDown, false);
})

const login = () => {
  router.push('/macbook/desktop');
  desktopStore.setAuthName(registerForm.name);
};
</script>

<style lang="sass">
body
  background: hsl(120, 60, 50)
  font-family: sans-serif
  fieldset
    box-shadow: 0 8px 10px hsl(120, 60, 40)
body.error
  background: hsl(16, 100, 47)
  fieldset
    box-shadow: 0 8px 10px hsl(16, 100, 37)

h1, h2
  position: absolute
  left: 50%
  transform: translateX(-50%)
  font-family: sans-serif
  text-transform: uppercase
  letter-spacing: 2px
h1
  top: 24px
  color: hsl(0, 0, 100)
  font-size: 12px
h2
  top: 44px
  color: hsl(0, 0, 100)
  font-size: 10px
  opacity: 0.7

ul.items
  position: absolute
  width: 30px
  height: auto
  top: 50%
  left: -60px
  transform: translateY(-50%)
  li
    width: 8px
    height: 8px
    margin: 10px 0
    background: hsl(0, 0, 100)
    border-radius: 50%
    opacity: 0.4
    cursor: pointer
  li.active
    opacity: 1

form
  position: absolute
  width: 300px
  height: 60px
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  fieldset
    position: absolute
    width: 300px
    height: 60px
    background: hsl(0, 0, 100)
    border-radius: 3px
    opacity: 0
    transform: scale(0.2)
    transition: all 0.4s ease-in-out
    input, p
      display: inline-block
      width: 200px
      margin-left: 50px
      color: hsl(0, 0, 20)
      font-size: 16px
      letter-spacing: 1px
    p
      margin-top: 22px
      text-align: center
    input
      height: 40px
      margin-top: 8px
      border: none
      outline: none
    .icon
      position: absolute
      width: 30px
      height: 30px
      top: 15px
      transition: all 0.4s ease
      em
        position: absolute
        display: block
        &::before, &::after
          position: absolute
          content: ''
    .icon.left
      left: 10px
    .icon.right
      right: 10px
      cursor: pointer
    .icon.button:hover
      background: hsl(0, 0, 95)
      border-radius: 3px
      transition: all 0.4s ease

  fieldset.enable
    z-index: 1
    opacity: 1
    transition: all 0.5s ease-out 0.2s
    transform: scale(1)
    animation: enable 0.5s ease-out 0.2s
  fieldset.disable
    opacity: 0
    transition: all 0.3s ease-in
    transform: translateY(120px) scale(0.9)
body.error fieldset
  transform-origin: 50% 100%
  animation: error 0.3s ease-out

@keyframes enable
  0%
    opacity: 0
    transform: scale(0.2)
  60%
    transform: scale(1.1)
  100%
    opacity: 1
    transform: scale(1)
@keyframes error
  0%, 50%, 100%
    transform: rotate(0deg)
  25%
    transform: rotate(-3deg)
  75%
    transform: rotate(3deg)


/**
 * Icons in CSS, long as f****
 */
.icon .arrow
  width: 2px
  height: 17px
  top: 5px
  left: 14px
  background: hsl(0, 0, 20)
  &::before
    width: 6px
    height: 6px
    bottom: -1px
    left: -2px
    border-color: hsl(0, 0, 20)
    border-right: 2px solid
    border-bottom: 2px solid
    transform: rotate(45deg)
.icon .user
  width: 20px
  height: 10px
  bottom: 5px
  left: 5px
  box-shadow: 0 0 0 2px hsl(0, 0, 20) inset
  border-radius: 6px 6px 3px 3px
  &::before
    width: 10px
    height: 10px
    top: -9px
    left: 5px
    box-shadow: 0 0 0 2px hsl(0, 0, 20) inset
    border-radius: 50%
.icon .letter
  width: 20px
  height: 12px
  top: 9px
  left: 5px
  box-shadow: 0 0 0 2px hsl(0, 0, 20) inset
  border-radius: 3px
  &::before, &::after
    width: 11px
    height: 2px
    top: 4px
    background: hsl(0, 0, 20)
  &::before
    left: 0
    transform: rotate(30deg)
  &::after
    right: 0
    transform: rotate(-30deg)
.icon .lock
  width: 20px
  height: 16px
  top: 9px
  left: 5px
  box-shadow: 0 0 0 2px hsl(0, 0, 20) inset
  border-radius: 3px
  &::before
    width: 8px
    height: 8px
    top: -4px
    left: 4px
    border: 2px solid transparent
    border-top: 2px solid hsl(0, 0, 20)
    border-right: 2px solid hsl(0, 0, 20)
    border-radius: 50%
    transform: rotate(-45deg)
  &::after
    width: 6px
    height: 7px
    top: 4px
    left: 7px
    box-shadow: 0 0 0 2px hsl(0, 0, 20) inset
.icon .heart
  width: 10px
  height: 10px
  top: 11px
  left: 7px
  background: hsl(9, 100, 60)
  transform: rotate(45deg)
  &::before, &::after
    width: 10px
    height: 10px
    border-radius: 50%
    background: hsl(9, 100, 60)
  &::before
    left: -6px
  &::after
    top: -6px

.error
  color: red
  font-weight: bold
</style>