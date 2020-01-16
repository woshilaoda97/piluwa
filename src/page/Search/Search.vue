<template>
    <div class="wrap">
        <van-icon name="arrow-left" color="#999" class="icon" @click="back"/>
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
import { Search, Icon } from 'vant';
export default {
    name : 'Search',
    data () {
        return {
            value : null
        }
    },
    components : {
        [Search.name] : Search,
        [Icon.name]   : Icon,
    },
    methods :{
        onSearch () {

        },
        back () {
            console.log(this.$router);
            this.$router.back()
        }
    }

}
</script>

<style lang="stylus" scoped> 
    .wrap
        display flex
        justify-content space-between
        align-items center
        padding 0 .2rem
    .van-search__content
        width 5rem
        height 0.6rem
        .van-field__control
            display block
            height 0.5rem 
            font-size .2rem
    .van-cell
        height 0.5rem
        padding 0
    .van-search__content
        display flex
        align-items center
    .van-search__action
        height .5rem
        width 1.5rem
        div
            text-align center
            height .5rem
            line-height .5rem
            font-size .25rem
            color #fff
            border-radius .25rem
            background-image linear-gradient(45deg, #e66524, #f9b27e);

</style>