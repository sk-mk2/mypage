<template>
  <div>
  <h2>携帯からCI/CDできた</h2>
  <span>{{ message }}</span>
  <button v-on:click="callFirebase">Button</button>
  </div>
</template>

<script>
  export default {
    data: () => {
        return {
            message: 'hello!'
        }
    },
    methods: {
        callFirebase: function () {
            //const url = 'https://us-central1-mypage-90953.cloudfunctions.net/helloWorld';
            const url = 'http://localhost:5000/mypage-90953/us-central1/api/count';

            fetch(url, {
                mode: 'cors'
            })
            .then((res) => {
                return res.text();
            })
            .then((text) => {
                this.message = text;
            })
            .catch((err) => {
                return err;
            });
        }
    }
  }
</script>
