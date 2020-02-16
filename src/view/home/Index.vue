<template>
    <div @click="goBack">this is home</div>
</template>
<script>
export default {
    mounted() {
        this.$bus.$emit('name');
    },
    methods: {
        goBack() {
            this.$router.back();
        },
    },
};
</script>
<style scoped lang="scss">
div {
    color: yellowgreen;
    cursor: pointer;
}
</style>