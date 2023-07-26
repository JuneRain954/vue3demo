/**
 * 接口路径
 */

export interface HospitalPage {
  page: number;
  limit: number;
}

// 请求方式
export const enum  REQ_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
};

// 接口URL
export const HOSPITAL = {
  PAGE: getDynamicURL("/hosp/hospital/{page}/{limit}"), // GET 获取分页列表
  TYPE: "/cmn/dict/findByDictCode/Hostype", // GET 医院类型
  REGION: "/cmn/dict/findByDictCode/Beijin",  // GET 医院地区
}

function getDynamicURL(url: string){
  return {
    url,
    URL: function(payload: HospitalPage){
      let { url } = this;
      url = url.replace(/\{([a-zA-Z]+)\}/g, (_, group: string) => {
        return group ? `${payload[group as keyof HospitalPage]}` : "";
      })
      return url;
    }
  } 
}