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
        :background="true"
        layout="prev, pager, next, jumper, ->, sizes, total"
        :total="total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      ></el-pagination>
    </el-card>

    <el-dialog v-model="dialogFormVisible" title="添加品牌">
      <el-form style="width: 80%">
        <el-form-item label-width="80px" label="品牌名称">
          <el-input
            placeholder="请输入品牌名称"
            v-model="trademarkParams.tmName"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="80px" label="品牌LOGO">
          <el-upload
            class="avatar-uploader"
            action="/api/admin/product/fileUpload"
            accept="image/*"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="trademarkParams.logoUrl"
              :src="trademarkParams.logoUrl"
              class="avatar"
            />
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
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
import { onMounted, reactive, ref } from "vue";
import {
  reqAddOrUpdateTrademark,
  reqHasTrademark,
} from "@/api/product/trademark";
import { Records, TradeMark } from "@/api/product/trademark/type";
import { ElMessage, UploadProps } from "element-plus";

const pageNo = ref<number>(1);
const limit = ref<number>(10);
const total = ref<number>(0);
const data = ref<Records>([]);
const dialogFormVisible = ref<boolean>(false);
let trademarkParams = reactive<TradeMark>({
  id: 0,
  tmName: "",
  logoUrl: "",
});

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
  trademarkParams.id = record.id;
  trademarkParams.logoUrl = record.logoUrl;
  trademarkParams.tmName = record.tmName;
  dialogFormVisible.value = true;
};

const handleDelete = async (record: TradeMark) => {
  console.log(record);
};

const cancel = async () => {
  dialogFormVisible.value = false;
};

const confirm = async () => {
  await reqAddOrUpdateTrademark(trademarkParams);
  dialogFormVisible.value = false;
};

//上传图片组件->上传图片之前触发的钩子函数
const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  //钩子是在图片上传成功之前触发,上传文件之前可以约束文件类型与大小
  //要求:上传文件格式png|jpg|gif 4M
  if (
    rawFile.type == "image/png" ||
    rawFile.type == "image/jpeg" ||
    rawFile.type == "image/gif"
  ) {
    if (rawFile.size / 1024 / 1024 < 4) {
      return true;
    } else {
      ElMessage({
        type: "error",
        message: "上传文件大小小于4M",
      });
      return false;
    }
  } else {
    ElMessage({
      type: "error",
      message: "上传文件格式务必PNG|JPG|GIF",
    });
    return false;
  }
};
//图片上传成功钩子
const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile,
) => {
  //response:即为当前这次上传图片post请求服务器返回的数据
  //收集上传图片的地址,添加一个新的品牌的时候带给服务器
  trademarkParams.logoUrl = response.data;
  //图片上传成功,清除掉对应图片校验结果
  // formRef.value.clearValidate("logoUrl");
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
