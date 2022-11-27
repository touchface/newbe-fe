<template>
    <el-menu mode="horizontal" :router="true">
        <el-menu-item>
            <nuxt-link class="link" to="/">
            <div>
                <img class="logo" height="22" src="/img/newbe.png"/>
            </div>
            </nuxt-link>
        </el-menu-item>
        <div class="flex-grow"></div>
        <el-menu-item v-for="(item,index) in menus" :key="index" :index="item.link">
            <el-icon><component :is="item.icon" /></el-icon>{{item.name}}
        </el-menu-item>
    </el-menu>
</template>
<script>
export default {
    props: {
        menus: {
            type: Array
        }
    }
}
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