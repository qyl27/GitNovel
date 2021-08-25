import {createApp} from 'vue';
import router from "./routers";
import store from "./vuex/vuex-store";
// @ts-ignore
import vuetify from './plugins/vuetify';
import App from './App.vue';

// @ts-ignore
import github from 'octonode';

let client = github.client();

const app = createApp(App);

app.config.globalProperties.$github = github;
app.config.globalProperties.$githubClient = client;

app.use(router);
app.use(store);
app.use(vuetify);

app.mount('#app');
