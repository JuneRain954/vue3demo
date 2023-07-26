import request from './request';
import { HOSPITAL, REQ_METHOD } from '../const/api';
import type { HospitalPage } from '../const/api'

export interface ListResponseData {
  content: Array<object>;
  totalElements: number;
}

export interface ApiResponse{
  code: number;
  data: object;
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
