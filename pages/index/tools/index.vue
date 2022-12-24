<template>
    <div class="container tools-box">
        <div class="tools-search"></div>
        <el-row :gutter="20">
            <el-col v-for="(item,index) of list" :key="index" :xs="24" :sm="12" :lg="6">
                <nuxt-link :to="item.to">
                <div class="tool-item">
                    <div class="tool-item-info">
                        <div class="tool-item-icon-box">
                            <img class="tool-item-icon" :src="'/icon/'+item.icon"/>
                        </div>
                        <div class="tool-item-title-box">
                            <h1 class="tool-item-title">{{item.name}}</h1>
                            <div class="tool-item-sub-title">
                                <span class="tool-item-sub-title-logo"><el-icon><Box/></el-icon></span><span>{{item.category}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="tool-item-about">
                        <div class="tool-item-about-text">{{item.about}}</div>
                    </div>
                </div>
                </nuxt-link>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                name: 'SQL参数填充',
                to: '/tools/sqlfill',
                icon: 'sql.svg',
                about: '拼接MyBatis/IBatis SQL日志参数',
                category: '实用工具'
            },{
                name:'PDF表格解析',
                to: '/tools/table-extraction',
                icon: 'pdf.svg',
                about: '解析PDF文件中的表格并生成CSV文件',
                category: '实用工具'
            }]
        }
    }
}
</script>
<style lang="scss" scoped>
.tool-item {
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    padding: 12px;
    margin-bottom: 1rem;
    box-shadow: -6px -6px 20px rgba(255, 255, 255, 1),
                    6px 6px 20px rgba(0, 0, 0, .1);
    &:hover {
        box-shadow: inset -6px -6px 10px rgba(255, 255, 255, 0.5),
                    inset 6px 6px 20px rgba(0, 0, 0, 0.05);
    }
}
.tool-item-info {
    display: flex;
    flex-direction: row;
	flex-wrap: nowrap;
    .tool-item-title-box {
        color: #333;
        padding-left: 0.5rem;
        flex-grow: 1;
    }
    .tool-item-sub-title {
        font-size: 0.8rem;
        padding: 0.5rem 0rem;
        text-align: right;
        .tool-item-sub-title-logo {
            position: relative;
            top: 2px;
            left: -2px;
        }
    }
    .tool-item-icon {
        margin: 0;
        width: 2.5rem;
        height: 2.5rem;
    }
    .tool-item-title {
        font-weight: bold;
    }
}
.tool-item-about {
    .tool-item-about-text {
        color: #444;
        padding: 1rem 0;
        font-size: 0.8rem;
    }
}
</style>