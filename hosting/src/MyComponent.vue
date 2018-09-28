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
            this.message = fetch('https://us-central1-mypage-90953.cloudfunctions.net/helloWorld')
            .then((res) => {
                return res;
            }).catch((err) => {
                return err;
            });
        }
    }
  }
</script>
