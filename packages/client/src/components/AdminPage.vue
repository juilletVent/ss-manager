<template>
  <div class="page-panel">
    <div class="title">冷静、理智、稳重</div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="user" label="用户名" width="200" />
      <el-table-column prop="pwd" label="用户口令" />
      <el-table-column prop="statistics" label="用量" width="200" />
      <el-table-column label="操作" width="400">
        <el-button :icon="RefreshLeft">重置流量</el-button>
        <el-button :icon="Delete" type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    <el-divider border-style="dashed">添加用户</el-divider>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="cs-user-add"
    >
      <el-form-item prop="nickname">
        <el-input
          v-model="ruleForm.nickname"
          size="large"
          placeholder="请输入用户昵称"
          :prefix-icon="User"
          clearable
        />
      </el-form-item>
      <el-form-item prop="passwd">
        <el-input
          v-model="ruleForm.passwd"
          size="large"
          class="passwd"
          placeholder="请输入用户口令"
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
          >添加用户</el-button
        >
        <el-button
          :loading="loading"
          size="large"
          :icon="RefreshLeft"
          @click="submitForm(ruleFormRef)"
          >重置所有流量</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import {
  RefreshLeft,
  Delete,
  Lock,
  User,
  Check,
} from "@element-plus/icons-vue";
const loading = ref(false);
const showLink = ref(false);
const ruleFormRef = ref<FormInstance>();
const qrRef = ref<HTMLCanvasElement>();
const ruleForm = reactive({
  passwd: "",
  refresh: false,
});
const rules = reactive({
  nickname: [
    { required: true, message: "用户名称不能为空", trigger: "change" },
    { max: 50, message: "用户名称过长", trigger: "change" },
  ],
  passwd: [
    { required: true, message: "口令不能为空", trigger: "change" },
    { max: 50, message: "口令过长", trigger: "change" },
  ],
});
const tableData = reactive([
  {
    user: "B哥111",
    pwd: "pwdsad了;jlkjfkdlsffa",
    statistics: "12.16 GB",
  },
  {
    user: "B哥",
    pwd: "pwdsad了;jlkjfkdlsffa",
    statistics: "12.16 GB",
  },
  {
    user: "B哥",
    pwd: "pwdsad了;jlkjfkdlsffa",
    statistics: "12.16 GB",
  },
  {
    user: "B哥",
    pwd: "pwdsad了;jlkjfkdlsffa",
    statistics: "12.16 GB",
  },
  {
    user: "B哥",
    pwd: "pwdsad了;jlkjfkdlsffa",
    statistics: "12.16 GB",
  },
  {
    user: "B哥",
    pwd: "pwdsad了;jlkjfkdlsffa",
    statistics: "12.16 GB",
  },
]);
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

<style lang="less" scoped>
.page-panel {
  width: 85vw;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgb(0 0 0 / 56%);
  background-color: #fff;
}
.el-divider {
  margin: 70px 0;
}
.cs-user-add {
  width: 500px;
  margin: 0 auto;
}
</style>