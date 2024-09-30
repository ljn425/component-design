<template>
  <div>
    <h1>Controll</h1>
    <check-box v-model="checked" @toggleCheckBox="toggle"></check-box>
  </div>
</template>

<script>
import CheckBox from '../components/controlled/CheckBox.vue'
export default {
  components: { CheckBox },
  data() {
    return {
        checked: false,
    }
  },
  methods: {
    toggle(value) {
        this.checked = value; 
    }
  }
}
</script>

<style>

</style>