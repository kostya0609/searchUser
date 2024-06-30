<template>
  <header class="search-user-header">
    <h1 class="search-user-header__log search-user-header__logo_red">Жилфонд</h1>
    <span class="search-user-body__title">Пользователь</span>
  </header>

  <div class="search-user-body search-user-body_grey">
    <el-row class="search-user-body__container">
        <el-col :sm="7" class="search-user-body__sidebar">
            <Sidebar />
        </el-col>
        <el-col :sm="17" class="search-user-body__result">
            <Result />
        </el-col>
    </el-row>
  </div>

</template>
<script setup>

import { Sidebar, Result } from "@/pages/search-users/components";

</script>

<style scoped lang="scss">
.search-user-header{
  display:flex;
  justify-content: space-between;
  align-items: center;

  &__logo{
    font-size: 32px;
    font-weight: 700;
    line-height: 39.01px;

    &_red{
      color: #E31F24;
    ;
    }
  }
  &__title{
    font-size: 16px;
    font-weight: 400;
    line-height: 19.5px;
  }
}

.search-user-body{
  &_grey{
    background: #FDFDFD;
  }

  &__container{
    box-shadow: 0px 0px 10px 0px #0000001A;
    border: 1px solid #E0E0E0;
    border-radius: 10px 0px 0px 0px;
  }
  &__sidebar{
    align-content: start;
  }
  &__result{
    display: flex;
    flex-direction: column;
    flex: 1;
    border-left: 1px solid #E0E0E0;
  }
}

</style>
