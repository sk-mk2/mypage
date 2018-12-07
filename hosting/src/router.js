import VueRouter from 'vue-router';
import Home from './components/homeComponent/Home.vue';
import Firebase from './components/firebaseComponent/Firebase.vue';
import WebAuth from './components/webAuthComponent/WebAuth.vue';
import Game from './components/gameComponent/Game.vue';

const routes = [
    {path:'/', component: Home},
    {path:'/web-auth', component: WebAuth},
    {path:'/firebase', component: Firebase},
    {path:'/game', component: Game},
];

export default new VueRouter({
    routes
});