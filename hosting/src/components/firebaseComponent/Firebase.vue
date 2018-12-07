<template>
<div>
    <h2> Firebase </h2>
    <v-container text-xs-center>
        <CallFunction></CallFunction>
        <GetMemo></GetMemo>      
        <AddMemo></AddMemo>
    </v-container>
</div>
</template>

<script>
import GetMemo from './GetMemo.vue';
import CallFunction from './CallFunction.vue';
import AddMemo from './AddMemo.vue';
export default {
    components: {
        GetMemo,
        CallFunction,
        AddMemo
    }
}
</script>

