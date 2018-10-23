<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row justify-space-around>
    <v-flex>
    <v-card dark color="primary">
    <v-card-text class="px-10">Let's call Firebase Cloud Function</v-card-text>
    <v-btn color="grey darken-1" v-on:click="callFirebase">{{ count }}</v-btn>
    </v-card>
    </v-flex>
    <v-flex>
    <v-card dark color="primary">
    <v-card-text class="px-10">Let's get data from FirebaseRealtimeDatabase</v-card-text>
    <v-btn color="grey darken-1" v-on:click="getData">get db data</v-btn>
    </v-card>
    </v-flex>
    </v-layout>
    ここテーブルにする
    <li v-for="(item) in  databaseData" v-bind:key="item.id">
        {{ Object.keys(item)[0] }}        {{ Object.values(item)[0] }}        
    </li>
  </v-container>
</template>

<script>
  import { myFetch } from '../util.js';

  const baseUrl = 'https://us-central1-mypage-90953.cloudfunctions.net/api/';
  //const baseUrl = 'http://localhost:5000/mypage-90953/us-central1/api/';
  export default {
    data: () => {
        return {
            count: 'hello! push me!',
            databaseData: []
        }
    },
    methods: {
        callFirebase: async function() {
            const url = baseUrl + 'count';
            this.count = JSON.parse(await myFetch(url)).pushCount;
        },
        getData: async function() {
            const url = baseUrl + 'memo';
            this.databaseData = JSON.parse(await myFetch(url));
        }
    }
  };
</script>
