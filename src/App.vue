<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div id="app">
    <h1>Indicados ao Oscar 2021</h1>
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
  height: 100vh;

  background: #45155a;
  background: -webkit-linear-gradient(to top, #47275a, #47275a, #100515);
  background: linear-gradient(to top, #47275a, #47275a, #100515);

  h1 {
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
