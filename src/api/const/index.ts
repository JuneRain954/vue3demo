/**
 * 接口路径
 */

// 请求方式
export enum  REQ_METHOD {
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
  FIND_BY_NAME: getDynamicURL("/hosp/hospital/findByHosname/{hosname}"), // GET 根据名字搜索医院
}

function getDynamicURL(url: string){
  return {
    url,
    URL: function<T extends object>(payload: T){
      let { url } = this;
      url = url.replace(/\{([a-zA-Z]+)\}/g, (_, group: string) => {
        return group ? `${payload[group as keyof T]}` : "";
      })
      return url;
    }
  } 
}