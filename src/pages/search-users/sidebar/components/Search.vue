<template>
  <div>
    <el-input
      v-model="query"
      @keyup.enter="search"
      @change="handleChange"
      placeholder="Введите ID или username"
    />
  </div>
 </template>
<script setup>

import {ref} from "vue";
import {useStore} from "vuex";
import {notify} from "@/shared/utils";

const store = useStore();

const emit = defineEmits(['executed']);

const query = ref(null);

const handleChange = () => {
  if (!query.value){
    store.commit('selectUserId', null);
    store.commit('searchResult', []);
  }
}

const search = async () => {
  if(!query.value){
    notify.warning('Поиск пользователей', 'Необходимо ввести ID пользователя или username');
    emit('executed');
    return;
  }

  let params = {id: [], username: []};

  let queryContent = query.value ? query.value.split(/\s*,\s*/) : [];

  if (!isNaN(Number(queryContent[0]))) params.id = queryContent; else params.username = queryContent;

  await store.dispatch('searchUser', params);

  emit('executed');
};
</script>