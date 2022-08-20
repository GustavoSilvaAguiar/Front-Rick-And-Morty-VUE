<template>
  <div class="cardView">
    <card-caracter></card-caracter>
  </div>
</template>

<script>
import CardCaracter from "../components/CardCaracter.vue";
export default {
  components: { CardCaracter },
};
</script>

<style lang="scss" scoped>
.cardView{
    display: flex;
    padding: 20px;
}
</style>