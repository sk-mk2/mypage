import Vue from 'vue';
//コンポーネントの読み込みが面倒
import GetMemo from './components/GetMemo.vue';
import CallFunction from './components/CallFunction.vue';
import AddMemo from './components/AddMemo.vue';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css";
import "material-design-icons/iconfont/material-icons.css";
import '@fortawesome/fontawesome-free/css/all.css';
import './css/style.css';
Vue.use(Vuetify, {
    iconfont: 'fa'
});
new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    template: `
    <v-app >
        <v-toolbar-title class="title">sk-mk2の学習用ページ</v-toolbar-title>
        <v-container text-xs-center>
          <CallFunction></CallFunction>
          <GetMemo></GetMemo>
          <AddMemo></AddMemo>
        </v-container text-xs-center>
        <v-footer>
            <a href="https://www.github.com/sk-mk2">
            <v-icon medium color="black">fab fa-github</v-icon>
            </a>
        </v-footer>
    </v-app>
    `,
    components: {
        GetMemo,
        CallFunction,
        AddMemo
    }
});
