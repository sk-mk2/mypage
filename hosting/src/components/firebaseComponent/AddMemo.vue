<template>
  <div>
       NAME
       <v-text-field v-model="name"></v-text-field>
       MEMO
       <v-textarea v-model="memo" placeholder="メモ欄" rows="4" cols="40"></v-textarea>
       <button v-on:click="addMemo" class="square_btn">Add Memo</button>
       <p> {{ name }}:{{ memo }}を送ります </p>
       <p> {{ info }} </p>
  </div>
</template>

<script>
  import { myFetch } from '../../util.js';

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

