<template>
  <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :pager-count="pagerCount"
      :total="total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      size="small"
  />

</template>
<script setup>
import { ref } from 'vue';

defineProps({
  total: {
    type: Number,
    default: 0,
  },
  pageSizes: {
    type: Array,
    default: [10, 20 ,50],
  },
  pagerCount: {
    type: Number,
    default: 7,
  },
  layout: {
    type: String,
    default: 'prev, pager, next'
  },
});

const emit = defineEmits(['update']);

const currentPage = ref(1);

const pageSize = ref(10);

const handleCurrentChange = (val) => {
  currentPage.value = val;

  console.log(currentPage.value, pageSize.value);

  emit('update', currentPage.value, pageSize.value);
};

const handleSizeChange = (val) => {
  pageSize.value = val;
  emit('update', currentPage.value, pageSize.value);
};

defineExpose({
  setCurrentPage: page => {
    currentPage.value = page;
  },
  setPageSize: size => {
    pageSize.value = size;
  },
});
</script>