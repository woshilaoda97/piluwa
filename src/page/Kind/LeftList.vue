<template>
  <div class="kind">
    <!-- 分类列表 -->
    <van-tree-select height="100%" 
    :items="items" 
    :main-active-index.sync="activeIndex">
      <template slot="content">
        <RightShop />
      </template>
    </van-tree-select>
  </div>
</template>
<script>
import { TreeSelect, Image } from "vant";
import RightShop from "./RightShop";
export default {
  data() {
    return {
      value: "",
      activeIndex: 0,
      items: [
        { text: "推荐分类" },
        { text: "皮噜娃尿包265服务" },
        { text: "全球奶粉" },
        { text: "营养辅助" },
        { text: "喂养用品" },
        { text: "宝宝洗护" },
        { text: "清洁用品" },
        { text: "孕产母乳" },
        { text: "婴幼儿服饰" },
        { text: "宝宝出行" },
        { text: "宝宝起居" },
        { text: "宝宝玩具" },
        { text: "美妆护肤" },
        { text: "成人营养" },
        { text: "女生日记" },
        { text: "成人洗护" }
      ]
    };
  },
  components: {
    [TreeSelect.name]: TreeSelect,
    [Image.name]: Image,
    RightShop
  },
  created() {}
};
</script>
<style lang="stylus" scoped>
      .kind 
        flex 1
        height 100%
        overflow auto

</style>