<template>
  <div>
    <h1>Slot</h1>
    <ul>
        <ItemList>{{ items[0] }}</ItemList>
        <ItemList>
            {{ items[1] }}
            <button>Click me</button>
        </ItemList>
        <ItemList>
            <div>{{ items[2] }}</div>
            <img src="../assets/logo.png" alt="로고" width="50px" height="50px">
        </ItemList>
        <ItemList>
            <div style="color: blue; font-size: 20px;">{{ items[3] }}</div>
        </ItemList>
    </ul>
  </div>
</template>

<script>
import ItemList from '@/components/slot/ItemList.vue';

export default {
    components: {
        ItemList
    },
    data() {
        return {
            items: ['아이템1', '아이템2', '아이템3', '아이템4']
        }
    },
}
</script>

<style>

</style>