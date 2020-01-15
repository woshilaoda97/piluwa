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
    },
}
</script>