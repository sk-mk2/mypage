import Vue from 'vue';
import VueRouter from 'vue-router';
import Navigator from './components/Navigator.vue';
import router from './router';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css";
import "material-design-icons/iconfont/material-icons.css";
import '@fortawesome/fontawesome-free/css/all.css';
import './css/style.css';
Vue.use(Vuetify, {
    iconfont: 'fa'
});

Vue.use(VueRouter);

new Vue({
    el: '#app',
    template: `
    <v-app >
        <v-toolbar-title class="title">sk-mk2の学習用ページ</v-toolbar-title>
        <v-content >
        <v-layout row>

        <Navigator></Navigator>
        <router-view></router-view>
        </v-layout>
        </v-content>
        <v-footer class="footer">
            <a href="https://www.github.com/sk-mk2">
            <v-icon medium color="black">fab fa-github</v-icon>
            </a>
        </v-footer>
    </v-app>
    `,
    router: router,
    components: {
        Navigator
    }
});
