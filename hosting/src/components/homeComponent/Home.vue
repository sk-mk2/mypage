<template>
    <div>
        <h2>Hello, World!!</h2>
        <p>
        このページは、sk-mk2が学習していることのアウトプット先として
        使われています。
        </p>
        <h3>当ホームページで使ってるフレームワーク・ツール</h3>
        <v-list v-for="(tool,index) in tools" v-bind:key="index">
            ・{{tool}}
        </v-list>
        <p></p>
        <h3>勉強していること</h3>
        <p>
        コンピューターサイエンス全般
        そのうちリスト化する
        </p>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            tools: [
                'Firebase',
                'Node',
                'Vue',
                'Vuetify',
                'CircleCI',
                'webpack',
            ]
        }
    },
}
</script>

<style>
    h3 {
        border-bottom: solid 1px black;
        display: inline-block;
    }
</style>


