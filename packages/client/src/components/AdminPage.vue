<template>
  <div class="page-panel">
    <div class="title">冷静、理智、稳重</div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="nickName" label="用户名" width="'30%'" />
      <el-table-column prop="password" label="用户口令" width="'20%'" />
      <el-table-column prop="statistics" label="用量" width="'30%'" />
      <el-table-column label="操作" width="'20%'">
        <template v-slot:default="scope">
          <el-popconfirm title="确定重置流量吗？" placement="top">
            <template #reference>
              <el-button :icon="RefreshLeft">重置流量</el-button>
            </template>
          </el-popconfirm>
          <el-popconfirm
            title="确定删除吗？"
            placement="top"
            @confirm="onItemDel(scope.row)"
          >
            <template #reference>
              <el-button :icon="Delete" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-divider border-style="dashed">添加用户</el-divider>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="cs-user-add"
    >
      <el-form-item prop="nickName">
        <el-input
          v-model="ruleForm.nickName"
          size="large"
          placeholder="请输入用户昵称"
          :prefix-icon="User"
          clearable
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
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
          @click="onSubmitAdd(ruleFormRef)"
          >添加用户</el-button
        >
        <el-popconfirm
          title="确定重置流量吗？"
          placement="top"
          @confirm="submitForm(ruleFormRef)"
        >
          <template #reference>
            <el-button :loading="loading" size="large" :icon="RefreshLeft"
              >重置所有流量</el-button
            >
          </template>
        </el-popconfirm>
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
import { ssManager as API_SSMANAGER } from "@/api";
const loading = ref(false);
const showLink = ref(false);
const ruleFormRef = ref<FormInstance>();
const qrRef = ref<HTMLCanvasElement>();
const ruleForm = reactive({});
const rules = reactive({
  nickName: [
    { required: true, message: "用户名称不能为空", trigger: "change" },
    { max: 50, message: "用户名称过长", trigger: "change" },
  ],
  password: [
    { required: true, message: "口令不能为空", trigger: "change" },
    { max: 50, message: "口令过长", trigger: "change" },
  ],
});
const tableData = reactive([]);

const getListData = () => {
  API_SSMANAGER.users_get({}).then(({ data }) => {
    tableData.length = 0;
    tableData.push(...data);
  });
};

const onSubmitAdd = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid, fields) => {
    if (valid) {
      loading.value = true;
      API_SSMANAGER.users_post({
        data: {
          ...ruleForm,
          isAdmin: 0,
          statistics: 0,
        },
      })
        .then(() => {
          formEl.resetFields();
          getListData();
        })
        .finally(() => {
          loading.value = false;
        });
    } else {
      console.log("error submit!", fields);
    }
  });
};
const onItemDel = (row) => {
  API_SSMANAGER.users_id_delete({
    path: { id: row.id },
  }).then(getListData);
};

onMounted(() => {
  getListData();
});
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
  margin: 50px 0;
}
.cs-user-add {
  width: 500px;
  margin: 0 auto;
}
</style>