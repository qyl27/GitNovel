import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            appName: "GitNovel"
        }
    },
    mutations: {
        setName(state : any, name: string) {
            state.appName = name;
        }
    }
})

export default store;
