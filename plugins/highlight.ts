import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

// 添加代码高亮指令
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive('highlight',{
        updated(el,binding,vnode,prevNode){
            if(JSON.stringify(prevNode.children)==JSON.stringify(vnode.children)) {
                return   
            }
            let blocks = el.querySelectorAll('pre code')
            blocks.forEach(element => {
                hljs.highlightBlock(element)
                // 1.创建ul节点
                let ul = document.createElement("ul");
                // 2.根据换行符获取行数，根据获取的行数生成行号
                let rowCount = element.outerHTML.split('\n').length;
                for(let i=1;i <= rowCount;i++){
                    //创建li节点，创建文本节点
                    let li = document.createElement("li")
                    let text = document.createTextNode(''+i)
                    //为li追加文本节点，将li加入ul
                    li.appendChild(text)
                    ul.appendChild(li)
                }
                // 3.给行号添加类名
                ul.className = 'pre-numbering'
                // 4.将ul节点加到 代码块。这个注意根据实际情况决定放在什么位置。是父节点，本节点还是子节点上
                element.appendChild(ul)
        })
    }
    })
})