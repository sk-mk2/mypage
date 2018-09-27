<template>
  <div>
  <h2>携帯からCI/CDできた</h2>
  <span>{{ message }}</span>
  </div>
  
</template>

<script>
  export default {
      data () {
          return  {
              message: 'hello!'
          }
      },
      created () {
          this.message = 'bye'
      }
  }
</script>
