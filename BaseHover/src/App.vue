<template>
  <div id="app">
    <hoverItem1></hoverItem1>
    <hoverItem2></hoverItem2>
    <hoverItem3></hoverItem3>
    <hoverItem4></hoverItem4>
    <hoverItem5></hoverItem5>
    <hoverItem6></hoverItem6>
    <hoverItem7></hoverItem7>
  </div>
</template>

<script>
import hoverItem1 from "./components/hoverItem1/_index";
import hoverItem2 from "./components/hoverItem2/_index";
import hoverItem3 from "./components/hoverItem3/_index";
import hoverItem4 from "./components/hoverItem4/_index";
import hoverItem5 from "./components/hoverItem5/_index";
import hoverItem6 from "./components/hoverItem6/_index";
import hoverItem7 from "./components/hoverItem7/_index";

export default {
  name: "App",
  components: {
    hoverItem1,
    hoverItem2,
    hoverItem3,
    hoverItem4,
    hoverItem5,
    hoverItem6,
    hoverItem7,
  },
};
</script>

<style>
#app {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
