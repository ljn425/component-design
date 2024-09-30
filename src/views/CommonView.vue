<template>
    <div>
      <AppHeader :headerText="headerText"></AppHeader>
      <AppContent :items="items" @renewItems="changeItems" @resetItems="resetItems"></AppContent>
    </div>
  </template>
  
  <script>
  import AppHeader from '@/components/common/AppHeader.vue';
  import AppContent from '@/components/common/AppContent.vue';

  export default {
    data() {
      return {
        headerText: 'Common Approach',
        items: [10, 20, 30]
      }
    },
    methods: {
      changeItems() {
        this.items = this.items.map(item => item + 10);
      },
      resetItems() {
        this.items = [10, 20, 30];
      }
    },
    components: {
      AppHeader,
      AppContent
    }
  
  }
  </script>
  
  <style>
  
  </style>