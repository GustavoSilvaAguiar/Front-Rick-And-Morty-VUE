<template>
  <router-link class="aux" to="/cards/cardDetail">
    <div class="card" @click="local">
      <div class="card--header"> 
        <div class="card--header--name">{{ cardInfo.name }}</div>
        <div class="card--header--species">
          {{ cardInfo.species }}
        </div>
      </div>
      <div class="card--image">
        <img :src="cardInfo.image" class="card--image--img" />
        <div class="card--image--frame"></div>
      </div>
      <div class="aux--body">
        <div class="card--body">
          <div class="card--body--textArea" v-if="cardInfo.type !== ''">
            <div class="card--body--textArea--text">
              tipo: {{ cardInfo.type }}
            </div>
          </div>
          <div class="card--body--textArea">
            <div class="card--body--textArea--text">
              localização: {{ cardInfo.location.name }}
            </div>
          </div>
          <div class="card--body--textArea">
            <div class="card--body--textArea--text">
              episódios: {{ cardInfo.episode.length }}
            </div>
          </div>
        </div>
        <div class="card--footer">
          <div class="card--footer--leftSide">
            <div class="card--footer--textArea">
              Genero: {{ cardInfo.gender }}
            </div>
            <div class="card--footer--textArea">
              Status: {{ cardInfo.status }}
            </div>
          </div>
          <div class="card--footer--textArea">
            Origem: {{ cardInfo.origin.name }}
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    cardData: Object,
  },
  data() {
    return {
      cardInfo: this.cardData,
    };
  },
  methods:{
    local(){
      localStorage.card = JSON.stringify(this.cardInfo);
    }
  }
};
</script>

<style lang="scss" scoped>
.aux{
  text-decoration: none;
}
.aux--body {
  height: 225px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card {
  width: 315px;
  height: 440px;
  background-color: #f0e14a;
  border: 10px solid #a3f307;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;

  &--header {
    display: flex;
    justify-content: space-between;

    &--name {
      background: #00b6cd;
      border-width: 0px 1px 1px 0px;
      border-style: solid;
      border-color: #000000;
      border-radius: 4px 0px 40px;
      width: 157px;
      color: #000000;
      padding: 3px 30px 3px 3px;
      margin-right: 17px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    &--species {
      white-space: nowrap;
      width: 124px;
      background-color: #00b6cd;
      border-width: 0px 0px 1px 1px;
      border-style: solid;
      color: #000000;
      border-color: #000000;
      border-radius: 0px 4px 0px 40px;
      padding: 3px 3px 3px 30px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  &--image {
    width: 272px;
    height: 179px;
    background-color: #f9f8f8;
    border: 1px solid #000000;
    border-radius: 14px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    display: flex;
    flex-direction: column;

    &--img {
      background-color: red;
      height: calc(100% - 16px);
      width: 100%;
      border-radius: 14px 14px 0px 0px;
    }
    &--frame {
      background-color: #a3f307;
      box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.5);
      border-radius: 0px 0px 14px 14px;
      width: 100%;
      height: 16px;
    }
  }

  &--body {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;

    &--textArea {
      width: 236px;
      min-height: 43px;
      background-color: #00b6cd;
      border: 1px solid #000000;
      border-radius: 20px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10px;
      display: flex;
      align-items: center;

      &--text {
        display: inline-block;
        margin-left: 20px;
        margin-right: 20px;
        color: #000;
      }
    }
  }

  &--footer {
    display: flex;
    justify-content: space-between;
    padding: 0px 22px;
    margin-top: 10px;
    min-height: 37px;

    &--leftSide {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &--textArea {
      background-color: #00b6cd;
      border-radius: 20px;
      width: 130px;
      padding: 1px 7px;
      display: flex;
      align-items: center;
      color: #000;
      font-size: 12px;
    }
  }
}
.card:hover {
  border: 10px solid #02b6cd;
}
</style>