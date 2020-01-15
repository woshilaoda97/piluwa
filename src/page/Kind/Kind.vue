<template>
  <div>
    <van-search placeholder="新春大促销" shape="round" v-model="value" />
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