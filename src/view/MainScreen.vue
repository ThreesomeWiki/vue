<template>
    <div @click="goHome">this is main screen</div>
</template>
<script>
export default {
    mounted() {
        console.log('mounted');
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
