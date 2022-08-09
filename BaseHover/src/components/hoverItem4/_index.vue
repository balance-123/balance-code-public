<template>
  <div class="wrap">
    <a class="magnetButton" href="" ref="hoverItem">
      <div class="magnetButton-decowrap">
        <div class="magnetButton-deco"></div>
      </div>
      <div class="magnetButton-txtwrap">
        <div class="magnetButton-txt">ONLINE SHOP</div>
      </div>
    </a>
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

.magnetButton {
  cursor: pointer;
  color: #ffffff;
  border: 0;
  background: none;
  width: 200px;
  height: 200px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &-decowrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    background-color: #efefef;
  }

  &-deco {
    background-color: #000;
    position: absolute;
    width: 150%;
    height: 200%;
    border-radius: 50%;
    top: -50%;
    left: -25%;
    transform: translate3d(0, 75%, 0);
  }

  &-txtwrap,
  &-txt {
    z-index: 1;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
  }
}
</style>
