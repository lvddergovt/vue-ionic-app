import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      memories: [
        { 
          id: 'm1', 
          image: 'https://picsum.photos/id/1018/3914/2935',
          title: 'Trip to the mountains', 
          description: 'It was a nice trip.' 
        },
        { 
          id: 'm2', 
          image: 'https://picsum.photos/id/1038/3914/5863',
          title: 'Lakeside Holiday', 
          description: 'We went surfing.' 
        },
        { 
          id: 'm3',
          image: 'https://picsum.photos/id/1065/3744/5616',
          title: 'A day in Barcelona', 
          description: 'I love Spain!' 
        },
      ]
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description
      }

      state.memories.unshift(newMemory);
    }
  },
  actions: {
    addMemory(context, memoryData) {
      // Add memory to list
      context.commit('addMemory', memoryData);
      // Additional save functionality goes here
    }
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find(m => m.id === memoryId);
      }
    }
  }
});

export default store;