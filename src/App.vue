<template>
    <div @click="handleClick">
        this is a {{ name }}
        <span>123</span>
        <span>{{beautyName}}</span>
        <div @click.stop="handleCount">{{count}}</div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            name: '张三',
            count: 0,
        };
    },
    created() {
        console.log('this is created');
    },
    mounted() {
        console.log('this is mounted');
    },
    methods: {
        handleClick: function() {
            console.log(this.name);
        },
        handleCount() {
            this.count += 1;
        },
    },
    computed: {
        beautyName: function() {
            return this.name + 1;
        },
    },
};
</script>
<style scoped lang="scss">
div {
    color: red;
    cursor: pointer;
    span {
        color: green;
    }
}
</style>
