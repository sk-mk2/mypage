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
    <v-btn color="grey darken-1" v-on:click="getData">{{ databaseData }}</v-btn>
    </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { myFetch } from '../util.js';
  export default {
    data: () => {
        return {
            count: 'hello! push me!',
            databaseData: 'get DB data'
        }
    },
    methods: {
        callFirebase: async function() {
            //URL書き換えなきゃ行けないのめんどくさい
            //const url = 'https://us-central1-mypage-90953.cloudfunctions.net/api/count';
            const url = 'http://localhost:5000/mypage-90953/us-central1/api/count';
            this.count = await myFetch(url);
        },
        getData: async function() {
            this.databaseData = 'まだ実装できていないよ';
        }
    }
  };
</script>
