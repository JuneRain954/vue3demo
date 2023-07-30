<template>
  <div class='hospital-department'>
    <header class="title">
      <span class="desc">常见科室</span>
      <span class="total">全部<el-icon><ArrowRight /></el-icon></span>
    </header>
    <ul class="department-list">
      <li class="department" v-for="(item) in departmentList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang='ts' setup name="HospitalDepartment">
import { ArrowRight } from '@element-plus/icons-vue';
import { ref } from 'vue';

const departmentList = ref<string[]>([
  "神经内科",
  "消化内科",
  "呼吸内科",
  "内科",
  "神经外科",
  "妇科",
  "产科",
  "儿科",
]);

</script>

<style lang='scss' scoped>
.hospital-department{
  .title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .desc{
      font-size: 16px;
      font-weight: bold;
      padding: 20px 0;
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
  .department-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .department{
      white-space: nowrap;
      width: 50%;
      padding: 10px 0;
      color: #333;
      font-size: 14px;
      cursor: pointer;
      &:hover{
        color: #42a5f5;
      }
    }
  }
}
</style>
