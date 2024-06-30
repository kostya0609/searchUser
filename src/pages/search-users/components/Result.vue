<template>
  <div :class="['result', 'result__container', {'result__container_empty': !showUser}]">
      <UserCard
        v-if="showUser"
        class="result__card"
        :userData="showUser"
      />
      <div
        v-else
        class="result__notify"
      >
        <p class="result__text">
          Выберите сотрудника, чтобы посмотреть его профиль
        </p>
      </div>
    </div>
</template>

<script setup>

import {UserCard} from './'
import {computed} from 'vue';

import { useStore } from 'vuex';

const store = useStore();

const showUser = computed(() => store.getters.showUser);

</script>

<style scoped lang="scss">
.result{
  &__container{
    flex: 1;
    padding: 20px;
    &_empty{
      align-content: center;
      background: #FFF;
    }
  }
  &__card {}
  &__notify{
    display: flex;
    justify-content: center;
  }
  &__text{
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
  }
}

</style>
