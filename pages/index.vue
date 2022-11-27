<template>
    <el-container class="container">
        <el-header style="padding:0">
            <newbe-header :menus="menus"></newbe-header>
        </el-header>
        <el-main class="main">
            <el-row>
                <el-col :xs="0" :lg="2" :xl="4"></el-col>
                <el-col :xs="24" :lg="20" :xl="16">
                    <nuxt-page/>
                </el-col>
                <el-col :xs="0" :lg="2" :xl="4"></el-col>
            </el-row>
        </el-main>
        <el-footer></el-footer>
    </el-container>
</template>
<script>
export default {
    data() {
        return {
            menus: [{
                name: '首页',
                link: '/',
                icon: 'House'
            },{
                name: '文章',
                link: '/article',
                icon: 'Collection'
            },{
                name: '动态',
                link: '/dynamic',
                icon: 'Sunrise'
            },{
                name: '工具',
                link: '/tools',
                icon: 'SuitcaseLine'
            },{
                name: '友链',
                link: '/link',
                icon: 'Connection'
            }]
        }
    }
}
</script>
