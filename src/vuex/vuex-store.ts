import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            repo: "",
            novel: {
                name: "GitNovel",
                repo: ""
            }
        }
    },
    mutations: {
        setRepo(state: any, repo: string) {
            state.repo = repo;
        },
        setNovelName(state: any, name: string) {
            state.novel.name = name;
        },
        setNovelRepo(state: any, repo: string) {
            state.novel.repo = repo;
        }
    }
})

export default store;
