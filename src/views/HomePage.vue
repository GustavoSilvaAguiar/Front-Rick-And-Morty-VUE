<template>
  <div class="home">
    <header-home-page
      @showSideBar="showSideBar"
    ></header-home-page>
    <side-bar-home v-if="showSideBar"></side-bar-home>

    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderHomePage from "../@core/HeaderHomePage.vue";
import SideBarHome from "../@core/SideBarHome.vue";

export default {
  name: "HomePage",
  components: { HeaderHomePage, SideBarHome },
  data() {
    return {
    };
  },
  
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
}
.body {
  overflow-y: auto;
  height: calc(100% - 163px);
}

@media only screen and (max-width: 1300px) {
  .body {
    overflow-y: auto;
    height: calc(100% - 130px);
  }
}
</style>