<script>
import Vue from 'vue';

export default {
    data () {
        return {
            bus: new Vue(),
        }
    },
    destroyed () {
        this.bus.$off();
    }
}
</script>