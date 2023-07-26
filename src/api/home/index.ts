import request from '@/utils/request/index';
import { HOSPITAL, REQ_METHOD } from '../const/index';
import type { HospitalPage } from '../const/index'

export interface ListResponseData {
  content: Array<object>;
  totalElements: number;
}

export interface ApiResponse{
  code: number;
  data: Array<object>;
  message: string;
  ok?: string;
}


export class HospitalApi{
  constructor(){

  }

  static hospitalType(): Promise<ApiResponse> | Promise<any>{
    return request({url: HOSPITAL.TYPE, method: REQ_METHOD.GET});
  }

  static hospitalRegion(){
    return request({url: HOSPITAL.REGION, method: REQ_METHOD.GET});
  }

  static hospitalList(params: HospitalPage): Promise<ApiResponse> | Promise<any>{
    return request({ url: HOSPITAL.PAGE.URL(params), method: REQ_METHOD.GET });
  }
}