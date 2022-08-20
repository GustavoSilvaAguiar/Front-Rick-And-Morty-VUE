<template>
  <div class="header">
    <div class="header--leftSide">
      <div v-if="showMenu" @click="$emit('showSideBar')" class="header--menu"></div>
      <div class="header--logo"></div>
    </div>
    <div class="header--rightSide">
      <router-link
        class="header--rightSide--link"
        to="/"
        @click="showMenu = false"
        >Início</router-link
      >
      <router-link
        class="header--rightSide--link"
        to="/cards"
        @click="showMenu = true"
        >Cards</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  emits:['showSideBar'],
};
</script>

<style lang="scss">
.header {
  background-color: #a3f307;
  padding: 28px 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: max-content;

  &--rightSide {
    display: flex;

    &--link {
      font-size: 60px;
      text-decoration: none;
      color: #02b6cd;
      text-shadow: 2px 2px 0px #000000;
      transition: all 0.1;
      margin-left: 30px;
    }
    &--link:hover {
      color: #000000;
      text-shadow: 2px 2px 0px #02b6cd;
    }
  }
  &--leftSide {
    display: flex;
    align-items: center;
  }

  &--menu {
    background-image: url("../assets/sandwichButton.svg");
    width: 55px;
    height: 40px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 26px;
    cursor: pointer;
    transition: all 0.2s;
  }
  &--menu:hover {
    transform: scale(1.1);
  }

  &--logo {
    background-image: url("../assets/Rick-And-Morty-Simbolo.png");
    border-radius: 60px;
    width: 255px;
    height: 107px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
@media only screen and (max-width: 1300px) {
  .header {
    height: 130px;
    padding: 0 33px;
    &--rightSide {
      display: flex;

      &--link {
        font-size: 50px;
      }
    }

    &--menu {
      width: 45px;
      height: 30px;
      background-size: contain;
    }

    &--logo {
      background-image: url("../assets/Rick-And-Morty-Simbolo.png");
      border-radius: 60px;
      width: 245px;
      height: 102px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>