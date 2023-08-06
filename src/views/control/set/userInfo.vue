<template>
    <div class="userinfo">
        <el-upload class="avatar-uploader" action="/api/userdata/avator" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
                <Plus />
            </el-icon>
        </el-upload>
        <div class="userinfo-form">
            <el-input v-model="name" placeholder="昵称" clearable />
            <el-input v-model="id" placeholder="登录账号" clearable type="text" />
            <el-input v-model="signature" placeholder="签名" clearable />
            <div class="social-tag" v-for="(item, index) in socialTag" :key="index">
                <Tag :icon="item.key"></Tag>
                <el-input v-model="item.value"></el-input>
            </div>
        </div>
        <div class="userinfo-social-tag">
            <el-dropdown :hide-on-click="false" trigger="click">
                <span class="el-dropdown-link">
                    <el-button type="primary">社交标签</el-button>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="(item, index) in  socialOptions " :key="index" @click="addSocialTag(item)">
                            <div class="item">
                                <Tag :icon="item.key"></Tag>
                            </div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-button type="primary" @click="confirmFix()">确认修改</el-button>
        </div>
    </div>
</template>
<!-- 
    头像
    key
    name
    社交tag
    签名
 -->
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { Tag } from '@/components'
import { uploadUserdata } from '@/apis'
import type { UploadProps } from 'element-plus'


const imageUrl = ref('')
const name = ref('')
const id = ref('')
const signature = ref('')
const imageName = ref('')
const socialTag = reactive<Array<Record<string, string>>>([])


const socialOptions = [
    { key: "QQ", value: "" },
    { key: "weixin", value: "" },
    { key: "github", value: "" },
    { key: "youjian", value: "" },
    { key: "bilibili", value: "" }
]

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    resppnse,
    uploadFile
) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
    imageName.value = uploadFile.name
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.size / 1024 / 1024 > 10) {
        ElMessage.error('图片过大')
        return false
    }
    return true
}
function addSocialTag(item: Record<string, string>) {
    let index = socialTag.findIndex(index => index.key === item.key)
    if (index === -1) {
        socialTag.push(item)
    } else {
        socialTag.splice(index, 1)
    }
}
function confirmFix() {
    uploadUserdata({
        avator: imageName.value,
        name: name.value,
        id: id.value,
        socialTag: socialTag,
        signature: signature.value
    }).then(res => {
        console.log(res);
    })
}
</script>
<style scoped>
.userinfo {
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/*  头像 */
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.avatar-uploader :deep() .el-upload {
    border: 1px dashed #303133;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader :deep() .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #303133;
    width: 178px;
    height: 178px;
    text-align: center;
}

.userinfo .userinfo-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 20rem;
}

.userinfo .userinfo-form .social-tag {
    display: flex;
    gap: 0.5rem;
}

.userinfo .userinfo-social-tag {
    display: flex;
    gap: 0.5rem;
}
</style>