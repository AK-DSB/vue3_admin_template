<template>
  <div>
    <el-card class="box-card">
      <!-- 按钮组件 -->
      <el-button type="primary" icon="Plus" size="default" @click="handleAdd">
        添加品牌
      </el-button>
      <!-- 表格组件 -->
      <el-table row-key="id" :data="data" style="margin: 10px 0" border>
        <el-table-column type="index" label="序号" :width="80" align="center" />
        <el-table-column prop="tmName" label="品牌名称" align="center" />
        <el-table-column prop="logoUrl" label="品牌LOGO" align="center">
          <template #default="{ row }">
            <el-image
              style="width: 100px; height: 100px"
              :src="row.logoUrl"
              fit="fill"
              :preview-teleported="true"
            />
          </template>
        </el-table-column>
        <el-table-column label="品牌操作" align="center">
          <template #default="{ row }">
            <el-button
              type="primary"
              size="small"
              icon="Edit"
              @click="handleEdit(row)"
            ></el-button>
            <el-button
              type="warning"
              size="small"
              icon="Delete"
              @click="handleDelete(row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分液器组件 -->
      <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="limit"
        :page-sizes="[3, 5, 7, 9]"
        layout="prev, pager, next, jumper, ->, sizes, total"
        :total="total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      ></el-pagination>
    </el-card>

    <el-dialog v-model="dialogFormVisible" title="添加品牌">
      <el-form style="width: 80%">
        <el-form-item label-width="80px" label="品牌名称">
          <el-input placeholder="请输入品牌名称"></el-input>
        </el-form-item>
        <el-form-item label-width="80px" label="品牌LOGO">
          <el-upload
            class="avatar-uploader"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false"
          >
            <img v-if="false" class="avatar" alt="" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" size="default" @click="cancel">
          取消
        </el-button>
        <el-button type="primary" size="default" @click="confirm">
          确定
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { reqHasTrademark } from "@/api/product/trademark";
import { Records, TradeMark } from "@/api/product/trademark/type";

const pageNo = ref<number>(1);
const limit = ref<number>(10);
const total = ref<number>(0);
const data = ref<Records>([]);
const dialogFormVisible = ref<boolean>(false);

const getHasTrademark = async () => {
  try {
    const result = await reqHasTrademark(pageNo.value, limit.value);
    if (!result) {
      return;
    }
    data.value = result.records;
    total.value = result.total;
  } catch (e) {
    console.log(e);
  }
};

const handleCurrentChange = async () => {
  await getHasTrademark();
};

const handleSizeChange = async () => {
  await getHasTrademark();
};

const handleAdd = async () => {
  dialogFormVisible.value = true;
};

const handleEdit = async (record: TradeMark) => {
  console.log(record);
  dialogFormVisible.value = true;
};

const handleDelete = async (record: TradeMark) => {
  console.log(record);
};

const cancel = async () => {
  dialogFormVisible.value = true;
};

const confirm = async () => {
  dialogFormVisible.value = true;
};

onMounted(async () => {
  await getHasTrademark();
});
</script>
<style scoped lang="scss">
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
