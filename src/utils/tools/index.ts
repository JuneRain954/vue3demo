/**
 * 定义工具函数
 * 
 */
const IS_NULL_OR_UNDEFINED = Symbol("is_null_or_undefined");


/**
 * 判断对象中是否含有指定的键名
 * @param obj 目标对象
 * @param key 键名
 * @returns Boolean
 */
export function hasOwnKey(obj: object, key: string): boolean{
  return Reflect.has(obj, key);
}

/**
 * 判断给定数据是否为无效值
 * @param params 给定数据
 * @returns Boolean
 */
export function isInvalidValue(params: any): boolean{
  return params === "" || isNullOrUndefined(params);
}

/**
 * 判断给定数据是否为 null 或 undefined
 * @param data any
 * @returns Boolean
 */
export function isNullOrUndefined(data: any): boolean{
  return (data ?? IS_NULL_OR_UNDEFINED) === IS_NULL_OR_UNDEFINED;
}