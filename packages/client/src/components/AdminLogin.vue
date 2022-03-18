<template>
  <div class="panel">
    <div class="title">冷静、理智、稳重</div>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
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
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { Check, Lock, Back } from "@element-plus/icons-vue";
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();
const qrRef = ref<HTMLCanvasElement>();
const ruleForm = reactive({
  passwd: "",
});
const rules = reactive({
  passwd: [
    { required: true, message: "口令不能为空", trigger: "change" },
    { max: 50, message: "口令过长", trigger: "change" },
  ],
});
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid, fields) => {
    if (valid) {
      console.log("vals: ", ruleForm);
      loading.value = true;
      new Promise<void>((resolve, reject) => {
        setTimeout(resolve, 1000);
      })
        .then(() => {})
        .finally(() => {
          loading.value = false;
        });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>