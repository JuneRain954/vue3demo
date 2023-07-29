import request from '@/utils/request/index';
import { HOSPITAL, REQ_METHOD } from '../const/index';
import { hasOwnKey } from '@/utils/tools';
import type {
  HospitalListParams,
  HospitalListResponse,
  HospitalTypeResponse,
  HospitalRegionResponse
} from './type'

const { TYPE, REGION, PAGE } = HOSPITAL;
const { GET } = REQ_METHOD;
export class HospitalApi{
  constructor(){

  }

  static hospitalType(): Promise<HospitalTypeResponse>{
    return request({url: TYPE, method: GET});
  }

  static hospitalRegion(): Promise<HospitalRegionResponse>{
    return request({url: REGION, method: GET});
  }

  static hospitalList(params: HospitalListParams): Promise<HospitalListResponse>{
    const { page, limit, ...rest } = params;
    return request({ url: PAGE.URL(params), method: GET, params: parseUrlSearchParams(rest) });
  }
}

/**
 * GET请求的参数处理
 * @param params 请求参数对象
 * @returns URLSearchParams 对象
 */
function parseUrlSearchParams<T extends object>(params: T): object{
  const searchParams = new URLSearchParams();
  for(const key in params){
    if(hasOwnKey(params, key)){
      searchParams.set(key, `${params[key]}`);
    }
  }
  return searchParams;
}