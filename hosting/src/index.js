import Vue from 'vue';
import MyComponent from './MyComponent.vue';

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    template: `
    <div>
        <p>{{ message }}</p>
        <input v-model="message">
        <MyComponent></MyComponent>
    </div>
    `,
    components: {
        MyComponent
    }
});
