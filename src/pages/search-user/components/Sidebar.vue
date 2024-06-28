<template>
    <Preloader :loading="loading">
        <h3>Sidebar</h3>
        <el-input v-model="query" />
        <el-button
        @click="search"
        >OK
            </el-button>
    </Preloader>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Preloader } from '@/shared/ui';
import { useStore } from 'vuex';

const store = useStore();

const query = ref(null);

const loading = computed(() => { return store.getters.loading });

const search = async () => {
      let params = {id: 5};
      let result = store.dispatch('searchUser', params);
      
      if(!result) return;


};
</script>
