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
    
    <v-data-table
        :headers="headers"
        :items="memos"
        hide-actions
        class="elevation-1"
    >
    <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.memo }}</td>
    </template>
    </v-data-table>

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
            memos: [],
            headers: [
                {
                    text: 'Name',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                {
                    text: 'Memo', value: 'memo',
                    sortable: false
                }
            ]
        }
    },
    methods: {
        callFirebase: async function() {
            const url = baseUrl + 'count';
            this.count = JSON.parse(await myFetch(url)).pushCount;
        },
        getData: async function() {
            const url = baseUrl + 'memo';
            this.memos = JSON.parse(await myFetch(url));
        }
    }
  };
</script>
