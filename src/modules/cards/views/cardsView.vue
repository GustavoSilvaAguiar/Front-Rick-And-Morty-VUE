<template>
  <div class="cardView">
    <div v-for="card in cardData" :key="card.id">
      <card-caracter :cardData="card"></card-caracter>
    </div>
  </div>
</template>

<script>
import CardCaracter from "../components/CardCaracter.vue";
import CardsService from "../services/cards.service.js";

export default {
  components: { CardCaracter },
  data() {
    return {
      cardData: [],
    };
  },
  mounted() {
    this.getCards();
  },
  methods: {
    getCards() {
      CardsService.getAllCharacters().then((res) => {
        this.cardData = res.data.results;
        console.log("cardData", this.cardData);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cardView {
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 20px;
  column-gap: 20px;
}
</style>