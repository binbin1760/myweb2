<template>
    <div style="border: 1px solid #ccc">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" mode="default" />
        <Editor :style="{ height: props.height, overflowY: 'hidden' }" v-model="valueHtml" :defaultConfig="editorConfig"
            mode="default " @onCreated="handleCreated" @onChange="contentChange()" />
    </div>
</template>
<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IEditorConfig } from '@wangeditor/editor'
import { updateQuillImage, deleteImg } from '@/apis'

type InsertFnType = (url: string, alt: string, href: string) => void
const props = withDefaults(defineProps<{
    height: string
}>(), {
    height: '500px'
})
const emit = defineEmits(['getValue'])
const editorRef = shallowRef()

const valueHtml = ref('')
let oldImgList = ref<Array<string>>([])
const toolbarConfig = {}
let editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
    MENU_CONF: {
        uploadImage: {
            async customUpload(file: File, insertFn: InsertFnType) {
                let formData = new FormData()
                formData.append('image', file)
                const imgUrl = await updateQuillImage(formData)
                const url = `${import.meta.env.VITE_BASE_URL}${imgUrl.data}`
                const alt = imgUrl.data
                const href = `${import.meta.env.VITE_BASE_URL}${imgUrl.data}`
                insertFn(url, alt, href)
            }
        }
    }
}
async function contentChange() {
    let reg = /(?<=img src=").*?(?=" alt=)/g
    let str = valueHtml.value.match(reg)
    let temp: any = str ? str : [];
    if (temp.length < oldImgList.value.length) {
        for (let i = 0; i < oldImgList.value.length; i++) {
            if (!temp.includes(oldImgList.value[i])) {
                const prefixToRemove = import.meta.env.VITE_BASE_URL
                const name = oldImgList.value[i].replace(`${prefixToRemove}/public/images/`, '')
                const data = { name: name }
                deleteImg(data).then(res => {
                    console.log(res);
                })
            }
        }
    }
    oldImgList.value = temp
}

onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor: any) => {
    editorRef.value = editor
}
watch(valueHtml, (newVal) => {
    emit('getValue', newVal)
})
</script>   