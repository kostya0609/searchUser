<template>
  <div class="sidebar sidebar__container">
    <h3 class="sidebar__title">
      Поиск сотрудников
    </h3>

    <Pagination
      v-if="totalUsersFind"
      class="sidebar__pagination-up"
      :total="totalUsersFind"
      :pageSizes="[2,  4,  6,  8, 10]"
      :layout="'total, sizes'"
      @update="updateShowUsers"
      ref="paginationUpRef"
    />

    <Search
      class="sidebar__search"
      @executed="updateShowUsers"
    />

    <h3 class="sidebar__title" >
      Результаты
    </h3>

    <p
      v-if="!totalUsersFind"
      class="sidebar__result-msg"
    >
      {{resultMsg}}
    </p>

    <UserCardMini
      v-for="(user, idx) in showUsers"
      :key="idx"
      :userData="user"
      class="sidebar__card"
      @click="store.commit('selectUserId', user.id)"
    />

    <Pagination
      v-if="totalUsersFind"
      class="sidebar__pagination-down"
      :total="totalUsersFind"
      :pageSizes="[2,  4,  6,  8,  10]"
      :pagerCount="5"
      @update="updateShowUsers"
      ref="paginationDownRef"
    />
  </div>

</template>

<script setup>
import {computed, ref} from 'vue';

import { Pagination } from "@/shared/ui"
import { Search, UserCardMini } from './components'
import { useStore } from 'vuex';

const store = useStore();

const totalUsersFind = computed(() => store.getters.totalUsersFind );

const paginationUpRef = ref();
const paginationDownRef = ref();

const showUsers = ref([]);

const resultMsg = ref('начните поиск');

const updateShowUsers = (currentPage = 1, pageSize = 4) => {
  resetSearch();
    
  if(!totalUsersFind.value) return;

  upadatePaginationData(currentPage, pageSize);
  showUsers.value = store.getters.showUsers( (currentPage - 1) * pageSize , (currentPage - 1) * pageSize + pageSize );
};

const resetSearch = () => {
  showUsers.value = [];
  store.commit('selectUserId', null);
  resultMsg.value = 'ничего не найдено'
};

const upadatePaginationData = (currentPage = 1, pageSize = 4) => {
  paginationUpRef.value.setCurrentPage(currentPage);
  paginationUpRef.value.setPageSize(pageSize);

  paginationDownRef.value.setCurrentPage(currentPage);
  paginationDownRef.value.setPageSize(pageSize);
};

</script>

<style scoped lang="scss">
.sidebar{
  &__container{
    margin: 20px;
  }
  &__title{
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
  }
  &__pagination-up{
    display: flex;
    justify-content:space-between;
  }
  &__search{
    margin: 20px 0;
  }
  &__card{
    margin: 20px 0;
    cursor: pointer;
  }
  &__result-msg{
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
  }
  &__pagination-down{
    display: flex;
    justify-content:center;
  }
}
</style>

