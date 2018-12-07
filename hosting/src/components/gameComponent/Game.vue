<template>
  <div>
    <h3>FizzBuzzGame</h3>
    <p>
      なにかしらちゃんとゲームを作りたい
    </p>
    <button v-on:click="fizzbuzz" class="square_btn">count up</button>
    {{value}}
    
  </div>
</template>

<script>
  export default {
    data: () => {
        return {
            count: 0,
            value: 0
        }
    },
    methods: {
        fizzbuzz() {
          this.count++;
          const num = this.count;
          //演算子の優先順位の仕様をわかっていなかった
          this.value = !(num%15)?'FizzBuzz':!(num%3)?'Fizz':!(num%5)?'Buzz':num;           
        }
    }
  };
</script>
