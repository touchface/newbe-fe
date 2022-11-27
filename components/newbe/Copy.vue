<template>
    <el-icon @click="copyValue(value)" :title="title" class="newbe-copy"><DocumentCopy/></el-icon>
</template>
<script>
import { ElMessage } from 'element-plus'

export default {
    props: {
        value: String,
        title: {
            type: String,
            default: '复制'
        }
    },
    methods: {
        copyValue(value) {
            if(value!=null&&value!='') {
                navigator.clipboard.writeText(value).then(()=>{
                    ElMessage.success('复制内容成功')
                })
            } else {
                ElMessage.error('无可复制内容')
            }            
        }
    }
}
</script>
<style lang="scss" scoped>
.newbe-copy{
    transition: all 0.1s;
    &:hover{
        transform: scale(1.2);
    }
}
</style>