<template>
  <Preloader :loading="loading">
  <el-container>
		<el-main>
      <SearchUsers/>
		</el-main>
	</el-container>
  </Preloader>
</template>

<script setup>
import {Preloader} from '@/shared/ui';
import {SearchUsers} from "@/pages/search-users"
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();
const loading = computed(() => store.getters.loading );
</script>


<style scoped lang="scss">

</style>
