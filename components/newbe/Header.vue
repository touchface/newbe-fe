<template>
    <el-menu :ellipsis="false" mode="horizontal">
        <el-menu-item>
            <div>
                <img class="logo" height="22" src="/img/newbe.png"/>
            </div>
        </el-menu-item>
        <div class="flex-grow"></div>
        <el-menu-item index="1">
            <el-icon><SuitcaseLine/></el-icon>工具箱
        </el-menu-item>
    </el-menu>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
    .flex-grow {
      flex-grow: 1;
    }
    .logo{
        display: inline-block;
        vertical-align: middle;
    }
</style>