<template>
  <div class="card card__container">

    <div class="card__img card__img_white">
      <el-image src="/assets/img/no_photo.png" fit="contain" />
    </div>

    <div class="card__info">

      <h3 class="card__name card__title">{{userData.name}}</h3>

      <div class="card__email">
        <span class="card__sub-title">email:</span>
        <span class="card__text">{{userData.email}}</span>
      </div>

      <div class="card__phone">
        <span class="card__sub-title">phone:</span>
        <span class="card__text">{{userData.phone}}</span>
      </div>

      <div class="card__about">
        <span class=" card__title">О себе:</span>
        <p class="card__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

    </div>

  </div>
</template>

<script setup>

defineProps({
  userData: {
    type: Object,
  },
});

</script>

<style scoped lang="scss">
.card{
  &__container{
    display: flex;
    column-gap: 50px;
    align-items: stretch;
    overflow: hidden;
  }
  &__img{
    flex: 1 1;
    border: 1px solid #E0E0E0;
    align-content:center;

    &_white{
      background-color: #FFF;
    }
  }
  &__info{
    flex: 1 1;
  }
  &__title{
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
  }
  &__sub-title{
    font-size: 14px;
    font-weight: 600;
    line-height: 19.6px;
  }
  &__text{
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  }
  &__name{
    margin-top: 0px;
  }
  &__email{
    margin-bottom: 10px;
    & span:first-child {
      padding-right: 10px;
     }
  }
  &__phone{
    margin-bottom: 20px;
    & span:first-child {
      padding-right: 10px;
    }
  }
  &__about{
    & p:last-child {
      line-height: 17.07px;
      margin-top: 20px;
    }
  }

}

</style>