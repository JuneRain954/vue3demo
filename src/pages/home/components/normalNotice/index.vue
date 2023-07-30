<template>
  <div class='normal-notice'>
    <header class="title">
      <span class="desc">
        <el-icon><ChatLineRound /></el-icon>
        平台公告
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

<script lang='ts' setup name="NormalNotice">
import { ChatLineRound, ArrowRight } from '@element-plus/icons-vue';
import { ref } from 'vue';

const noticeList = ref<string[]>([
  "关于延长北京大学国际医院放假的通知",
  "北京中医药大学东方医院部分科室医生门诊医",
  " 武警总医院号源暂停更新通知",
]);

</script>

<style lang='scss' scoped>
.normal-notice{
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
        background: #f2f8ff;
        color: #83aeff;
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
        background: #83aeff;
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
