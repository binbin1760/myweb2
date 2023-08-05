<template>
    <div class="airticle">
        <div class="airticle-table">
            <el-table :data="filterTableData" style="width: 100%">
                <el-table-column label="创建时间" prop="date" />
                <el-table-column label="文章标题" prop="title" />
                <el-table-column label="文章类型" prop="type" />
                <el-table-column align="right">
                    <template #header>
                        <el-input v-model="search" size="small" placeholder="请输入标题" />
                    </template>
                    <template #default="scope">
                        <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="small" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />
        </div>
        <!-- 抽屉 -->
        <div>
            <Draw v-model:data="drawerData" v-model:show="drawer"></Draw>
        </div>
    </div>
</template>
<!--  
    表格：
        date  发表时间
        title 标题    ------ 修改标题
        type  文章类型 ----下拉框修改文章类型
        btn   删除
 -->
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { Draw } from './component'

interface Article {
    date: string
    title: string
    type: Array<string>
}

const search = ref('')
// 抽屉
let drawer = ref<boolean>(false)
let drawerData = reactive<Partial<Article>>({})


const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.title.toLowerCase().includes(search.value.toLowerCase())
    )
)

function handleEdit(row: Article) {
    drawerData = row
    drawer.value = true
}

const tableData: Article[] = [
    {
        date: '2016-05-03',
        title: 'Tom',
        type: ["vue", "node"],
    },
    {
        date: '2016-05-05',
        title: 'wom',
        type: ["vue", "JS"],
    },
    {
        date: '2016-05-13',
        title: 'Tom',
        type: ["vue", "TS"],
    },
    {
        date: '2016-05-23',
        title: 'Tom',
        type: ["vue", "cc"],
    },

]
</script>
<style scoped>
.airticle {
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.airticle .airticle-table {
    flex: 1;
}

.airticle .pagination {
    align-self: center;
    height: 2rem;
    margin-bottom: 10px;
}
</style>