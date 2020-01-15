<template>
  <div class="kind">
    <!-- 分类列表 -->
    <Top />
    <van-tree-select height="100%" :items="items" :main-active-index.sync="activeIndex" />
    <template slot="content">
   
    </template>
  </div>
</template>
<script>
import { TreeSelect } from "vant";
// import Kind from "./Kind";
// import Floor from "./Floor";
export default {
  data() {
    return {
      value: "",
      items: [],
      activeIndex: 0
    };
  },
  components: {
    // Kind,
    // Floor,
    [TreeSelect.name]: TreeSelect
  }
};
</script>
<style lang="stylus" scoped>
.kind {
  flex: 1;
  height: 100%;
  overflow: auto;
}
</style>