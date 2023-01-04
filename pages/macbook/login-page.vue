<template>
  <div class="container">
    <div id="splitlayout" class="splitlayout">
      <div class="intro">
        <div class="side side-left">
          <NuxtLink to="/macbook/desktop">
            <div class="intro-content">
              <div class="profile">
              </div>
              <h1><span>Ilya</span><span>Web Designer</span></h1>
            </div>
          </NuxtLink>
          <div class="overlay"></div>
        </div>
        <div class="side side-right">
          <NuxtLink to="/macbook/desktop">
            <div class="intro-content">
            <div class="profile">
            </div>
            <h1><span>Alex</span><span>Web Developer</span></h1>

          </div>
          </NuxtLink>
          <div class="overlay"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
html, body, .container {
  position: relative;
  width: 100%;
  height: 100%;
}
body {
  overflow-y: scroll;
  background: #333;
}
.splitlayout {
  position: relative;
  overflow-x: hidden;
  min-height: 100%;
  width: 100%;
}

/* Intro sides */
.side {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 50%;
  height: 100%;
  text-align: center;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex: 1;
}
.side, .open-right .side {
  cursor: default;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 499;
  visibility: hidden;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.side-left .overlay {
  background: rgba(0, 0, 0, 0.7);
}
.side-right .overlay {
  background: rgba(0, 0, 0, 0.3);
}
.side-left {
  left: 0;
  background: #196dff;
  color: #fff;
  outline: 1px solid #196dff;
  /* avoid gap */
}
.side-right {
  right: 0;
  background: #fff;
  color: #196dff;
  outline: 1px solid #fff;
  /* avoid gap */
}
/* Intro content, profile image and name, back button */
.intro-content {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0 1em;
  width: 50%;
  cursor: pointer;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
}

.side-left {
  .intro-content {
    .profile {
      margin: 0 auto 20px;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: #ffffff;
    }
    h1 {
      color: white;

      span {
        padding: 5px 0;
      }
    }
  }
}

.side-right {
  .intro-content {
    .profile {
      margin: 0 auto 20px;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: #195DFF;
    }
    h1 {
      color: #195DFF;

      span {
        padding: 5px 0;
      }
    }
  }
}
.profile {
  margin: 0 auto 20px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: #196dff;
}
.profile img {
  max-width: 100%;
  border-radius: 50%;
  opacity: 0.6;
}
.intro-content h1 > span {
  display: block;
  white-space: nowrap;
}
.intro-content h1 > span:first-child {
  font-weight: 300;
  font-size: 2em;
}
.intro-content h1 > span:nth-child(2) {
  position: relative;
  margin-top: 0.5em;
  padding: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8em;
}
.intro-content h1 > span:nth-child(2):before {
  position: absolute;
  top: 0;
  left: 25%;
  width: 50%;
  height: 2px;
  background: #fff;
  content:'';
}
.side-right .intro-content h1 > span:nth-child(2):before {
  background: #196dff;
}
/* Pages */
.page {
  position: relative;
  top: 0;
  overflow: auto;
  min-height: 100%;
  width: 75%;
  height: auto;
  font-size: 1.4em;
  -webkit-backface-visibility: hidden;
}
.page-right {
  left: 25%;
  outline: 5px solid #ecf0f1;
  /* avoid rounding gaps */
  background: #ecf0f1;
  color: #97a8b2;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
.splitlayout.open-right {
  background: #ecf0f1;
}
.page-left {
  left: 0;
  outline: 5px solid #34495e;
  /* avoid rounding gaps */
  background: #34495e;
  color: #fff;
  text-align: right;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
.splitlayout.open-left {
  background: #34495e;
}
/* Inner page content */
.page-inner {
  padding: 2em;
}
.page-inner section {
  padding-bottom: 1em;
}
.page-inner h2 {
  margin: 0 0 1em 0;
  font-weight: 300;
  font-size: 2.4em;
}
.page-inner p {
  font-weight: 300;
  font-size: 1.2em;
}
/* All transitions */
.side, .page {
  -webkit-transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
}
.overlay {
  -webkit-transition: opacity 0.6s, visibility 0.1s 0.6s;
  transition: opacity 0.6s, visibility 0.1s 0.6s;
}
.page {
  width: 100%;
}
.page-right {
  left: 0;
  padding-left: 15%;
}
.page-left {
  padding-right: 15%;
}
.intro-content {
  width: 100%;
}
</style>