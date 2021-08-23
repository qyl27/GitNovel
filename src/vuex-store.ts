import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increase(state : any) {
            state.count += 1;
        },
        decrease(state : any) {
            state.count -= 1;
        }
    }
})

export default store;
