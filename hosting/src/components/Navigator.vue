<template>
        <v-navigation-drawer permanent>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>
              Contents
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
  
      <v-divider></v-divider>
  
      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="click"
        >
        　<router-link tag="div" :to = item.path >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
  
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        　</router-link>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
import router from '../router';
export default {
    router: router,
    data: () =>  {
        //多分おかしい
        //routeのpathが変わったらここも変えなきゃいけなくなる
        return {
        items: [
            {title: 'Home', icon: 'dashboard', path: '/'},
            {title: 'WebAuthn', icon: 'fa-certificate' ,path:'/web-auth'},
            {title: 'Firebase', icon: 'fa-fire' ,path:'/firebase'},
        ],
        right: null
        }
    },
    methods: {
        click (event) {
            console.log(event);

        }
    }
}
</script>

