<template>
    <div>
        <van-cell value="推荐商品" />
        <div>

        </div>
    </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';
export default {
    name : 'HomepageCommodity',
    components : {
        [Cell.name] : Cell,
        [CellGroup.name] : CellGroup,
    }

}
</script>

<style lang="stylus" scoped>
    .van-cell__value--alone
        font-size .3rem

    span::before
        content 'i'
        color transparent
        background rgb(229,139,42)
        margin-right .1rem
        background rgb(229,139,42)
        margin-right .1rem
    .van-cell:not(:last-child)::after
        border-bottom 0rem
        margin-bottom 0rem
</style>
