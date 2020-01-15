<script>
//selectedIcon
import _ from '../../untils/until';

export default {
    props: {
        icon: {
            validator (val) {//url为必填属性
                if (! _.isObject(val)) return;
                return val['url'];
            }
        },
        selectedIcon: {
            validator (val) { 
                if (! _.isObject(val)) return;
                return val['url'];
            }
        },
    },
    computed: {
        iconStyleObject () {//设置icon样式 长宽默认.25rem
            if(!this.icon) return;
            let icon =  this.icon;
            let width = icon.width || '.36rem';
            let height = icon.height || '.36rem';
            return {
                width,
                height,
                background: `url(${icon.url}) no-repeat center center/100% 100%`,
            }
        },
        selectedIconStyleObject () {//选中后如果没设置宽高/默认为选择前的宽高
            if(!this.selectedIcon) return this.iconStyleObject; //如果没有设置选中选项则为选中前
            let selectedIcon = this.selectedIcon;
            let width = selectedIcon.width   || this.icon.width  || '.36rem';
            let height = selectedIcon.height || this.icon.height || '.36rem';
            return {
                width,
                height,
                background: `url(${selectedIcon.url}) no-repeat center center/100% 100%`,
            }
        }
    },
}
</script>