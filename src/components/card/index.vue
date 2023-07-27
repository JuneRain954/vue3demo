<template>
  <el-card shadow="hover">
    <div class='card-component'>
      <section class="info">
        <div class="name">{{ props.info.hosname }}</div>
        <div class="label">
          <span>
            <el-icon><Medal /></el-icon>
            {{ props.info.param.hostypeString }}
          </span>
          <span>
            <el-icon><AlarmClock /></el-icon>
            每天{{ props.info.bookingRule.releaseTime }}放号
          </span>
        </div>
      </section>
      <section class="logo">
        <div class="img-container">
          <img :src="props.info.logoData" alt="logo">
        </div>
      </section>
    </div>
  </el-card>
</template>

<script lang='ts' setup name="Card">
import { AlarmClock, Medal } from '@element-plus/icons-vue';
import type { PropType } from 'vue';
import type { HospitalInfo } from '@/api/type'


const props = defineProps({
  info: {
    type: Object as PropType<HospitalInfo>,
    default: () => ({
      hosname: "",
      param: {hostypeString: ""},
      logoData: "",
      bookingRule: {releaseTime: ""},
    }),
  }
});

</script>

<style lang='scss' scoped>
.card-component{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 40px;
  box-sizing: border-box;
  .info{
    width: 70%;
    .name{
      font-size: 17px;
      margin-bottom: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .label{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      color: #bbb;
      :deep(.el-icon){
        vertical-align: bottom;
      }
    }
  }
  .logo{
    .img-container{
      height: 70px;
      width: 70px;
      border-radius: 50%;
      overflow: hidden;
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
