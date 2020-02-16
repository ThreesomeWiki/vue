<template>
    <div @click="goHome">this is main screen{{count}}</div>
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
    computed: mapState({
        count: state => state.count,
    }),
    methods: {
        goHome() {
            this.$store.commit('addCount');
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
