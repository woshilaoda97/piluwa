<template>
  <div>
    <van-search placeholder="新春大促销" shape="round" v-model="value" class="search" />
    <LeftList></LeftList>
   
  </div>
</template>

<script>
import { Search } from 'vant';
import LeftList from './LeftList'


export default {
    data () {
        return {
            value:""
        }
    },
    components: {
        [Search.name]: Search,
        LeftList,
       
    }
}
</script>
<style lang="stylus" scoped>
body,html 
       height 100%
       div 
          height 100%
          .search 
              height .65rem
              
          a 
           height 100%
</style>