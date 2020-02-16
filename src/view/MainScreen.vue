<template>
    <div @click="goHome">this is main screen{{count}}{{add2}}</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {};
    },
    mounted() {
        this.$bus.$on('name', () => {
            console.log('this is name');
        });
    },
    computed: {
        ...mapState({
            count: state => state.count,
            add2: state => 'add2' + state.count,
        }),
    },
    methods: {
        goHome() {
            this.$store.commit('addCount');
            // this.add2();
            // this.$router.push('/home');
        },
    },
};
</script>
<style scoped lang="scss">
div {
    color: red;
    font-size: 20px;
    cursor: pointer;
}
</style>
