<template>
    <div class="top">
        <div class="my-Avatar" @click="backtoBackend">
            <img src="@/assets/Avator-多老A梦.png">
        </div>
        <div class="words">一直学习，一直寻觅</div>
        <el-dialog width="32rem" class="dialog" v-model="dialogFormVisible" title="登录">
            <el-form>
                <el-form-item label="账号">
                    <el-input v-model="id" type="text" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="paw" type="password" />
                    <span class="tips">{{ tips }}</span>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button v-for="(btn, index) in buttonData " :key="index" :type="btn.type" @click="toBackend">{{
                        btn.role }}
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { login, isLogin } from "@/apis"
import { ref } from "vue";
import { useRouter } from "vue-router";
import { setUserInfo } from "@/utils";

let dialogFormVisible = ref<boolean>(false)
const id = ref<string>('')
const paw = ref<string>('')
const router = useRouter()
const tips = ref<string>('如果你需要进入后台参观，请微信联系我')

type buttonDataType = {
    role: string,
    type: 'success' | "danger",
}

const buttonData: Array<buttonDataType> = [
    { role: "登录", type: "danger" }
]
//未登录
function toBackend() {
    login({ id: id.value, paw: paw.value }).then(res => {
        if (res.status == 200) {
            setUserInfo(res.data as unknown as string)
            router.push("/control/index")
            dialogFormVisible.value = false
        } else {
            tips.value = "密码错误，请重新登录"
        }
    })
}
// 登录后
async function backtoBackend() {
    const result = await isLogin()
    console.log(result.data);
    if (result.data) {
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
    text-align: center;
}
</style>