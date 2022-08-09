<template>
  <div class="wrap">
    <div class="box box02">
      <div class="bgWrap">
        <div class="bg" :style="style1"></div>
      </div>
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script>
import Hover from "./Hover/Controller.js";
export default {
  components: {},

  data: function () {
    return {
      style1: {
        background: "url(" + require("../../../static/img05.jpeg") + ")",
        "background-size": "cover",
        "background-position": "center",
      },
    };
  },
  created() {},
  mounted() {
    this.hover = new Hover();
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

.box {
  width: 450px;
  height: 300px;
  position: relative;
  cursor: pointer;

  .btn {
    width: 100px;
    height: 40px;
    border-radius: 2px;
    background-color: #000;
    position: absolute;
    bottom: 50px;
    left: 50px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
  }

  .bgWrap {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    overflow: hidden;
  }

  .bg {
    width: 100%;
    height: 100%;
  }
}
</style>
