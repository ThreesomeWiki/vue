<template>
    <div @click="goHome">this is main screen</div>
</template>
<script>
export default {
    mounted() {
        this.$bus.$on('name', () => {
            console.log('this is name');
        });
    },
    methods: {
        goHome() {
            this.$router.push('/home');
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
