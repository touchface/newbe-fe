import request from '~/utils/request'

/**
 * 解析表格
 * @param param 解析参数 
 * @returns Promise结果
 */
export const extractTable = (param)=>{
    return request.post('/tools/table-extract/upload',param)
}

export default {extractTable}