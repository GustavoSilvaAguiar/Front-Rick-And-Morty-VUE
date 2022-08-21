<template>
  <div class="sideBar">
    <input
      v-model="search"
      type="text"
      class="sideBar--textSearch"
      placeholder="Pesquise um personagem"
    />
    <select v-model="select" class="sideBar--textSearch">
      <option value="">Pesquisar por status</option>
      <option value="alive">Vivo</option>
      <option value="dead">Morto</option>
      <option value="unknown">Desconhecido</option>
    </select>
    <div @click="$emit('changeName', search, select)" class="sideBar--button">
      Pesquisar
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarHome",
  data() {
    return {
      search: "",
      select: "",
    };
  },
  emits: ["changeName"],
};
</script>

<style lang="scss" scoped>
.sideBar {
  position: fixed;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 10px #a3f307;
  background-color: #000000;
  top: 163px;
  left: 0px;
  padding: 20px;
  font-size: 20px;
  align-items: center;
  justify-content: space-around;
  row-gap: 20px;

  &--textSearch {
    background-color: #a3f307;
    border-radius: 20px;
    width: 236px;
    height: 63px;
    font-size: 20px;
    color: #000000;
  }
  &--button {
    background-color: #00b6cd;
    border-radius: 20px;
    width: 236px;
    height: 63px;
    font-size: 20px;
    color: #000000;
    border-radius: 20px;
    width: 236px;
    height: 63px;
    font-size: 20px;
    cursor: pointer;
    color: #000000;
    align-items: center;
    justify-content: center;
    display: flex;
    transition: all 0.2s;
  }
  &--button:active {
    background-color: #a3f307;
    transform: scale(0.9);
  }
}
@media only screen and (max-width: 1300px){
  .sideBar{
    top: 130px;
  }
}
</style>