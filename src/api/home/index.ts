import request from '@/utils/request/index';
import { HOSPITAL, REQ_METHOD } from '../const/index';
import { hasOwnKey, isInvalidValue } from '@/utils/tools';
import type {
  HospitalNameParams,
  HospitalNameResponse,
  HospitalListParams,
  HospitalListResponse,
  HospitalTypeResponse,
  HospitalRegionResponse
} from './type'

const { TYPE, REGION, PAGE, FIND_BY_NAME } = HOSPITAL;
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

  static queryHospitalByName(params: HospitalNameParams): Promise<HospitalNameResponse>{
    return request({url: FIND_BY_NAME.URL(params), method: GET });
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
      !isInvalidValue(params[key]) && searchParams.set(key, `${params[key]}`);
    }
  }
  return searchParams;
}