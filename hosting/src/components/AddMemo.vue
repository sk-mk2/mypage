<template>
  <v-container grid-list-md>
       NAME:<input v-model="name" class="input">
       MEMO:<textarea v-model="memo" class="input" placeholder="メモ欄" rows="4" cols="40"></textarea>
       <button v-on:click="addMemo" class="square_btn">Add Memo</button>
       <p> {{ name }}:{{ memo }}を送ります </p>
       <p> {{ info }} </p>
  </v-container>
</template>

<script>
  import { myFetch } from '../util.js';

  const baseUrl = 'https://us-central1-mypage-90953.cloudfunctions.net/api/';
  //const baseUrl = 'http://localhost:5000/mypage-90953/us-central1/api/';
  export default {
    data: () => {
        return {
            name:'',
            memo:'',
            info:''
        }
    },
    methods: {
        addMemo: async function() {
            const url = baseUrl + 'memo';
            const options = {
                method: 'POST',
                body: JSON.stringify({name:this.name, memo: this.memo})
            }
            this.info = await myFetch(url, options);
            this.name = '';
            this.memo = '';
            
        }
    }
  };
</script>

<style>
.input {
    border: solid
}
</style>
