<template>
  <header class="header">
    <div class="content">
      <section class="operate left">
        <div class="img">
          <img class="logo" src="../../assets/images/logo.png" alt="logo">
        </div>
        <div class="desc">预约挂号平台</div>
      </section>
      <section class="operate right">
        <span class="btn">帮助中心</span>
        <span class="btn">登录/注册</span>
      </section>
    </div>
  </header>
</template>

<script setup lang='ts' name="Header">
// 加个注释，避免组件名不生效
</script>

<style scoped>
.header{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  .content{
    width: 1200px;
    height: 70px;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .operate.left{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      .img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        .logo{
          height: 100%;
          width: 100%;
        }
      }
      .desc{
        font-size: 20px;
        color: #55abfe;
      }
    }
    .operate.right{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      .btn{
        font-size: 14px;
        color: #bbb;
      }
    }
  }
}
</style>