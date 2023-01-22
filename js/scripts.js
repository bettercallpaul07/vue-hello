const { createApp } = Vue

createApp({
    data() {
      return {
        elem: {
            message: 'Hello Vue!',
            imglink: "https://unsplash.it/300/300?image=15"
        }

      }
    },
    methods: {

    }
  }).mount('#app');