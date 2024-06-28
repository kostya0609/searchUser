<template>
    <Preloader :loading="loading">
    <el-row>
        <el-col :md="6">
            <Sidebar />
        </el-col>
        <el-col :md="18">
            <Result />
        </el-col>
    </el-row>
    </Preloader>
</template>

<script setup>
import { ref } from "vue";
import { Preloader } from '@/shared/ui';
import { Sidebar, Result } from "@/pages/search-user/components";

const loading = ref(false);

</script>