<template>
    <div class="box-warp">
        <div class="box-padding">
            <textarea v-model="sqlStr" style="height:8rem;" class="sql-box" placeholder="MyBatis 日志SQL语句"></textarea>
        </div>
        <div class="box-padding">
            <textarea v-model="paramStr" class="sql-box" placeholder="MyBatis 日志参数"></textarea>
        </div>
        <div class="box-padding button-line">
            <el-button type="primary" @click="fillParams">填充</el-button>
            <el-button @click="reset">重置</el-button>
        </div>
        <div class="box-padding">
            <div class="code-copy">
                <newbe-copy :value="sqlFill"/>
            </div>
            <pre class="code-box" v-highlight><code class="sql">{{sqlFill}}</code></pre>
        </div>
    </div>
</template>
<script>
import {format} from 'sql-formatter'

export default {
    data() {
        return {
            sqlStr: null,
            sqlFill: null,
            paramStr: null
        }
    },
    methods: {
        fillParams() {
            let param = null
            if(this.paramStr==null) {
                return
            }
            if(this.paramStr.indexOf("[")!=-1) {
                // ibatis处理
                param=this.paramStr.substring(this.paramStr.indexOf("[")+1,this.paramStr.lastIndexOf("]"));
            } else {
                // mybatis处理
                // 去除所有()中间的内容
                param = this.paramStr.replace(/\(.*?\)/g,'')
            }
            param=param.replaceAll(', ',',')
            let params=param.split(",")
            let sql = this.sqlStr
            for(let i=0;i<params.length;i++){
                if(params[i]=='null') {
                    sql=sql.replace("?",params[i])
                } else {
                    sql=sql.replace("?","'"+params[i]+"'")
                }
            }
            this.sqlFill = format(sql)            
        },
        reset() {
            this.sqlFill = null
            this.sqlStr = null
            this.paramStr = null
        }
    }
}
</script>
<style lang="scss" scoped>
.sql-box {
    width: 100%;
    border-radius: 4px;
    outline: none;
    resize: none;
    border: 1px solid #DCDFE6
}
.button-line {
    text-align: right;
}

.code-box {
    max-height: 360px;
    overflow-y: scroll;
}
.code-copy {
    text-align: right;
}
</style>