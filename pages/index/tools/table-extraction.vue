<template>
    <div class="box-warp" v-loading="loading">
        <el-upload
            :limit="1"
            drag
            @success="onSuccess"
            :http-request="httpRequest"
            accept="application/pdf"
            action="/api/tools/table-extract/upload">
            <el-icon class="el-icon--upload"><upload-filled/></el-icon>
            <div class="el-upload__text">
                拖拽文件到此处或 <em>点击上传</em>
            </div>
            <template #tip>
            <div class="el-upload__tip">解析PDF文件中的表格,处理完后将自动下载解析出的表格内容（不支持扫描的PDF文档）</div>
            </template>
        </el-upload>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'

    // 加载标志
    const loading = ref(false)
    // 生命周期 挂载完成
    const onSuccess = (rsp,file)=>{
        let url = window.URL.createObjectURL(new Blob([rsp],{type:"application/vnd.ms-excel;charset=utf-8"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download',file.name.replace('.pdf','.xlsx').replace('.PDF','.xlsx'))
        document.body.appendChild(link)
        link.click()
        // 释放URL对象所占资源
        window.URL.revokeObjectURL(url)
        // 用完即删
        document.body.removeChild(link)
    }
    // 配置XMLHTTP请求对象
    const httpRequest = (options)=>{
        return new Promise((resolve,reject)=>{
            let xhr = new XMLHttpRequest()
            xhr.responseType = 'blob'
            let form = new FormData();
            form.append("file", options.file)
            xhr.open('POST', options.action)
            xhr.send(form)
            loading.value = true
            xhr.onload = function(e) {
                if (this.status == 200) {
                    resolve(this.response)
                } else if(this.status == 500) {
                    reject(this.response)
                }
            }
            xhr.onloadend = function() {
                loading.value = false
            }
        })
    }
</script>
<style lang="scss" scoped>
</style>