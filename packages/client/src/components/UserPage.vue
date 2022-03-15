<template>
  <div class="panel h-96">
    <div class="title">欢迎大佬</div>
    <el-input
      v-model="passwd"
      size="large"
      class="passwd"
      placeholder="请输入你的口令"
      :prefix-icon="Lock"
    />
    <el-checkbox
      v-model="refresh"
      label="刷新口令（已经导入的设备将失效）"
      size="large"
    />
    <div class="btn-group">
      <el-button size="large" :icon="Check" type="primary">确定</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Check, Lock } from "@element-plus/icons-vue";
const passwd = ref("");
const refresh = ref(false);
onMounted(() => {
  console.log("Component is mounted!");
});
</script>

<style type="less" scoped>
.panel {
  background-color: #fff;
  padding: 50px;
  border-radius: 5px;
}
.title {
  margin-bottom: 40px;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  color: #333;
}
.passwd {
  margin-bottom: 10px;
}
.btn-group {
  margin-top: 40px;
  text-align: center;
}
.btn-group button {
  width: 150px;
}
</style>