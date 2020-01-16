<template>
    <button :style="styl">
        <span :style="iconStyleObject"></span>
        {{title || ''}}
    </button>
</template>

<script>
import { Icon } from '../MixinComponents';
export default {
    mixins: [Icon],
    props: {
        title: {
            type: String,
        },
        isColumm: {
            type: Boolean,
            default: false,
        },
        styl: {
            type: Object,
        }
    },
    // computed
}
</script>

<style lang="stylus" scoped>
    button
        display flex
        font-size .24rem
        color #aaa
        span
            padding .2rem

</style>