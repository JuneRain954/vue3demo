<template>
  <footer class="footer">
    <div class="content">
      <section class="desc left">
        <span>京ICP备 13018369号</span>
        <span>电话挂号；010-56253825</span>
      </section>
      <section class="desc right">
        <span class="btn">联系我们</span>
        <span class="btn">合作伙伴</span>
        <span class="btn">用户协议</span>
        <span class="btn">隐私协议</span>
      </section>
    </div>
  </footer>
</template>

<script setup lang='ts' name="Footer">
// 加个注释，避免组件名不生效
</script>

<style lang="scss" scoped>
.footer{
  width: 100%;
  height: 50px;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  .content{
    width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .desc{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: #bbb;
      font-size: 14px;
      &.right{
        .btn{
          cursor: pointer;
          &:hover{
            color: #42a5f5;
          }
        }
      }
    }
  }
}
</style>