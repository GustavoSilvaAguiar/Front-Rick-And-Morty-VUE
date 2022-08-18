<template>
  <div>
    <div class="header">
      <router-view name="header"/>
    </div>
    <div class="sideBar">
      <router-view name="sideBar"/>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Alien";
  src: url("./assets/fonts/shlop rg.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: "Alien";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.header{
  background-color: #A3F307;
  width: 1512px;
}
</style>
