import request from '@/utils/request';

/**
 *********************************************************
 * @desc ： 查询基础数据列表
 * @author Pings
 * @date   2019/3/26
 * @return ApiResponse
 * *******************************************************
 */
export async function queryList(params) {
  return request('/charge/chargeData/list', params);
}

