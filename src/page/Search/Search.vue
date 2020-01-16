<template>
    <div>
        <div id="search">
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch">
            <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
        
    </div>
</template>

<script>
import { Search } from 'vant';
export default {
    name : 'Search',
    data () {
        return {
            value : null
        }
    },
    components : {
        [Search.name] : Search
    },
    methods :{
        onSearch () {

        }
    }

}
</script>

<style lang="stylus" scoped> 
    // #search
    //     width 100%
    //     height 0.6rem
    //     background pink
        .van-search__content
            height 0.6rem
            .van-field__control
                display block
                height 0.3rem 
                font-size .2rem
                
</style>