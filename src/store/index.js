import { createStore } from 'vuex'
import { UserRepo } from "@/shared/api";
import { notify } from '@/shared/utils';

export default createStore({
  state: {
    loading: false,
  },

  getters: {
    loading: s => s.loading,
  },

  mutations: {
    setLoading(s,v){
      s.loading = v;
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
        return result;
      }

    }
  },
  modules: {
  }
})
