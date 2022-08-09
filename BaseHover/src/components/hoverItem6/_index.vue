<template>
  <div class="wrap">
    <div class="hoverItem2" ref="hoverItem2">
      <p>hover Arrow</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.19 8.71">
        <g id="b907df82-ac9a-4a7d-be97-e8a963186afc" data-name="レイヤー 2">
          <g id="ef87c1d1-b06d-428c-acd4-f8e5ec684cf3" data-name="レイヤー 1">
            <polyline points="41.56 0.4 51.72 8.21 0 8.21" style="fill: none" />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import Hover from "./Hover/Controller.js";
import gsap from "gsap";
import { DrawSVGPlugin } from "../../vendor/DrawSVGPlugin.js";
gsap.registerPlugin(DrawSVGPlugin);

export default {
  components: {},
  created() {},
  mounted() {
    this.hover = new Hover(this.$refs.hoverItem2);
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

.hoverItem2 {
  cursor: pointer;
  p {
    text-align: center;
    font-size: 12px;
  }
  svg {
    width: 50px;
    margin-top: 10px;
    overflow: visible;
    polyline {
      stroke: currentColor;
    }
  }
}
</style>
