<template>
    <div class="container tools-box">
        <newbe-dock :list="state.list"/>
        <nuxt-page/>
    </div>
</template>
<script setup>
    import { reactive } from 'vue'
    const state = reactive({list:[{
        name:'SQL参数填充',
        to: '/tools/sqlfill',
        icon: 'sql.svg'
    },{
        name:'PDF表格解析',
        to: '/tools/table-extraction',
        icon: 'pdf.svg'
    }]})
</script>
<style lang="scss" scoped>
.tools-box {
    padding: 1em 1em;
}
</style>