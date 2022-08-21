<template>
  <div class="topics">
        <slot></slot>
        <p class="topics--data">{{ dataTopics }}</p>
      </div>
</template>

<script>
export default {
    props:{
        dataTopics: Array,
    },
}
</script>

<style lang="scss" scoped>
.topics {
      display: flex;
      color: #a3f307;
      font-size: 25px;
      padding-top: 20px;

      &--data {
        color: #fff;
        padding-left: 5px;
      }
    }
</style>