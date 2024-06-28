<template>
    <div>
        <h3>Sidebar</h3>
        <el-input v-model="query" />
        <el-button
        @click="search"
        >OK
            </el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {UserRepo} from "@/shared/api"
import { notify } from '@/shared/utils';


const query = ref(null);
const loading = ref(null);

const search = async () => {
    try {
    loading.value = true;

    let result = await UserRepo.search({id : 50});

    console.log('result - ', result)
    

  } catch (e) {
    notify.error(e.message);
    throw e;
  } finally {
    loading.value = false;
  }
    
};
</script>
