<template>
  <v-container grid-list-md>
      入力する場所作る
       <button v-on:click="addMemo" class="square_btn">Add Memo</button>
       {{ memo }}
  </v-container>
</template>

<script>
  import { myFetch } from '../util.js';

  const baseUrl = 'https://us-central1-mypage-90953.cloudfunctions.net/api/';
  //const baseUrl = 'http://localhost:5000/mypage-90953/us-central1/api/';
  export default {
    data: () => {
        return {
            memo: ''
        }
    },
    methods: {
        addMemo: async function() {
            const url = baseUrl + 'memo';
            this.memo = {fukuda: 'atsushi'}
            const options = {

                method: 'POST',
                body: JSON.stringify(this.memo)
            }
            this.memo = await myFetch(url, options);
        }
    }
  };
</script>
