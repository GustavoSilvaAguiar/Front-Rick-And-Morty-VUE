<template>
  <div class="home">
    <header-home-page></header-home-page>

    <div class="body">
      <card-caracter></card-caracter>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderHomePage from "../@core/HeaderHomePage.vue";
import CardCaracter from '../@shared/components/CardCaracter.vue';

export default {
  name: "HomePage",
  components: { HeaderHomePage, CardCaracter },
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