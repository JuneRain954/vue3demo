import request from '@/utils/request/index';
import { HOSPITAL, REQ_METHOD } from '../const/index';
import type { HospitalPage } from '../const/index'
import type { HospitalListResponse, HospitalTypeResponse, HospitalRegionResponse } from './type'

export class HospitalApi{
  constructor(){

  }

  static hospitalType(): Promise<HospitalTypeResponse>{
    return request({url: HOSPITAL.TYPE, method: REQ_METHOD.GET});
  }

  static hospitalRegion(): Promise<HospitalRegionResponse>{
    return request({url: HOSPITAL.REGION, method: REQ_METHOD.GET});
  }

  static hospitalList(params: HospitalPage): Promise<HospitalListResponse>{
    return request({ url: HOSPITAL.PAGE.URL(params), method: REQ_METHOD.GET });
  }
}