<template>
<div class="background">
  <NuxtLink to="/notes" class="start-link">Go to Notes</NuxtLink>
</div>
</template>

<style scoped lang="scss">
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background: -moz-linear-gradient(left,  #ff5f6d 0%, #ffc371 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left,  #ff5f6d 0%,#ffc371 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right,  #ff5f6d 0%,#ffc371 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

  .start-link {
    border: 1px solid whitesmoke;
    padding: 15px 10px;
    color: white;
    background: transparent;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      border: 1px black dashed;
      transition: 1s all;
    }
  }
}
</style>