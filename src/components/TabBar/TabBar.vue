<template>
    <footer>
        <slot></slot>
    </footer>
</template>

<script>
import Item from "./Item";
import { SupBus } from '../MixinComponents';
import _ from '../../untils/until';

//TabBar为底部导航栏/TabBar.Item为TabBar配置对象中的属性
//可以通过TabBar.Item调用子组件Item
export default {
    mixins: [SupBus],
    name: 'TabBar',
    props: {
        defaultSelected: {//默认选中项，如果没有则为第一个子元素
            validator (val) {
                return _.isNumber(_.toNumber(val));
            }
        },
        fontColor: {
            type: String,
            default: "#696969",
        },
        selectedFontColor: {
            type: String,
            default: "#00c6ff",
        },
    },
    computed: {
        path () {
            return this.$route.path
        }
    },

    async mounted () {
        await this.$nextTick();
        // let key = this.defaultSelected || this.$children[0].k;
        // this.bus.$emit('key', key);
    },
    watch: {
        path () {
            this.bus.$emit('key', this.path.slice(1));
        }
    },
    Item,
}
</script>

<style lang="stylus">
    footer
        display flex
        position fixed
        bottom 0
        left 0
        width 100%
        height 1.02rem
        background #fff
        box-shadow 0 -.14rem 1.1rem 0 rgba(58,33,36,0.12)
</style>