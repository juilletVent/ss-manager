<template>
  <div class="panel">
    <div class="title">欢迎奆佬</div>
    <el-form
      v-show="!showLink"
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
    >
      <el-form-item prop="passwd">
        <el-input
          v-model="ruleForm.passwd"
          size="large"
          class="passwd"
          placeholder="请输入你的口令"
          :prefix-icon="Lock"
          clearable
        />
      </el-form-item>
      <el-checkbox
        v-model="ruleForm.refresh"
        label="刷新密码（已经导入的设备将失效）"
        size="large"
      />
      <div class="btn-group">
        <el-button
          :loading="loading"
          size="large"
          :icon="Check"
          type="primary"
          @click="submitForm(ruleFormRef)"
          >确定</el-button
        >
      </div>
    </el-form>
    <div v-show="showLink">
      <el-descriptions title="配置信息" :column="2" size="small" border>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">地址</div>
          </template>
          xxxxx.com
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">端口</div>
          </template>
          37777
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">加密方式</div>
          </template>
          aes-256-gcm
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">密码</div>
          </template>
          *******
        </el-descriptions-item>
        <el-descriptions-item span="2">
          <template #label>
            <div class="cell-item">二维码</div>
          </template>
          <canvas class="qr-canvas" ref="qrRef"></canvas>
        </el-descriptions-item>
        <el-descriptions-item span="2">
          <template #label>
            <div class="cell-item">链接</div>
          </template>
          <span class="link-span" @click="onCopy()"
            >点击复制：ss://xxxxxxxxxxxxxxxxxxxxxxxxxxxx</span
          >
        </el-descriptions-item>
      </el-descriptions>
      <div class="btn-group">
        <el-button size="large" :icon="Back" type="primary" @click="onBack()"
          >返回</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { Check, Lock, Back } from "@element-plus/icons-vue";
import * as QRcode from "qrcode";
const loading = ref(false);
const showLink = ref(false);
const ruleFormRef = ref<FormInstance>();
const qrRef = ref<HTMLCanvasElement>();
const ruleForm = reactive({
  passwd: "",
  refresh: false,
});
const rules = reactive({
  passwd: [
    { required: true, message: "口令不能为空", trigger: "change" },
    { max: 50, message: "口令过长", trigger: "change" },
  ],
});
const onBack = () => {
  showLink.value = false;
};
const onCopy = () => {
  const inputDom = document.createElement("input");
  inputDom.style.position = "absolute";
  inputDom.style.clipPath = "inset(50%)";
  inputDom.value = "ss://xxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  document.body.appendChild(inputDom);
  inputDom.select();
  document.execCommand("copy");
  document.body.removeChild(inputDom);
  ElMessage({
    message: "复制成功",
    type: "success",
  });
};
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid, fields) => {
    if (valid) {
      console.log("vals: ", ruleForm);
      loading.value = true;
      new Promise<void>((resolve, reject) => {
        setTimeout(resolve, 1000);
      })
        .then(() => {
          showLink.value = true;
          QRcode.toCanvas(
            qrRef.value,
            encodeURI("ss://xxxxxxxxxxxxxxxxxxxxxxxxxxxx"),
            { errorCorrectionLevel: "L" }
          );
        })
        .finally(() => {
          loading.value = false;
        });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style type="less" scoped>
.panel {
  margin-top: -100px;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgb(0 0 0 / 56%);
  background-color: #fff;
}
.title {
  margin-bottom: 50px;
  font-size: 28px;
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
.qr-canvas {
  display: block;
  border-radius: 5px;
  margin: 0 auto;
}
.link-span {
  display: inline-block;
  max-width: 380px;
  word-break: break-all;
  cursor: grabbing;
}
</style>