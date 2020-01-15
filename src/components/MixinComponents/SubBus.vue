<script>
import Vue from 'vue';

export default {
    data () {
        return {
            bus: null,
        }
    },
    created () {
        this.bus = this.$parent.bus;
    }
}
</script>