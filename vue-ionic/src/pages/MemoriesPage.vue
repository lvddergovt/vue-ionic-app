<template>  
	<base-layout pageTitle="All memories">

    <memories-list :memories="memories"></memories-list>

  </base-layout>
</template>

<script>
import MemoriesList from '../components/memories/MemoriesList.vue';

export default {

  components: {
    MemoriesList
  }, 
  computed: {
    memories() {
      return this.$store.getters.memories;
    }
  }
};

</script>