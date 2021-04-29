<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div id="app">
    <div id="upper_shadow" />
    <h1 class="page_title">Indicados ao Oscar 2021</h1>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  /* I prefer the first comment but I rather go with the instructions at this one. */

  /* background: -webkit-linear-gradient(to top, #47275a, #47275a, #100515);
  background: linear-gradient(to top, #47275a, #47275a, #100515); */

  #upper_shadow {
    position: absolute;
    z-index: 8;
    width: 100%;
    height: 40%;

    background: transparent linear-gradient(180deg, #100515 0%, #45155a00 100%)
      0% 0% no-repeat padding-box;
  }

  .page_title {
    z-index: 10;
    color: #fff;
    font-size: 48px;
    font-weight: bold;
    position: relative;
    top: 8vh;
    letter-spacing: 0px;

    @media (max-width: 500px) {
      font-size: 36px;
      margin: 0 16px 0 16px;
    }
  }
}
</style>
