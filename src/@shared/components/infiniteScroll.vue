<template>
  <div class="scrollInfinite">
    <slot name="body">
      <div class="defaultLoading--icon">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
    emits:['endOfScroll'],
  methods: {
    endOfScroll() {
      var observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]["isIntersecting"] === true) {
            this.$emit("endOfScroll");
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(document.querySelector(".scrollInfinite"));
    },
  },
  mounted() {
    this.endOfScroll();
  },
};
</script>

<style lang="scss">
#scrollInfinite {
  display: flex;
  justify-content: center;

  .defaultLoading--icon {
    position: relative;
    min-height: 35px;
    padding: 15px 0;
    width: 35px;
    display: inline-block;

    div {
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #00c3dd;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);

      &:nth-child(1) {
        left: 4px;
        animation: lds-ellipsis1 0.6s infinite;
      }
      &:nth-child(2) {
        left: 4px;
        animation: lds-ellipsis2 0.6s infinite;
      }
      &:nth-child(3) {
        left: 16px;
        animation: lds-ellipsis2 0.6s infinite;
      }
      &:nth-child(4) {
        left: 28px;
        animation: lds-ellipsis3 0.6s infinite;
      }
    }
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(12px, 0);
    }
  }
}
</style>