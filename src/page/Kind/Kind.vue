<template>
  <div>
    <van-search placeholder="新春大促销" shape="round" v-model="value"/>
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

