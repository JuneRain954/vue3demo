<template>
  <div class='warn-notice'>
    <header class="title">
      <span class="desc">
        <el-icon><Bell /></el-icon>
        停诊公告
      </span>
      <span class="total">
        全部
        <el-icon><ArrowRight /></el-icon>
      </span>
    </header>
    <ul class="notice-list">
      <li class="notice" v-for="(item) in noticeList" :key="item" :title="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang='ts' setup name="WarnNotice">
import { ref } from 'vue';
import { Bell, ArrowRight } from '@element-plus/icons-vue';

const noticeList = ref<string[]>([
  "中国人民解放军总医院第六医学中心(原海军总医院)呼吸内科门诊停诊公告",
  "首都医科大学附属北京潞河医院老年医学科门诊停诊公告",
  "中日友好医院中西医结合心内科门诊停诊公告",
])

</script>

<style lang='scss' scoped>
.warn-notice{
  .title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    :deep(.desc){
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 16px;
      font-weight: bold;
      padding: 20px 0;
      .el-icon{
        background: #fffaf1;
        color: #ffb05c;
        font-size: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    :deep(.total){
      &:hover{
        color: #42a5f5;
      }
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-icon{
        color: #42a5f5;
      }
    }
  }
  .notice-list{
    width: 100%;
    li.notice{
      &:hover{
        color: #42a5f5;
      }
      &::before{
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #ffaa51;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      cursor: pointer;
      font-size: 14px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 10px 0 10px 10px;
      position: relative;
    }
  }
}
</style>
