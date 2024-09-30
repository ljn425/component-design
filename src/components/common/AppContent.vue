<template>
  <div>
    <ul>
        <li v-for="item in items" :key="item">
            {{ item }}
        </li>
    </ul>
    <button @click="$emit('renewItems')">renew items</button>
    <button @click="resetItems">reset</button>
  </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        }
    },
    methods: {
        resetItems(){
            this.$emit('resetItems')
        }
    }
}
</script>

<style>

</style>