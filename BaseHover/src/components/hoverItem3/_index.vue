<template>
  <div class="wrap">
    <div class="hoverItem js-mouseStoker_link" ref="hoverItem">
      <div class="hoverItem-wrap">
        <div class="hoverItem-txtwrap">
          <div class="hoverItem-txt hoverItem-txt_01">ABOUT</div>
          <div class="hoverItem-txt hoverItem-txt_02">CLOSE</div>
        </div>
      </div>
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
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;
  overflow: hidden;
  height: 20px;
  line-height: 20px;
  padding: 10px;

  &-wrap {
    height: 20px;
    overflow: hidden;
  }

  &-txt {
    &:nth-child(1) {
      padding-bottom: 10px;
    }
  }
}
</style>
