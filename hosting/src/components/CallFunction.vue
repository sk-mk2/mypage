<template>
  <div>
    <p>
      <button v-on:click="callFirebase" class="square_btn">Call Counter Function</button>
    </p>
    count:{{ count }}

  </div>
</template>

<script>
  import { myFetch } from '../util.js';
  const baseUrl = 'https://us-central1-mypage-90953.cloudfunctions.net/api/';
  //const baseUrl = 'http://localhost:5000/mypage-90953/us-central1/api/';
  export default {
    data: () => {
        return {
            count: 0,
        }
    },
    methods: {
        callFirebase: async function () {
            const url = baseUrl + 'count';
            this.count = JSON.parse(await myFetch(url)).pushCount;
        }
    }
  };
</script>
