<template>
    <div>
        <input type="checkbox" :value="value" @click="$emit('toggleCheckBox', !value)">
    </div>
    
</template>

<script>
export default {
    props: ['value']
}
</script>

<style>

</style>