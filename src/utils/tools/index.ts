/**
 * 定义工具函数
 * 
 */


/**
 * 判断对象中是否含有指定的键名
 * @param obj 目标对象
 * @param key 键名
 * @returns Boolean
 */
export function hasOwnKey(obj: object, key: string): boolean{
  return Reflect.has(obj, key);
}