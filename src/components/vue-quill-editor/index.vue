<template>
    <QuillEditor ref="QuillEditorRef" :options="options" content-type="html" @update:content="textChange">
    </QuillEditor>
</template>

<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


const props = defineProps({
    type: Boolean
})

const emit = defineEmits(['contentData'])

const trendsType = [
    ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
    [{ indent: '-1' }, { indent: '+1' }], // 缩进
    [{ direction: 'rtl' }], // 文本方向
    [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
    [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
    [{ align: [] }], // 对齐方式
    ['clean'], // 清除文本格式
]

const articleType = [
    ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
    [{ indent: '-1' }, { indent: '+1' }], // 缩进
    [{ direction: 'rtl' }], // 文本方向
    [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
    [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
    [{ align: [] }], // 对齐方式
    ['clean'], // 清除文本格式
    ['image']
]

const options = {
    debug: 'info',
    modules: {
        toolbar: props.type ? trendsType : articleType
    },
    placeholder: '说点什么呗',
    readOnly: false,
    theme: 'snow',
}
const textChange = (e: unknown) => {
    emit('contentData', e)
}
</script>

<style scoped></style>