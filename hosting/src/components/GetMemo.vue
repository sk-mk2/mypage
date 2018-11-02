<template>
  <div>
    <button v-on:click="getData" class="square_btn">Get Memo</button>
    
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

  </div>
</template>

<script>
  import { myFetch } from '../util.js';

  const baseUrl = 'https://us-central1-mypage-90953.cloudfunctions.net/api/';
  //const baseUrl = 'http://localhost:5000/mypage-90953/us-central1/api/';
  export default {
    data: () => {
        return {
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
        getData: async function() {
            const url = baseUrl + 'memo';
            this.memos = JSON.parse(await myFetch(url));
        }
    }
  };
</script>
