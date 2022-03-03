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
  getters: {
    memories(state) {
      return state.memories;
    }
  }
});

export default store;