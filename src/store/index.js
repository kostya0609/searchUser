import { createStore } from 'vuex'
import { UserRepo } from "@/shared/api";
import { notify } from '@/shared/utils';

export default createStore({
  state: {
    loading: false,
    searchResult: [],
    selectUserId: null,
  },

  getters: {
    loading: s => s.loading,
    searchResult: s=> s.searchResult,
    selectUserId: s=> s.selectUserId,

    totalUsersFind: s=> s.searchResult.length,

    showUser: s=> s.searchResult.find(user => user.id === s.selectUserId),

    showUsers: s=> (from, to)=> s.searchResult.slice(from, to),
  },

  mutations: {
    setLoading(s,v){
      s.loading = v;
    },
    selectUserId(s,v){
      s.selectUserId = v;
    },
    searchResult(s,v){
      s.searchResult = v;
    },
  },

  actions: {
    async searchUser(ctx, params){
      let result = null;
      
      try {
        ctx.state.loading = true;
    
        result = await UserRepo.search(params);
        notify.success('Поиск пользователей');
    
      } catch (e) {
        notify.error(e.message);
        throw e;
      } finally {
        ctx.state.loading = false;
        ctx.state.searchResult = result;
      }
    }
  },
  modules: {
  }
})
