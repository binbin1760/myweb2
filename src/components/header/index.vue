<template>
    <div class="top">
        <div class="my-Avatar" @click="backtoBackend">
            <img src="@/assets/Avator-多老A梦.png">
        </div>
        <div class="words">一直学习，一直寻觅</div>
        <el-dialog width="32rem" class="dialog" v-model="dialogFormVisible"
            title="Are you sure to my backend system ？my friends ">
            <el-form>
                <el-form-item label="key">
                    <el-input v-model="key" type="password" />
                    <span class="tips">{{ tips }}</span>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button v-for="(btn, index) in buttonData " :key="index" :type="btn.type"
                        @click="toBackend(btn.roletype)">{{ btn.role }}
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { login } from "@/apis"
import { ref } from "vue";
import { useRouter } from "vue-router";
import { setUserInfo, getUsrInfo } from "@/utils";

let dialogFormVisible = ref<boolean>(false)
const key = ref<string>('')
const router = useRouter()
const tips = ref<string>('如果你向进入后台参观，请微信联系我')

type buttonDataType = {
    role: string,
    type: 'success' | "danger",
    roletype: string
}

const buttonData: Array<buttonDataType> = [
    { role: "admin", type: "danger", roletype: "admin" }
]
//未登录
function toBackend(type: string) {
    login(key.value, type).then(res => {
        setUserInfo({ role: res.data })
    })

    dialogFormVisible.value = false
    router.push("/control/index")
}
// 登录后
function backtoBackend() {
    const userinfo = getUsrInfo()
    if (userinfo?.token) {
        router.push("/control/index")
    } else {
        dialogFormVisible.value = true
    }
}
</script>

<style scoped>
.top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 180px;
    background-image: url('@/assets/被逼无奈的选择.jpg');
}

.top .my-Avatar img {
    width: 82px;
    height: 82px;
    border-radius: 50%;
    background: aqua;
    cursor: pointer;
}

.top .words {
    padding: 10px 10px;
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    color: #fff;
}

/* dialog */
.dialog-footer {
    display: flex;
    justify-content: center;
}

.tips {
    margin-top: 10px;
    font-size: 14px;
    color: #f78989;
}
</style>