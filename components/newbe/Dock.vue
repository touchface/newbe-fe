<template>
    <ul class="dock" name="dock">
        <li class="dock-item" v-for="(item,index) in props.list" :key="index" :title="item.name" @click="setActive(item.to)">
            <nuxt-link :to="item.to"><img :class="item.to==active?'active':''" :src="'/icon/'+item.icon"/></nuxt-link>
        </li>
    </ul>
</template>
<script setup>
    import {defineProps,ref,onMounted} from 'vue'

    const route = useRoute()
    const props = defineProps({
        list:Array
    })

    // 定义激活的dock项
    const active = ref(-1)

    // 设置激活项
    const setActive = (one)=>{
        active.value = one
    }


    // 生命周期--加载完成
    onMounted(()=>{
        active.value = route.path
    })
</script>
<style lang="scss" scoped>
    .dock{
        padding: 6px 6px;
        // background-color: rgba(220,224,235,0.9);
        margin-bottom: 6px;
        border-radius: 6px;
        display: flex;
        .dock-item {
            margin-right: 9px;
            vertical-align: middle;
            height: 36px;
            img {
                display: inline-block;
                padding: 3px;
                width: 36px;
                height: 36px;
                cursor: pointer;  
                transition: all 0.1s;
                &:hover{
                    transform: scale(1.2);
                }
            }
            .active {
                border: 1px solid #D5D2E2;
                background-color: rgba(237,235,244,0.9);
                border-radius: 4px;
            }
        }
    }
</style>