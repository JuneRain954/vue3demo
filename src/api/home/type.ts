/**
 * 首页接口数据类型定义
 */

// 接口返回通用类型
export interface ApiResponse {
  code: number;
  message: string;
  ok: boolean;
}

// 医院信息
export interface HospitalInfo {
  address: string;
  bookingRule: {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    rule: string[];
  };
  cityCode: string; 
  createTime: string;
  districtCode: string;
  hoscode: string;
  hosname: string;
  hostype: string;
  id: string;
  intro: string | null;
  isDeleted: number;
  logoData: string;
  param: {
    hostypeString: string;
    fullAddress: string;
  };
  provinceCode: string;
  route: string;
  status: number;
  updateTime: string;
}

// 医院信息列表
export type HospitalInfoList = HospitalInfo[];

// 医院分页接口的 data 字段
export interface HospitalApiReponseData {
  content: HospitalInfoList;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
}


// 医院分页接口请求参数类型
export interface HospitalListParams {
  page: number;
  limit: number;
  hostype?: string;
  districtCode?: string;
  hosname?: string;
}

// 医院分页接口的整体返回类型
export interface HospitalListResponse extends ApiResponse {
  data: HospitalApiReponseData;
}


// 医院类型
export interface HospitalType {
  createTime: string;
  dictCode: string;
  hasChildren: boolean;
  id: number;
  isDeleted: number;
  name: string;
  param: object;
  parentId: number;
  updateTime: string;
  value: string;
}

// 医院类型接口的整体返回类型
export interface HospitalTypeResponse extends ApiResponse {
  data: HospitalType[];
}


// 医院地区
export interface HospitalRegion {
  reateTime: string;
  dictCode: null | string | number;
  hasChildren: boolean;
  id: number;
  isDeleted: number;
  name: string;
  param: object;
  parentId: number;
  updateTime: string;
  value: string;
}

// 医院地区接口整体返回类型
export interface HospitalRegionResponse extends ApiResponse {
  data: HospitalRegion[];
}

// 医院名字搜索接口的请求数据类型
export interface HospitalNameParams {
  hosname: string;
}

// 医院名字搜索接口的返回类型
export interface HospitalNameResponse extends ApiResponse {
  data: HospitalInfo[];
}

// 医院挂号详情接口的请求参数类型
export interface HospitalRegistrationParams {
  hoscode: string;
}

// 医院挂号详情接口的返回类型
export interface HospitalRegistrationResponse extends ApiResponse {
  data: {
    bookingRule: HospitalInfo["bookingRule"];
    hospital: HospitalInfo;
  }
}

// 医院科室列表接口的请求参数类型
export type HospitalDepartmentParams = HospitalRegistrationParams;

// 医院科室信息
export interface HospitalDepartmentInfo {
  children: HospitalDepartmentInfo[] | null;
  depname: string;
  depcode: string;
}

// 医院科室列表接口的返回类型
export interface HospitalDepartmentResponse extends ApiResponse{
  data: HospitalDepartmentInfo[];
}