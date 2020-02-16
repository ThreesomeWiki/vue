<template>
    <div @click="goBack">this is home</div>
</template>
<script>
export default {
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