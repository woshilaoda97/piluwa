<template>
    <div @click="clickHandler">
        <span v-show="selected" :style="selectedIconStyleObject"></span>
        <span v-show="!selected" :style="iconStyleObject"></span>
        <!-- 如果选中显示selectedFontColor/没选中则显示fontColor -->
        <p :style="currentFontStyle">{{ title }}</p>
    </div>
</template>

<script>
import { SelectedIcon, SubBus } from '../MixinComponents';

//TabBar.Item为TabBar的子组件，必须配合TabBar使用/表示底部导航栏的每一个跳转按钮
export default {
    mixins: [SelectedIcon, SubBus],
    name: 'TabBarItem',
    data () {
        return {
            selected: false,
        }
    },
    props: {
        k: {
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        link: {
            type: String,
        }
    },
    computed: {
        // currentIconStyle () {
        //     return this.selected ? this.selectedIconStyleObject : this.iconStyleObject;
        // },
        currentFontStyle () {
            let color = this.selected ? this.$parent.selectedFontColor : this.$parent.fontColor;
            return { color };
        }
    },
    methods: {
        clickHandler () {
            this.$router.history.push(this.link);
            this.bus.$emit('key', this.k);//点击发布key事件/告知兄弟节点谁被点击了
        }
    },

    created () {
        this.bus.$on('key', (key) => {
            this.selected = key==this.k ? true : false;
        })
    }
};
</script>

<style lang="stylus" scoped>
    div
        display flex
        flex-direction column
        justify-content space-evenly
        align-items center
        flex 1
        height .5rem
        color #000
        p
            width 100%
            height .12rem
            line-height .12rem
            color #696969
            font-size .10rem
            text-align center
</style>