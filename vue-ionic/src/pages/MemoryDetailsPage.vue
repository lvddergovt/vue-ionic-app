<template>  
	<base-layout :pageTitle="loadedMemory ? loadedMemory.title : 'Loading...'" pageDefaultBackLink="/memories">

    <h2 v-if="!loadedMemory">Could not find memory</h2>
    <memory-overview v-else 
                     :title="loadedMemory.title"
                     :image="loadedMemory.image"
                     :description="loadedMemory.description"></memory-overview>
  </base-layout>
</template>

<script>
import {  } from "@ionic/vue";
import MemoryOverview from '../components/memories/MemoryOverview.vue';

export default {
  components: {
    MemoryOverview
  },

  data() {
    return {
      memoryId: this.$route.params.id
    }
  },

  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    }
  },

  // only needed if id would change on detail page, which is not the case for now
  // watch: {
  //   '$route'(currentRoute) {
  //     this.memoryId = currentRoute.params.id;
  //   }
  // }

};

</script>