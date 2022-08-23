<template>
  <div class="cardView">
    <side-bar-home
      v-if="showSideBar"
      @changeName="changeSearch"
      class="teste"
    ></side-bar-home>
    <div v-for="card in cardData" :key="card.id">
      <card-caracter :cardData="card"></card-caracter>
    </div>
    <infinite-scroll @endOfScroll="pagination()"></infinite-scroll>
  </div>
</template>

<script>
import InfiniteScroll from "../../../@shared/components/infiniteScroll.vue";
import CardCaracter from "../components/CardCaracter.vue";
import CardsService from "../services/cards.service.js";
import { mapMutations, mapState } from "vuex";
import SideBarHome from "../../../@core/SideBarHome.vue";

export default {
  components: { CardCaracter, InfiniteScroll, SideBarHome },
  data() {
    return {
      cardData: [],
      generalInfo: [],
      page: 1,
      name: "",
      status: "",
    };
  },
  computed: {
    ...mapState({
      showSideBar: (state) => state.sideBar,
    }),
  },

  mounted() {
    this.getCards();
    this.showSideBarButton();
  },
  methods: {
    ...mapMutations(["showSideBarButton"]),

    changeSearch(res, status) {
      this.name = res;
      this.page = 1;
      this.status = status;
      this.getCards();
    },

    getCards() {
      CardsService.getAllCharacters(this.page, this.name, this.status)
        .then((res) => {
          this.cardData = res.data.results;
          this.generalInfo = res.data.info;
        })
        .catch(() => {
          this.name = "";
          this.page = 1;
          this.status = "";
          CardsService.getAllCharacters(this.page, this.name, this.status).then((res) => {
            this.cardData = res.data.results;
            this.generalInfo = res.data.info;
          });
        });
    },
    pagination() {
      if (this.page < this.generalInfo.pages) {
        this.page++;
        CardsService.getAllCharacters(this.page, this.name, this.status).then((res) => {
          for (const index in res.data.results) {
            if (index > 0) {
              this.cardData.push(res.data.results[index]);
            }
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cardView {
  display: flex;
  position: relative;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 20px;
  column-gap: 20px;
}
</style>