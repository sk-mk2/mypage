import Vue from 'vue';
import VueRouter from 'vue-router';
import Firebase from './components/Firebase.vue';
import WebAuth from './components/WebAuth.vue';
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
        <li><router-link to="/">Go to Home</router-link></li>
        <li><router-link to="/web-auth">Go to WebAuth</router-link></li>
        <li><router-link to="/firebase">Go to Firebase</router-link></li>
        <router-view></router-view>
        <v-footer class="footer">
            <a href="https://www.github.com/sk-mk2">
            <v-icon medium color="black">fab fa-github</v-icon>
            </a>
        </v-footer>
    </v-app>
    `,
    router: router,
    components: {
        Firebase,
        WebAuth
    }
});
