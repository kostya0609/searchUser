<template>
    
    <el-row>
        <el-col :md="6">
            <Sidebar />
        </el-col>
        <el-col :md="18">
            <Result />
        </el-col>
    </el-row>
    
</template>

<script setup>
import { ref } from "vue";
import { Sidebar, Result } from "@/pages/search-user/components";

const loading = ref(false);

</script>