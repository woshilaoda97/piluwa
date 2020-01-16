<template>
  <div>
    <van-search placeholder="请输入搜索关键词" shape="round" v-model="value" />
  </div>
</template>

<script>
import { Search } from 'vant';
export default {
    data () {
        return {
            value:""
        }
    },
    components: {
        [Search.name]: Search,
    }
}
</script>

<style lang="stylus" scoped>
   
</style>