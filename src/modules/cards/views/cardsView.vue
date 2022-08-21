<template>
  <div class="cardView">
    <div v-for="card in cardData" :key="card.id">
      <card-caracter :cardData="card"></card-caracter>
    </div>
    <div class="teste"></div>
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
      generalInfo: [],
      page: 1,
    };
  },
  mounted() {
    this.getCards(this.page);
  },
  methods: {
    getCards() {
      CardsService.getAllCharacters(this.page).then((res) => {
        this.cardData = res.data.results;
        this.generalInfo = res.data.info;
        console.log("cardData", this.cardData);
        console.log("generalInfo", this.generalInfo.pages);
        this.scrollFunction();
      });
    },
    pagination() {
      if (this.page < this.generalInfo.pages) {
        this.page++;
        CardsService.getAllCharacters(this.page).then((res) => {
          console.log("antes do for");
          for (const index in res.data.results) {
            console.log("entra no for");
            if (index > 0) {
              this.cardData.push(res.data.results[index]);
            }
          }
          console.log("cardData", this.cardData);
        });
      }
    },
    scrollFunction() {
      var observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]["isIntersecting"] === true) {
            console.log("entrou");
            this.pagination();
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(document.querySelector(".teste"));
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