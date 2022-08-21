<template>
  <div class="cardDetail">
    <div class="cardDetail--leftSide">
      <img :src="localData.image" class="cardDetail--leftSide--img" />
    </div>
    <div class="cardDetail--rightSide">
      <h1 class="cardDetail--rightSide--title">{{ localData.name }}</h1>
      <topics-detail :dataTopics="localData.gender">Gênero:</topics-detail>
      <topics-detail :dataTopics="localData.species">Espécie:</topics-detail>
      <topics-detail :dataTopics="localData.status">Status:</topics-detail>
      <topics-detail :dataTopics="localDataEpisodes">Episódios:</topics-detail>
      <topics-detail :dataTopics="localData.type">Tipo:</topics-detail>
      <topics-detail :dataTopics="localDataLocation">Localização:</topics-detail>
    </div>
  </div>
</template>

<script>
import topicsDetail from '../components/topicsDetail.vue';
export default {
  components: { topicsDetail },
  data() {
    return {
      localData: {},
      localDataLocation: '',
      localDataEpisodes: '',
    };
  },
  mounted() {
    this.localData = JSON.parse(localStorage.card);
    this.localDataLocation = JSON.parse(localStorage.card).location.name;
    this.localDataEpisodes = JSON.parse(localStorage.card).episode.length;
    console.log("res", this.localData);
  },
};
</script>

<style scoped lang="scss">
.cardDetail {
  display: flex;
  padding: 20px;
  column-gap: 40px;

  &--leftSide {
    &--img {
      width: 410px;
      height: 254px;
      background: #d9d9d9;
      border: 10px solid #a3f307;
      border-radius: 14px;
    }
  }

  &--rightSide {
    &--title {
      font-size: 40px;
      color: #02b6cd;
      text-shadow: 1px 1px 0px #a3f307;
    }
    
  }
}
</style>