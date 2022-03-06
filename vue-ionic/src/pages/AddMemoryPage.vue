<template>
	<base-layout pageTitle="Add a memory" pageDefaultBackLink="/memories">
    
    <create-memory-form @saveMemory="saveMemory"></create-memory-form>

  </base-layout>
</template>

<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';

export default {
  components: {
    CreateMemoryForm
  },

  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch('addMemory', memoryData);
      this.$router.replace("/memories");
    }
  }
}
</script>