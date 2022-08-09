<template>
  <div class="wrap">
    <div class="hoverItem" ref="hoverItem">
      <img src="../../assets/btn_twitter.svg" alt="" width="50" />
    </div>
  </div>
</template>

<script>
import Hover from "./Hover/Controller.js";
export default {
  components: {},

  created() {},
  mounted() {
    this.hover = new Hover(this.$refs.hoverItem);
  },
  beforeDestroy() {
    if (this.hover) this.hover.destroy();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap {
  display: inline-block;
  padding: 5rem;
}

.hoverItem {
  font-size: 16px;
  cursor: pointer;
  padding: 20px;
}

.is-bounce {
  animation: bounce 0.45s linear;
}

@keyframes bounce {
  0% {
    transform: scale(1, 1) translate(0%, 0%);
  }
  15% {
    transform: scale(0.9, 0.95) translate(0%, 3%);
  }
  30% {
    transform: scale(1.1, 0.9) translate(0%, 5%);
  }
  50% {
    transform: scale(0.8, 1.05) translate(0%, -5%);
  }
  70% {
    transform: scale(1.1, 0.95) translate(0%, 3%);
  }
  100% {
    transform: scale(1, 1) translate(0%, 0%);
  }
}
</style>
