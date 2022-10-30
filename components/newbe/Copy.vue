<template>
    <el-icon @click="copyValue(props.value)" :title="props.title" class="newbe-copy"><DocumentCopy/></el-icon>
</template>
<script setup>
import {defineProps} from 'vue'
import { ElMessage } from 'element-plus'

const props = defineProps({
    value: String,
    title: {
        type: String,
        default: '复制'
    }
})

const copyValue = (value)=>{
    if(value!=null&&value!='') {
        navigator.clipboard.writeText(value).then(()=>{
            ElMessage.success('复制内容成功')
        })
    } else {
        ElMessage.error('无可复制内容')
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