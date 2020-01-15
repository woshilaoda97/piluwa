import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const createVuex = Vuex => {
    return new Vuex.Store({
        state,
        getters,
        mutations,
        actions,
    })
}

export default createVuex;