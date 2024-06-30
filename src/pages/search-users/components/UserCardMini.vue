<template>
  <div class="card card_white card__container">

    <div class="card__img">
      <el-image src="/assets/img/no_photo.png" fit="contain" />
    </div>

    <div :class="['card__info', {'card__info_select' : userData.id === selectUserId}]">

      <div class="card__user-name card__user-name_bold">
        {{userData.username}}
      </div>

      <div class="card__user-email">
        {{userData.email}}
      </div>

    </div>

  </div>

</template>

<script setup>

import {useStore} from "vuex";
import {computed} from "vue";

defineProps({
  userData: {
    type: Object,
  },
});

const store = useStore();

const selectUserId = computed(() => store.getters.selectUserId );

</script>

<style scoped lang="scss">
.card{
  &_white{
    background-color: #FFF;
  }
 &__container{
   display: flex;
   border-right: 1px solid #E0E0E0;
   border-radius: 10px;
   box-shadow: 0px 0px 10px 0px #0000001A;
   overflow: hidden;
 }
 &__img{
   flex: 1 1;
   border-right: 1px solid #E0E0E0;
   align-content: center;
 }
 &__info{
   flex: 2 1;
   align-content:center;
   padding:10px;

   &_select{
     background-color: #0000001A;
   }
 }
 &__user-name{
   word-break:break-word;
   font-size: 14px;
   font-weight: 400;
   line-height: 17.07px;
   &_bold{
     font-weight:bold;
   }
 }
 &__user-email{
   word-break:break-word;
 }

}

</style>
