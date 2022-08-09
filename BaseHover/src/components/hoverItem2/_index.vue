<template>
  <div class="wrap">
    <div class="hoverItem" ref="hoverItem">
      <span class="hoverItem-txt">Read More</span>
      <span class="hoverItem-icon">
        <img
          src="../../assets/icon_plus.png"
          alt=""
          class="hoverItem-iconimg"
        />
      </span>
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
  display: flex;
  align-items: center;
  font-size: 15px;
}

.hoverItem-icon {
  font-weight: bold;
  background-color: #efefef;
  border-radius: 50%;
  padding: 12px;
  display: block;
  margin-left: 15px;
  line-height: 0;
  position: relative;
}

.hoverItem-iconimg {
  width: 10px;
  height: auto;
}
</style>
